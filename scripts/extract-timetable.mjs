/**
 * Extrai a transcrição com layout fixo da grade do Urânia e gera dados por turma.
 * Uso: node scripts/extract-timetable.mjs /caminho/grade.txt client/src/lib/timetableData.ts
 */
import fs from "node:fs";
import path from "node:path";

const [inputPath, outputPath] = process.argv.slice(2);
if (!inputPath || !outputPath) throw new Error("Informe o texto extraído e o arquivo TypeScript de destino.");

const source = fs.readFileSync(inputPath, "utf8").replaceAll("\f", "\n");
const slots = ["07:10", "08:00", "08:50", "10:00", "10:50", "11:40"];
const dayKeys = ["Seg", "Ter", "Qua", "Qui", "Sex"];
const dayLabels = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

function clean(value) {
  const normalized = value.replace(/\s+/g, " ").trim();
  return normalized && !normalized.startsWith("---") ? normalized : "—";
}

function parseBlock(name, block) {
  const lines = block.split("\n");
  const header = lines.find((line) => line.includes("Hor") && dayKeys.every((day) => line.includes(day)));
  if (!header) return null;
  const starts = dayKeys.map((day) => header.indexOf(day));
  const boundaries = starts.slice(0, -1).map((start, index) => Math.floor((start + starts[index + 1]) / 2));
  const schedule = Object.fromEntries(dayLabels.map((day) => [day, []]));

  for (const line of lines) {
    const match = line.match(/^\s*(07:10|08:00|08:50|10:00|10:50|11:40)\s+/);
    if (!match) continue;
    const time = match[1];
    const firstColumnStart = match[0].length;
    for (let index = 0; index < dayLabels.length; index += 1) {
      const start = index === 0 ? firstColumnStart : boundaries[index - 1];
      const end = boundaries[index] ?? line.length;
      schedule[dayLabels[index]].push({ time, subject: clean(line.slice(start, end)) });
    }
  }

  return { name, schedule };
}

const blocks = [...source.matchAll(/Turma:\s*([^\n]+)([\s\S]*?)(?=\n\s*Turma:|$)/g)];
const classes = blocks.map(([, rawName, block]) => parseBlock(rawName.trim(), block)).filter(Boolean);

const fileContents = `/**\n * Dados estruturados da grade CEP — Manhã/12, 2º semestre, vigência em 24/08/2026.\n * Fonte: horario_12_manha_turmas_24_08_2026.pdf fornecido pela usuária.\n */\nexport type TimetableEntry = { time: string; subject: string };\nexport type ClassSchedule = { name: string; schedule: Record<string, TimetableEntry[]> };\n\nexport const schoolDays = ${JSON.stringify(dayLabels)} as const;\nexport const classSchedules: ClassSchedule[] = ${JSON.stringify(classes, null, 2)};\n\nexport const classGroups = {\n  "2ª série": classSchedules.filter((item) => item.name.startsWith("2") && !item.name.includes("FTP")),\n  "3ª série": classSchedules.filter((item) => item.name.startsWith("3") && !item.name.includes("FTP")),\n  "Formação técnica": classSchedules.filter((item) => item.name.includes("FTP")),\n};\n`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, fileContents);
console.log(`Turmas extraídas: ${classes.length}`);
console.log(classes.map((item) => item.name).join(", "));
