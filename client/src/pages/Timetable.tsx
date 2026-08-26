/**
 * ORBIT — Caderno Orbital
 * Horários por turma: a grade fornecida deixa de ser uma imagem e vira uma consulta clara, filtrável e acessível.
 */
import OrbitFrame from "@/components/OrbitFrame";
import { classGroups, ClassSchedule, schoolDays } from "@/lib/timetableData";
import { CalendarDays, ExternalLink, FileText, GraduationCap, Layers3 } from "lucide-react";
import { useState } from "react";

const timetableSourceUrl = "/manus-storage/horarios-turmas-manha-2026_697bb6e2.pdf";
const groupOrder = ["2ª série", "3ª série", "Formação técnica"] as const;

function toneForSubject(subject: string) {
  if (subject === "—") return "timetable-cell--empty";
  if (/PROG|BANCO|DADOS|ROBOT|MDS|CPA|INST|PCC|ADM|SE|TC|I HIDR|STCC|MC/.test(subject)) return "timetable-cell--tech";
  if (/MAT/.test(subject)) return "timetable-cell--math";
  if (/LP|L\.ING|LINGUA|LIT|FIL|SOC|HIS|GEO|P VIDA/.test(subject)) return "timetable-cell--human";
  if (/FIS|QUIM|BIO/.test(subject)) return "timetable-cell--science";
  if (/ART|EDF|EXPRESS|INT|ICS|LMT|ITE/.test(subject)) return "timetable-cell--creative";
  return "timetable-cell--base";
}

export default function Timetable() {
  const [activeGroup, setActiveGroup] = useState<(typeof groupOrder)[number]>("2ª série");
  const [selectedClass, setSelectedClass] = useState<ClassSchedule>(classGroups["2ª série"][0]);
  const classes = classGroups[activeGroup];
  const periods = selectedClass.schedule[schoolDays[0]];

  function chooseGroup(group: (typeof groupOrder)[number]) {
    setActiveGroup(group);
    setSelectedClass(classGroups[group][0]);
  }

  return (
    <OrbitFrame current="Horários">
      <section className="timetable-page workspace" aria-label="Horários de aulas por turma">
        <div className="page-intro timetable-intro">
          <div>
            <p className="eyebrow">HORÁRIOS · MANHÃ/12</p>
            <h1>A turma certa, <em>na hora certa.</em></h1>
            <p>Escolha a turma para consultar as aulas do 2º semestre, com vigência a partir de 24 de agosto de 2026.</p>
          </div>
          <a className="calendar-source-button" href={timetableSourceUrl} target="_blank" rel="noreferrer"><FileText size={17} /> Ver grade de origem <ExternalLink size={15} /></a>
        </div>

        <section className="timetable-note" aria-label="Resumo da grade">
          <div className="timetable-note-symbol"><GraduationCap size={24} /></div>
          <div><p className="eyebrow">SEU RITMO DE AULAS</p><h2>Encontre sua turma. A semana já está desenhada.</h2><p>As aulas estão organizadas por dia e horário para você saber onde estar e qual é o próximo bloco.</p></div>
          <div className="timetable-note-meta"><CalendarDays size={17} /><span>2º semestre<br /><strong>2026</strong></span></div>
        </section>

        <div className="timetable-layout">
          <aside className="class-picker" aria-label="Seleção de turma">
            <div className="class-picker-head"><div><p className="eyebrow">ENCONTRE A TURMA</p><h2>Turmas</h2></div><Layers3 size={18} /></div>
            <div className="class-group-tabs">{groupOrder.map((group) => <button key={group} type="button" onClick={() => chooseGroup(group)} className={activeGroup === group ? "class-group-tab class-group-tab--active" : "class-group-tab"}>{group}</button>)}</div>
            <div className="class-list">{classes.map((item) => <button key={item.name} type="button" onClick={() => setSelectedClass(item)} className={selectedClass.name === item.name ? "class-list-item class-list-item--active" : "class-list-item"}><span>{item.name}</span><i>{item.name.includes("FTP") ? "técnica" : activeGroup}</i></button>)}</div>
          </aside>

          <section className="timetable-board" aria-label={`Horário da turma ${selectedClass.name}`}>
            <div className="timetable-board-head"><div><p className="eyebrow">TURMA SELECIONADA</p><h2>{selectedClass.name}</h2><span>segunda a sexta · manhã</span></div><div className="timetable-orbit"><strong>30</strong><small>aulas<br />semanais</small></div></div>
            <div className="timetable-table-wrap">
              <table className="timetable-table">
                <thead><tr><th>Horário</th>{schoolDays.map((day) => <th key={day}>{day}</th>)}</tr></thead>
                <tbody>{periods.map((period, index) => <tr key={period.time}><th scope="row">{period.time}</th>{schoolDays.map((day) => { const subject = selectedClass.schedule[day][index]?.subject ?? "—"; return <td key={day}><span className={`timetable-cell ${toneForSubject(subject)}`}>{subject}</span></td>; })}</tr>)}</tbody>
              </table>
            </div>
            <div className="timetable-key"><span><i className="key-dot key-dot--human" /> linguagens e humanas</span><span><i className="key-dot key-dot--math" /> matemática</span><span><i className="key-dot key-dot--science" /> ciências</span><span><i className="key-dot key-dot--tech" /> técnica</span><span><i className="key-dot key-dot--creative" /> práticas</span></div>
          </section>
        </div>
      </section>
    </OrbitFrame>
  );
}
