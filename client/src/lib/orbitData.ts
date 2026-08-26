/**
 * ORBIT — Caderno Orbital
 * Dados de domínio: matérias, trilhas iniciais e marcos extraídos do calendário escolar 2026 anexado.
 */
export type Subject = {
  name: string;
  abbreviation: string;
  tone: "blue" | "coral" | "yellow" | "navy" | "green" | "lavender";
  progress: number;
  focus: string;
};

export const subjects: Subject[] = [
  { name: "Artes", abbreviation: "AR", tone: "coral", progress: 32, focus: "Portfólio visual" },
  { name: "Educação Física", abbreviation: "EF", tone: "green", progress: 44, focus: "Prática e registro" },
  { name: "Filosofia", abbreviation: "FI", tone: "lavender", progress: 38, focus: "Leitura crítica" },
  { name: "Sociologia", abbreviation: "SO", tone: "yellow", progress: 41, focus: "Conceitos-chave" },
  { name: "Inglês", abbreviation: "IN", tone: "blue", progress: 52, focus: "Vocabulário ativo" },
  { name: "Física", abbreviation: "FÍ", tone: "blue", progress: 58, focus: "Cinemática" },
  { name: "Química", abbreviation: "QU", tone: "coral", progress: 47, focus: "Ligações químicas" },
  { name: "Biologia", abbreviation: "BI", tone: "green", progress: 61, focus: "Ecologia" },
  { name: "Geografia", abbreviation: "GE", tone: "yellow", progress: 46, focus: "Clima e território" },
  { name: "História", abbreviation: "HI", tone: "coral", progress: 74, focus: "Brasil República" },
  { name: "Matemática", abbreviation: "MA", tone: "navy", progress: 55, focus: "Funções" },
  { name: "Língua Portuguesa", abbreviation: "LP", tone: "lavender", progress: 89, focus: "Redação" },
];

export const calendarPdfUrl = "/manus-storage/calendario-escolar-2026_1453f4fd.pdf";

export type SchoolEventKind = "feriado" | "periodo" | "prova" | "comunidade";

export type SchoolEvent = {
  date: string;
  endDate?: string;
  label: string;
  detail: string;
  kind: SchoolEventKind;
};

export const schoolEvents: SchoolEvent[] = [
  { date: "2026-02-05", endDate: "2026-05-14", label: "1º trimestre", detail: "63 dias letivos", kind: "periodo" },
  { date: "2026-03-16", endDate: "2026-03-20", label: "Semana de combate à violência contra a mulher", detail: "Programação escolar indicada no calendário", kind: "comunidade" },
  { date: "2026-04-03", label: "Paixão", detail: "Feriado", kind: "feriado" },
  { date: "2026-04-05", label: "Páscoa", detail: "Feriado", kind: "feriado" },
  { date: "2026-04-21", label: "Tiradentes", detail: "Feriado", kind: "feriado" },
  { date: "2026-05-01", label: "Dia do Trabalho", detail: "Feriado", kind: "feriado" },
  { date: "2026-05-01", endDate: "2026-05-31", label: "Prova Paraná", detail: "Aplicação prevista para maio", kind: "prova" },
  { date: "2026-05-18", endDate: "2026-09-04", label: "2º trimestre", detail: "68 dias letivos", kind: "periodo" },
  { date: "2026-06-04", label: "Corpus Christi", detail: "Feriado", kind: "feriado" },
  { date: "2026-08-07", label: "Dia do Funcionário de Escola", detail: "Data comemorativa", kind: "comunidade" },
  { date: "2026-08-11", label: "Dia do Estudante", detail: "Data comemorativa", kind: "comunidade" },
  { date: "2026-09-01", endDate: "2026-09-30", label: "Prova Paraná", detail: "Aplicação prevista para setembro", kind: "prova" },
  { date: "2026-09-07", label: "Independência do Brasil", detail: "Feriado", kind: "feriado" },
  { date: "2026-09-08", endDate: "2026-12-18", label: "3º trimestre", detail: "70 dias letivos", kind: "periodo" },
  { date: "2026-10-12", label: "Nossa Senhora Aparecida", detail: "Feriado", kind: "feriado" },
  { date: "2026-10-13", label: "Dia do Professor", detail: "Antecipado conforme observação do calendário", kind: "comunidade" },
  { date: "2026-10-28", label: "Dia do Servidor Público", detail: "Data comemorativa", kind: "comunidade" },
  { date: "2026-11-02", label: "Finados", detail: "Feriado", kind: "feriado" },
  { date: "2026-11-15", label: "Proclamação da República", detail: "Feriado", kind: "feriado" },
  { date: "2026-11-20", label: "Zumbi e Consciência Negra", detail: "Feriado", kind: "feriado" },
  { date: "2026-12-25", label: "Natal", detail: "Feriado", kind: "feriado" },
];

export const initialTrailSteps = [
  { title: "Revisar o conceito-base", kind: "Preparar", completed: true, date: "2026-03-18" },
  { title: "Resolver uma lista curta", kind: "Praticar", completed: false, date: "2026-03-20" },
  { title: "Registrar dúvidas e revisar", kind: "Consolidar", completed: false, date: "2026-03-23" },
];
