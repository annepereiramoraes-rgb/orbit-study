/**
 * ORBIT — Caderno Orbital
 * Página de trilhas: cada matéria recebe uma trajetória criada pelo estudante em pequenos passos concretos.
 */
import OrbitFrame from "@/components/OrbitFrame";
import { initialTrailSteps, subjects, Subject } from "@/lib/orbitData";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, CircleDot, Clock3, Layers3, Plus, Sparkles, Target, X } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

type TrailStep = { id: number; title: string; kind: string; completed: boolean; date: string };

function subjectClass(subject: Subject) { return `subject-choice subject-choice--${subject.tone}`; }

export default function StudyTrail() {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(subjects[11]);
  const [steps, setSteps] = useState<TrailStep[]>(initialTrailSteps.map((step, index) => ({ ...step, id: index + 1 })));
  const [editorOpen, setEditorOpen] = useState(false);
  const [stepTitle, setStepTitle] = useState("");
  const [stepDate, setStepDate] = useState("2026-03-25");
  const completedCount = useMemo(() => steps.filter((step) => step.completed).length, [steps]);

  function selectSubject(subject: Subject) {
    setSelectedSubject(subject);
    setSteps(initialTrailSteps.map((step, index) => ({ ...step, id: index + 1, title: index === 0 ? `${step.title} · ${subject.focus}` : step.title })));
    toast(`Trilha de ${subject.name} aberta.`);
  }

  function addStep() {
    if (!stepTitle.trim()) { toast.error("Dê um nome curto e concreto para a etapa."); return; }
    setSteps((current) => [...current, { id: Date.now(), title: stepTitle.trim(), kind: "Seu próximo passo", completed: false, date: stepDate }]);
    setEditorOpen(false); setStepTitle(""); toast.success("Etapa adicionada à trilha.");
  }

  function toggleStep(id: number) { setSteps((current) => current.map((step) => step.id === id ? { ...step, completed: !step.completed } : step)); }

  return (
    <OrbitFrame current="Trilhas">
      <section className="trail-page workspace" aria-label="Trilhas de estudo por matéria">
        <div className="page-intro trail-page-intro"><div><p className="eyebrow">TRILHAS POR MATÉRIA</p><h1>Uma matéria. <em>Uma trajetória possível.</em></h1><p>Escolha uma disciplina, recorte o conteúdo em etapas e deixe o Orbit preservar o próximo movimento para você.</p></div><div className="trail-intro-stat"><Layers3 size={22} /><strong>12</strong><span>matérias<br />ativas</span></div></div>

        <section className="subject-selector" aria-label="Escolha uma matéria para criar sua trilha">
          <div className="section-heading"><div><p className="eyebrow">SELECIONE UM CONTEXTO</p><h2>Por onde você quer seguir?</h2></div><span className="selector-hint">toque para abrir</span></div>
          <div className="subject-choices">{subjects.map((subject) => <button key={subject.name} type="button" onClick={() => selectSubject(subject)} className={`${subjectClass(subject)} ${selectedSubject.name === subject.name ? "subject-choice--selected" : ""}`}><span>{subject.abbreviation}</span><strong>{subject.name}</strong><i>{subject.progress}%</i></button>)}</div>
        </section>

        <section className="trail-builder" aria-label={`Trilha de ${selectedSubject.name}`}>
          <div className="trail-builder-header"><div><div className={`active-subject-mark active-subject-mark--${selectedSubject.tone}`}>{selectedSubject.abbreviation}</div><div><p className="eyebrow">TRILHA ATIVA</p><h2>{selectedSubject.name}: <em>{selectedSubject.focus}</em></h2></div></div><Button className="primary-cta" onClick={() => setEditorOpen(true)}><Plus size={18} /> Nova etapa</Button></div>
          <div className="trail-progress-line">
            <div className="trail-orbit-progress" style={{ "--orbit-progress": `${steps.length ? (completedCount / steps.length) * 360 : 0}deg` } as React.CSSProperties}>
              <div><strong>{completedCount}/{steps.length}</strong><span>passos</span></div>
            </div>
            <div className="trail-progress-copy"><p>TRAJETÓRIA EM CURSO</p><strong>Cada ponto concluído puxa o próximo para mais perto.</strong><span><i /><i className={completedCount > 1 ? "orbit-node--active" : ""} /><i className={completedCount > 2 ? "orbit-node--active" : ""} /> órbita da semana</span></div>
          </div>
          <ol className="builder-steps">{steps.map((step, index) => <li key={step.id} className={step.completed ? "builder-step--complete" : ""}><button type="button" onClick={() => toggleStep(step.id)} aria-label={step.completed ? "Marcar etapa como pendente" : "Concluir etapa"}>{step.completed ? <Check size={17} /> : <CircleDot size={17} />}</button><div className="builder-step-content"><span>{String(index + 1).padStart(2, "0")} · {step.kind}</span><strong>{step.title}</strong><small><Clock3 size={13} /> até {new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long" }).format(new Date(`${step.date}T12:00:00`))}</small></div><ArrowRight size={18} /></li>)}</ol>
          <div className="builder-prompt"><Sparkles size={17} /><p><strong>Quando uma etapa termina, outra fica visível.</strong> Sua trilha existe para reduzir a escolha, não para aumentar a lista.</p><button type="button" onClick={() => setEditorOpen(true)}>Adicionar o próximo passo <ArrowRight size={15} /></button></div>
        </section>

        {editorOpen && <div className="quick-add-backdrop" role="presentation" onMouseDown={() => setEditorOpen(false)}><section className="quick-add trail-editor" role="dialog" aria-modal="true" aria-labelledby="trail-editor-title" onMouseDown={(event) => event.stopPropagation()}><button className="quick-add-close" type="button" aria-label="Fechar" onClick={() => setEditorOpen(false)}><X size={18} /></button><p className="eyebrow">NOVA ETAPA · {selectedSubject.name.toUpperCase()}</p><h2 id="trail-editor-title">Que movimento cabe no próximo bloco?</h2><p>Uma etapa clara é mais fácil de começar e mais fácil de celebrar.</p><label htmlFor="step-title">Etapa</label><input id="step-title" autoFocus placeholder="Ex.: resolver cinco exercícios de função" value={stepTitle} onChange={(event) => setStepTitle(event.target.value)} /><label htmlFor="step-date">Prazo</label><input id="step-date" type="date" value={stepDate} onChange={(event) => setStepDate(event.target.value)} /><Button className="primary-cta quick-add-submit" onClick={addStep}><Target size={17} /> Adicionar à trilha</Button></section></div>}
      </section>
    </OrbitFrame>
  );
}
