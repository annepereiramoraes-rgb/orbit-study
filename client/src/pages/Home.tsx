/**
 * ORBIT — Caderno Orbital
 * Direção visual: bancada acadêmica editorial, fundo papel quente, azul de impulso e módulos assimétricos.
 * Princípio da página: o próximo passo é o centro gravitacional; progresso e contexto ficam em órbita.
 */
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  Command,
  FileText,
  Flame,
  GraduationCap,
  LayoutGrid,
  Menu,
  MoreHorizontal,
  Play,
  Plus,
  Search,
  Sparkles,
  Target,
  TimerReset,
  TrendingUp,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "wouter";

const navItems = [
  { label: "Visão geral", icon: LayoutGrid, href: "/" },
  { label: "Minha trilha", icon: Target, href: "/trilhas" },
  { label: "Matérias", icon: BookOpen, href: "/trilhas" },
  { label: "Calendário", icon: CalendarDays, href: "/calendario" },
];

const trailItems = [
  { date: "Hoje", title: "Mapa mental: Brasil República", type: "História", tone: "coral" },
  { date: "Qua 18", title: "Lista 04 · Cinemática", type: "Física", tone: "blue" },
  { date: "Sex 20", title: "Estrutura da redação", type: "Linguagens", tone: "yellow" },
];

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function OrbitIcon({ size = "normal" }: { size?: "normal" | "small" }) {
  return (
    <span className={`orbit-icon ${size === "small" ? "orbit-icon--small" : ""}`} aria-hidden="true">
      <img src="/manus-storage/orbit-mark_354572a3.png" alt="" />
    </span>
  );
}

export default function Home() {
  const [, setLocation] = useLocation();
  const [activeNav, setActiveNav] = useState("Visão geral");
  const [sessionActive, setSessionActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [taskComplete, setTaskComplete] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [quickAddOpen, setQuickAddOpen] = useState(false);
  const [taskDraft, setTaskDraft] = useState("");

  useEffect(() => {
    if (!sessionActive || secondsLeft <= 0) return;
    const interval = window.setInterval(() => setSecondsLeft((seconds) => seconds - 1), 1000);
    return () => window.clearInterval(interval);
  }, [sessionActive, secondsLeft]);

  useEffect(() => {
    if (secondsLeft === 0 && sessionActive) {
      setSessionActive(false);
      toast.success("Bloco concluído. Você fez espaço para avançar.");
    }
  }, [secondsLeft, sessionActive]);

  const progress = taskComplete ? 82 : 78;
  const nextTask = taskComplete ? "Esboçar a introdução" : "Revisar a tese";
  const focusLabel = useMemo(() => (sessionActive ? "Pausar foco" : "Começar 25 min"), [sessionActive]);

  function toggleFocus() {
    setSessionActive((active) => !active);
    if (!sessionActive) toast("Modo foco ativado. O resto pode esperar 25 minutos.");
  }

  function completeTask() {
    if (taskComplete) return;
    setTaskComplete(true);
    setSessionActive(false);
    toast.success("Próximo passo concluído. Sua trajetória avançou.");
  }

  function createTask() {
    if (!taskDraft.trim()) {
      toast.error("Escreva uma ação curta para adicionar à sua semana.");
      return;
    }
    toast.success(`“${taskDraft.trim()}” entrou na sua trilha.`);
    setTaskDraft("");
    setQuickAddOpen(false);
  }

  return (
    <div className="orbit-app min-h-screen">
      <aside className={`sidebar ${mobileNavOpen ? "sidebar--open" : ""}`}>
        <div className="brand-lockup">
          <OrbitIcon />
          <span>orbit</span>
        </div>

        <nav className="nav-list" aria-label="Navegação principal">
          {navItems.map(({ label, icon: Icon, href }) => (
            <button
              key={label}
              onClick={() => {
                setActiveNav(label);
                setMobileNavOpen(false);
                setLocation(href);
              }}
              className={`nav-item ${activeNav === label ? "nav-item--active" : ""}`}
              type="button"
            >
              <Icon size={18} strokeWidth={2.1} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-item" type="button" onClick={() => toast("A central de ajuda está sendo desenhada.")}> 
            <CircleHelp size={18} />
            <span>Precisa de ajuda?</span>
          </button>
          <div className="student-mini">
            <div className="student-avatar">LA</div>
            <div>
              <strong>Luísa Alves</strong>
              <span>2º ano · manhã</span>
            </div>
            <MoreHorizontal size={18} />
          </div>
        </div>
      </aside>

      <main className="main-stage">
        <header className="topbar">
          <div className="topbar-left">
            <button className="mobile-menu" type="button" aria-label="Abrir navegação" onClick={() => setMobileNavOpen(true)}>
              <Menu size={22} />
            </button>
            <div className="brand-satellite" aria-label="Orbit">
              <OrbitIcon size="small" />
              <span>orbit</span>
            </div>
            <div className="breadcrumbs">
              <span>Segunda, 16 de março</span>
              <i />
              <strong>{activeNav}</strong>
            </div>
          </div>
          <div className="topbar-actions">
            <button className="icon-button" type="button" aria-label="Pesquisar" onClick={() => toast("Busca rápida em breve.")}><Search size={20} /></button>
            <button className="icon-button notification-dot" type="button" aria-label="Notificações" onClick={() => toast("Você está em dia por aqui.")}><Bell size={20} /></button>
          </div>
        </header>

        <section className="workspace" aria-label="Painel de estudos">
          <div className="welcome-row">
            <div>
              <p className="eyebrow">SEU RITMO, LUÍSA</p>
              <h1>Vamos tirar uma coisa <em>da sua frente.</em></h1>
            </div>
            <button className="today-button" type="button" onClick={() => setLocation("/calendario")}>
              <CalendarDays size={17} /> Hoje <ChevronRight size={16} />
            </button>
          </div>

          <div className="dashboard-grid">
            <section className={`focus-card ${sessionActive ? "focus-card--active" : ""}`} aria-label="Próximo passo">
              <div className="card-kicker">
                <span className="signal-dot" />
                {sessionActive ? "MODO FOCO ATIVO" : "PRÓXIMO PASSO"}
                <span className="focus-index">01 / 03</span>
              </div>
              <div className="focus-content">
                <div className="focus-copy">
                  <div className="subject-chip subject-chip--language"><FileText size={15} /> Linguagens</div>
                  <h2>{nextTask} <span>da redação</span></h2>
                  <p>{taskComplete ? "A tese está pronta. Dê forma ao primeiro parágrafo enquanto sua ideia ainda está fresca." : "Você já pesquisou. Agora deixe sua opinião bem nítida em uma frase."}</p>
                  <div className="focus-meta">
                    <span><Clock3 size={16} /> 25 min</span>
                    <span><Flame size={16} /> máxima energia</span>
                  </div>
                  <div className="focus-actions">
                    <Button className="primary-cta" onClick={toggleFocus}>
                      {sessionActive ? <TimerReset size={18} /> : <Play size={18} fill="currentColor" />}
                      {focusLabel}
                    </Button>
                    {!taskComplete && (
                      <button className="complete-button" type="button" onClick={completeTask}>
                        <span><Check size={16} /></span> concluir
                      </button>
                    )}
                  </div>
                </div>

                <div className="focus-visual">
                  <img src="/manus-storage/orbit-hero-study_76d6c58c.jpg" alt="Mesa de estudos em colagem editorial com elementos orbitais" />
                  <div className="timer-pill">
                    <span className={sessionActive ? "timer-pulse" : ""} />
                    {sessionActive ? formatTime(secondsLeft) : "25:00"}
                  </div>
                  <div className="orbit-stamp"><OrbitIcon size="small" /></div>
                </div>
              </div>
              <div className="focus-footer">
                <span>Por que agora?</span>
                <p>Entrega sexta · faltam 2 etapas curtas</p>
                <ArrowRight size={17} />
              </div>
            </section>

            <section className="pulse-card" aria-label="Pulso da semana">
              <div className="card-title-row">
                <div>
                  <p className="eyebrow">PULSO DA SEMANA</p>
                  <h2>Você está no ritmo.</h2>
                </div>
                <button className="more-button" type="button" onClick={() => toast("Relatório semanal em breve.")}><MoreHorizontal size={21} /></button>
              </div>
              <div className="pulse-body">
                <div className="progress-arc" style={{ "--progress": `${progress * 3.6}deg` } as React.CSSProperties}>
                  <div className="arc-inner"><strong>{progress}%</strong><span>da meta</span></div>
                </div>
                <div className="pulse-stats">
                  <div><span>Foco</span><strong>{taskComplete ? "6h 05" : "5h 40"}</strong><small>+ 18 min hoje</small></div>
                  <div><span>Sequência</span><strong>4 dias</strong><small>seu melhor: 6</small></div>
                </div>
              </div>
              <div className="pulse-note"><TrendingUp size={16} /> Constância vence o aperto de última hora.</div>
            </section>

            <section className="trail-card" aria-label="Trilha da semana">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">SUA TRILHA</p>
                  <h2>O que vem depois.</h2>
                </div>
                <button type="button" onClick={() => setLocation("/trilhas")}>Ver tudo <ArrowRight size={15} /></button>
              </div>
              <div className="trail-layout">
                <ol className="trail-list">
                  {trailItems.map((item, index) => (
                    <li key={item.title} className={index === 0 ? "trail-item--today" : ""}>
                      <div className={`trail-dot trail-dot--${item.tone}`}>{index === 0 ? <Check size={14} /> : <span />}</div>
                      <div className="trail-date">{item.date}</div>
                      <div className="trail-item-copy"><strong>{item.title}</strong><span>{item.type}</span></div>
                      <ChevronRight size={17} />
                    </li>
                  ))}
                </ol>
                <img className="trail-art" src="/manus-storage/orbit-trail-editorial_17d2591f.jpg" alt="Trilha orbital abstrata com marcadores coloridos" />
              </div>
            </section>

            <section className="subjects-card" aria-label="Contextos de matéria">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">POR CONTEXTO</p>
                  <h2>Matérias em movimento.</h2>
                </div>
                <button className="icon-button icon-button--outlined" type="button" onClick={() => setQuickAddOpen(true)} aria-label="Adicionar pendência"><Plus size={18} /></button>
              </div>
              <div className="subject-grid">
                <button type="button" className="subject-tile tile-blue" onClick={() => setLocation("/trilhas")}><span className="tile-icon"><Command size={20} /></span><strong>Física</strong><small>3 pendências</small><i>58%</i></button>
                <button type="button" className="subject-tile tile-coral" onClick={() => setLocation("/trilhas")}><span className="tile-icon"><GraduationCap size={21} /></span><strong>História</strong><small>1 etapa hoje</small><i>74%</i></button>
                <button type="button" className="subject-tile tile-yellow" onClick={() => setLocation("/trilhas")}><span className="tile-icon"><Sparkles size={20} /></span><strong>Linguagens</strong><small>em foco</small><i>89%</i></button>
              </div>
            </section>
          </div>

          <section className="story-band" aria-label="Por que o Orbit existe">
            <div className="story-copy">
              <p className="eyebrow">MENOS ABAS. MAIS DIREÇÃO.</p>
              <h2>Orbit transforma a semana confusa em uma trajetória que você consegue enxergar.</h2>
              <p>Para estudantes que vivem entre prazos, materiais e pressão, cada decisão começa com uma ação concreta — e ainda preserva o contexto de todas as matérias.</p>
              <div className="story-tags"><span>Próximo passo único</span><span>Trilhas visuais</span><span>Progresso sem culpa</span></div>
            </div>
            <div className="story-art-wrap">
              <img src="/manus-storage/orbit-pulse-abstract_1d99f8b8.jpg" alt="Composição abstrata de arcos e órbitas simbolizando progresso" />
              <div className="story-metric"><span>Semana 12</span><strong>+ 4 blocos</strong></div>
            </div>
          </section>
        </section>
      </main>

      {mobileNavOpen && <button className="sidebar-scrim" type="button" aria-label="Fechar navegação" onClick={() => setMobileNavOpen(false)} />}

      {quickAddOpen && (
        <div className="quick-add-backdrop" role="presentation" onMouseDown={() => setQuickAddOpen(false)}>
          <section className="quick-add" role="dialog" aria-modal="true" aria-labelledby="quick-add-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="quick-add-close" type="button" aria-label="Fechar" onClick={() => setQuickAddOpen(false)}><X size={18} /></button>
            <p className="eyebrow">NOVA PENDÊNCIA</p>
            <h2 id="quick-add-title">Qual é o próximo movimento?</h2>
            <p>Escreva uma ação pequena o bastante para caber no seu próximo bloco.</p>
            <label htmlFor="task-draft">Ação</label>
            <input id="task-draft" autoFocus placeholder="Ex.: separar repertório para a redação" value={taskDraft} onChange={(event) => setTaskDraft(event.target.value)} onKeyDown={(event) => event.key === "Enter" && createTask()} />
            <Button className="primary-cta quick-add-submit" onClick={createTask}><Plus size={17} /> Adicionar à trilha</Button>
          </section>
        </div>
      )}
    </div>
  );
}
