/**
 * ORBIT — Caderno Orbital
 * Página de calendário: o calendário escolar oficial vira um mapa de decisões, períodos e pausas reais.
 */
import OrbitFrame from "@/components/OrbitFrame";
import { calendarPdfUrl, schoolEvents, SchoolEventKind } from "@/lib/orbitData";
import { Button } from "@/components/ui/button";
import { CalendarDays, ChevronLeft, ChevronRight, Download, FileText, Filter, Flag, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

const filterOptions: { id: "todos" | SchoolEventKind; label: string }[] = [
  { id: "todos", label: "Tudo" },
  { id: "periodo", label: "Trimestres" },
  { id: "prova", label: "Avaliações" },
  { id: "feriado", label: "Feriados" },
  { id: "comunidade", label: "Comunidade" },
];

const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const weekdayNames = ["D", "S", "T", "Q", "Q", "S", "S"];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short" }).format(new Date(`${date}T12:00:00`)).replace(".", "");
}

function eventTone(kind: SchoolEventKind) {
  return `calendar-event--${kind}`;
}

function MonthGrid({ month, currentDate }: { month: number; currentDate: Date }) {
  const year = 2026;
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const grid = Array.from({ length: firstWeekday + daysInMonth }, (_, index) => index >= firstWeekday ? index - firstWeekday + 1 : null);
  const eventsByDay = schoolEvents.reduce<Record<number, SchoolEventKind[]>>((result, event) => {
    const date = new Date(`${event.date}T12:00:00`);
    if (date.getMonth() === month) (result[date.getDate()] ||= []).push(event.kind);
    return result;
  }, {});

  return (
    <div className="month-grid-card">
      <div className="month-grid-head"><p className="eyebrow">2026</p><h2>{monthNames[month]}</h2></div>
      <div className="month-weekdays">{weekdayNames.map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}</div>
      <div className="month-days">
        {grid.map((day, index) => day ? (
          <span className={`calendar-day ${eventsByDay[day]?.length ? "calendar-day--marked" : ""} ${currentDate.getFullYear() === year && currentDate.getMonth() === month && currentDate.getDate() === day ? "calendar-day--today" : ""}`} key={day}>
            {day}
            <i className={eventsByDay[day]?.[0] ? `day-dot day-dot--${eventsByDay[day][0]}` : ""} />
          </span>
        ) : <span className="calendar-day calendar-day--empty" key={`empty-${index}`} />)}
      </div>
    </div>
  );
}

export default function Calendar() {
  const [filter, setFilter] = useState<"todos" | SchoolEventKind>("todos");
  const filteredEvents = useMemo(() => schoolEvents.filter((event) => filter === "todos" || event.kind === filter), [filter]);
  const currentDate = useMemo(() => new Date(), []);
  const currentMonthLabel = new Intl.DateTimeFormat("pt-BR", { month: "long", day: "numeric" }).format(currentDate);

  return (
    <OrbitFrame current="Calendário">
      <section className="calendar-page workspace" aria-label="Calendário escolar de 2026">
        <div className="page-intro calendar-intro">
          <div><p className="eyebrow">CALENDÁRIO ESCOLAR 2026</p><h1>Seu ano tem ritmo. <em>Faça caber.</em></h1><p>Períodos, feriados e avaliações do calendário anexado, organizados para você decidir onde sua trilha precisa ganhar espaço.</p></div>
          <a className="calendar-source-button" href={calendarPdfUrl} target="_blank" rel="noreferrer"><FileText size={17} /> Ver documento original <Download size={15} /></a>
        </div>

        <div className="calendar-spotlight">
          <div className="calendar-spotlight-copy"><span className="spotlight-chip"><Sparkles size={14} /> hoje · {currentMonthLabel}</span><h2>O calendário inteiro cabe na sua trajetória.</h2><p>O dia atual está marcado em azul nos 12 meses. Consulte os eventos letivos e antecipe as semanas que pedem mais atenção.</p><Button onClick={() => setFilter("periodo")}>Ver períodos letivos <ChevronRight size={16} /></Button></div>
          <div className="calendar-stamp"><span>201</span><small>dias letivos<br />no ano</small><i /></div>
        </div>

        <div className="calendar-layout">
          <section className="calendar-board" aria-label="Visão mensal do calendário">
            <span className="calendar-margin-note">prazos não precisam surpreender</span>
            <i className="calendar-orbit-note" aria-hidden="true" />
            <div className="calendar-board-top"><div><p className="eyebrow">NAVEGUE PELO ANO</p><h2>Calendário acadêmico</h2></div><div className="calendar-controls"><button type="button" aria-label="Mês anterior"><ChevronLeft size={17} /></button><span>2026</span><button type="button" aria-label="Próximo mês"><ChevronRight size={17} /></button></div></div>
            <div className="month-grid-row month-grid-row--year">{monthNames.map((_, month) => <MonthGrid key={month} month={month} currentDate={currentDate} />)}</div>
            <div className="calendar-legend"><span><i className="day-dot day-dot--periodo" /> trimestre</span><span><i className="day-dot day-dot--prova" /> avaliação</span><span><i className="day-dot day-dot--feriado" /> feriado</span><span><i className="day-dot day-dot--comunidade" /> comunidade</span></div>
          </section>

          <aside className="calendar-events" aria-label="Lista de eventos escolares">
            <div className="event-list-head"><div><p className="eyebrow">NO CALENDÁRIO</p><h2>Marcos do ano</h2></div><Filter size={18} /></div>
            <div className="event-filters">{filterOptions.map((option) => <button key={option.id} type="button" onClick={() => setFilter(option.id)} className={filter === option.id ? "filter-chip filter-chip--active" : "filter-chip"}>{option.label}</button>)}</div>
            <div className="event-scroll">
              {filteredEvents.map((event) => <article className={`calendar-event ${eventTone(event.kind)}`} key={`${event.date}-${event.label}`}><time>{formatDate(event.date)}{event.endDate ? ` — ${formatDate(event.endDate)}` : ""}</time><div><strong>{event.label}</strong><span>{event.detail}</span></div><Flag size={15} /></article>)}
            </div>
          </aside>
        </div>
      </section>
    </OrbitFrame>
  );
}
