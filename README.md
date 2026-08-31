# Orbit — Caderno Orbital

O **Orbit** é um protótipo navegável de uma central acadêmica para jovens e estudantes. A experiência combina foco no próximo passo, trilhas de estudo, calendário escolar e consulta de horários por turma em uma interface editorial, clara e responsiva.

> Seu ritmo de estudos, organizado em uma trajetória possível.

## Proposta do produto

O Orbit resolve a sensação de ter tarefas, matérias, provas e horários espalhados. Em vez de apresentar uma lista extensa de obrigações, ele ajuda o estudante a identificar a ação mais útil agora e enxergar como ela se conecta à sua semana.

O conceito combina quatro ideias: **modo foco**, **hub acadêmico**, **progresso visual** e **planner de trilhas**. A linguagem visual usa uma superfície de papel quente, azul de impulso, marcadores coloridos e trajetórias pontilhadas para transformar planejamento em movimento.

## Funcionalidades incluídas

| Área | O que está disponível |
|---|---|
| Visão geral | Próximo passo, modo foco de 25 minutos, pulso semanal e matérias em movimento. |
| Trilhas | Seleção de matéria, etapas de estudo, conclusão de passos e criação de novas etapas com data. |
| Calendário | Os 12 meses de 2026, eventos escolares, períodos letivos, feriados e destaque automático do dia atual. |
| Horários | Grade semanal estruturada por turma, série e formação técnica, sem usar o PDF como imagem. |
| Navegação | Menu lateral no desktop e cabeçalho compacto no celular. |

## Matérias

A central contempla as 12 disciplinas solicitadas: Artes, Educação Física, Filosofia, Sociologia, Inglês, Física, Química, Biologia, Geografia, História, Matemática e Língua Portuguesa.

## Horários por turma

A página `/horarios` organiza a grade do turno **CEP — Manhã/12**, referente ao segundo semestre com vigência em 24/08/2026. A navegação separa as turmas em três grupos: **2ª série**, **3ª série** e **Formação técnica**. A grade apresenta segunda a sexta, seis blocos de horário e disciplinas com marcadores visuais por área.

Os dados foram estruturados a partir do arquivo de horários fornecido para o projeto. O documento original pode ser consultado pelo botão **Ver grade de origem** na própria página.

## Rotas principais

| Rota | Página |
|---|---|
| `/` | Visão geral do Orbit |
| `/trilhas` | Trilhas de estudo por matéria |
| `/calendario` | Calendário escolar anual de 2026 |
| `/horarios` | Horários de aulas por turma |

## Tecnologias

O projeto usa **React**, **TypeScript**, **Vite**, **Wouter**, **Tailwind CSS**, **Lucide React** e componentes de interface baseados em Radix UI. A estrutura também mantém a configuração de servidor, autenticação e banco de dados disponibilizada pelo template do projeto.

## Como executar localmente

Pré-requisitos: Node.js 22 ou superior e pnpm 10.

```bash
pnpm install
pnpm dev
```

Depois, abra o endereço local indicado pelo Vite. Para verificar os tipos e gerar a versão de produção:

```bash
pnpm check
pnpm build
```

Para executar os testes existentes:

```bash
pnpm test
```

## Estrutura relevante

```text
client/
  index.html                 Entrada HTML do aplicativo
  src/
    App.tsx                  Rotas principais
    index.css                Identidade visual e responsividade
    components/OrbitFrame.tsx Navegação compartilhada
    pages/Home.tsx           Visão geral
    pages/StudyTrail.tsx     Trilhas por matéria
    pages/Calendar.tsx       Calendário anual
    pages/Timetable.tsx      Horários por turma
    lib/orbitData.ts         Matérias e eventos escolares
    lib/timetableData.ts     Grade estruturada das turmas
scripts/
  extract-timetable.mjs      Extrator da transcrição da grade escolar
```

## Direção visual

A identidade **Caderno Orbital** combina a sensação de uma bancada de estudos com uma organização de produto digital. O fundo remete a papel reciclado; o azul `#3D5AFE` sinaliza foco e ação; coral, amarelo, verde e lavanda funcionam como marcadores de contexto. Os elementos circulares e os caminhos pontilhados representam progresso sem transformar estudo em uma competição.

## Próximas evoluções

As próximas melhorias naturais são salvar trilhas por estudante, permitir selecionar uma turma favorita, trazer a próxima aula para a visão geral e permitir adicionar provas e trabalhos pessoais ao calendário.

## Licença e origem dos dados

Este repositório contém um protótipo de produto desenvolvido para o projeto Orbit. Os dados de calendário e horários exibidos na interface foram organizados a partir dos documentos fornecidos pela responsável pelo projeto e devem ser revisados pela instituição antes de qualquer uso operacional.
