/**
 * ORBIT — Caderno Orbital
 * Moldura de navegação: a marca e as áreas acadêmicas acompanham o estudante em toda a experiência.
 */
import {
  Bell,
  BookOpen,
  CalendarDays,
  ChevronRight,
  CircleHelp,
  LayoutGrid,
  Menu,
  MoreHorizontal,
  Search,
  Target,
} from "lucide-react";
import { ReactNode, useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

type OrbitFrameProps = {
  current: "Visão geral" | "Trilhas" | "Calendário";
  children: ReactNode;
};

const navItems = [
  { label: "Visão geral", icon: LayoutGrid, href: "/" },
  { label: "Minha trilha", icon: Target, href: "/trilhas" },
  { label: "Matérias", icon: BookOpen, href: "/trilhas" },
  { label: "Calendário", icon: CalendarDays, href: "/calendario" },
];

function OrbitIcon({ size = "normal" }: { size?: "normal" | "small" }) {
  return (
    <span className={`orbit-icon ${size === "small" ? "orbit-icon--small" : ""}`} aria-hidden="true">
      <img src="/manus-storage/orbit-mark_354572a3.png" alt="" />
    </span>
  );
}

export default function OrbitFrame({ current, children }: OrbitFrameProps) {
  const [, setLocation] = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  function handleNavigation(href: string) {
    setLocation(href);
    setMobileNavOpen(false);
  }

  function isActive(label: string) {
    return (current === "Visão geral" && label === "Visão geral") ||
      (current === "Trilhas" && label === "Minha trilha") ||
      (current === "Calendário" && label === "Calendário");
  }

  return (
    <div className="orbit-app min-h-screen">
      <aside className={`sidebar ${mobileNavOpen ? "sidebar--open" : ""}`}>
        <div className="brand-lockup">
          <OrbitIcon />
          <span>orbit</span>
        </div>
        <p className="nav-caption">ESPAÇO DE ESTUDOS</p>
        <nav className="nav-list" aria-label="Navegação principal">
          {navItems.map(({ label, icon: Icon, href }) => (
            <button key={label} onClick={() => handleNavigation(href)} className={`nav-item ${isActive(label) ? "nav-item--active" : ""}`} type="button">
              <Icon size={18} strokeWidth={2.1} />
              <span>{label}</span>
              {label === "Calendário" && <i className="nav-pin" />}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <button className="nav-item" type="button" onClick={() => toast("A central de ajuda será adicionada em uma próxima etapa.")}>
            <CircleHelp size={18} />
            <span>Precisa de ajuda?</span>
          </button>
          <div className="student-mini">
            <div className="student-avatar">LA</div>
            <div><strong>Luísa Alves</strong><span>2º ano · manhã</span></div>
            <MoreHorizontal size={18} />
          </div>
        </div>
      </aside>
      <main className="main-stage">
        <header className="topbar">
          <div className="topbar-left">
            <button className="mobile-menu" type="button" aria-label="Abrir navegação" onClick={() => setMobileNavOpen(true)}><Menu size={22} /></button>
            <button className="brand-satellite" type="button" onClick={() => setLocation("/")} aria-label="Ir para a visão geral"><OrbitIcon size="small" /><span>orbit</span></button>
            <div className="breadcrumbs"><span>Segunda, 16 de março</span><i /><strong>{current}</strong></div>
          </div>
          <div className="topbar-actions">
            <button className="icon-button" type="button" aria-label="Pesquisar" onClick={() => toast("A busca por conteúdo será adicionada em uma próxima etapa.")}><Search size={20} /></button>
            <button className="icon-button notification-dot" type="button" aria-label="Notificações" onClick={() => toast("Você está em dia por aqui.")}><Bell size={20} /></button>
          </div>
        </header>
        {children}
      </main>
      {mobileNavOpen && <button className="sidebar-scrim" type="button" aria-label="Fechar navegação" onClick={() => setMobileNavOpen(false)} />}
    </div>
  );
}
