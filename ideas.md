# Direção de Design — Orbit

## Três caminhos explorados

### 1. Caderno Orbital
**Introdução breve:** Uma mesa de estudos que ganhou gravidade própria: calma, tátil e organizada como um caderno inteligente. Traduz pressão acadêmica em pequenos movimentos visíveis.

**Probabilidade:** 0.07

### 2. Arcade de Conquistas
**Introdução breve:** Um universo de pequenos desafios com feedbacks lúdicos e ritmo rápido. A proposta celebra constância sem transformar estudo em competição excessiva.

**Probabilidade:** 0.03

### 3. Sala de Leitura Editorial
**Introdução breve:** Uma experiência mais contemplativa, inspirada em cadernos de pesquisa e periódicos independentes. Prioriza clareza intelectual e foco silencioso.

**Probabilidade:** 0.08

---

## Direção escolhida: Caderno Orbital

### Movimento de design

**New Swiss / editorial playful**, reinterpretado como uma bancada de estudo contemporânea. A interface articula tipografia expressiva, módulos assimétricos e elementos de papel colorido, evitando o visual genérico de dashboards em cartões idênticos.

### Princípios centrais

1. **Um passo por vez:** a tarefa de maior impacto sempre vem antes da lista completa.
2. **Progresso que se vê:** tempo, constância e trilhas aparecem como formas, não como números frios.
3. **Contexto sem ruído:** matérias, entregas e recursos vivem juntos, mas cada área mantém sua função clara.
4. **Pressão baixa, intenção alta:** a interface incentiva ação concreta sem culpa, rankings ou alarmes agressivos.

### Filosofia de cor

O fundo é uma folha quente de papel reciclado, que reduz a sensação clínica de uma ferramenta de produtividade. O azul-marinho ancora a concentração, o **azul elétrico `#3D5AFE`** é o sinal inequívoco da marca e representa movimento, enquanto coral e amarelo-manteiga destacam tarefas, alertas e conquistas sem apelar para efeitos neon. A cor funciona como sinalização de prioridade, não como decoração gratuita.

### Paradigma de layout

Uma **mesa de estudos em órbita**: navegação lateral permanente em telas amplas, uma faixa contextual no topo e blocos com tamanhos deliberadamente desiguais. O próximo passo ocupa o centro gravitacional; a trilha, os dados e as matérias orbitam ao redor dele. Em celular, a hierarquia se torna uma pilha de decisões, preservando primeiro a ação principal.

### Elementos de assinatura

1. **Anéis orbitais pontilhados** em torno de indicadores e ilustrações.
2. **Etiquetas de matéria** com cantos levemente assimétricos, como marcadores adesivos de um caderno.
3. **Progresso em arco**, que transforma semanas de estudo em trajetória em vez de barra genérica.

### Filosofia de interação

Cada interação responde com um gesto objetivo: concluir revela um pequeno avanço na trajetória; abrir uma matéria expande o contexto; iniciar foco reduz o resto da tela. Botões têm feedback tátil rápido e os controles priorizam verbos claros como “Começar 25 min” e “Ver trilha”.

### Animação

Transições discretas de 160–240 ms com curvas de saída firmes. Cartões entram com leve deslocamento vertical e opacidade; anéis de progresso preenchem após a página estabilizar; a conclusão de uma tarefa promove uma microanimação de check e reordena o próximo passo com suavidade. A experiência respeita `prefers-reduced-motion`.

### Sistema tipográfico

**Space Grotesk** para títulos e métricas, com peso 600–700 e tracking levemente fechado; **DM Sans** para textos funcionais, com peso 400–600 e alta legibilidade. Títulos são curtos, em duas linhas quando necessário; dados grandes são compactos; descrições evitam blocos longos.

### Essência da marca

**Orbit é a central acadêmica que mostra ao estudante o próximo movimento útil — sem deixar o restante da vida escolar desaparecer.**

Personalidade: **direta, encorajadora, inventiva**.

### Voz da marca

A voz é franca, calorosa e específica. Títulos convidam para uma ação de baixa fricção; CTAs nomeiam o resultado imediato; microcopy reconhece esforço sem elogios vazios.

Exemplos: “Sua próxima órbita começa em 25 minutos.”

“A redação não precisa caber na sua cabeça inteira — só no próximo bloco.”

### Wordmark e logo

O símbolo é um **ponto de foco atravessando uma órbita incompleta**, com inclinação sutil que sugere avanço. O wordmark usa Space Grotesk com a letra “O” aberta por um pequeno corte orbital; o ícone funciona sozinho no app e no favicon.

### Cor de assinatura

**Azul de impulso — `#3D5AFE`**.

## Style Decisions

- Em telas amplas, a navegação lateral é fixa ao fluxo da página e preserva símbolo e wordmark Orbit no primeiro viewport; uma assinatura compacta também ancora a barra superior.
- A composição desktop aproxima **próximo passo**, **trilha**, **matérias** e **pulso** como um conjunto gravitacional, evitando módulos isolados por áreas vazias.
- Metadados, tags e cartões incorporam linguagem de bancada de estudos por meio de cantos assimétricos, marcação pontilhada, superfícies de papel e trajetórias orbitais discretas.
- Estados de avanço relevantes usam anéis parciais, pontos de órbita e trajetórias pontilhadas; barras lineares só aparecem para contexto secundário e de baixa ênfase.
- Os marcadores das matérias se comportam como etiquetas de papel em uma mesa de estudos, preservando pequenas assimetrias e diferenciação de cor por contexto.

---

## Conceito de produto

### Nome e proposta de valor

**Orbit — estude o que move sua semana.** O aplicativo transforma uma agenda acadêmica dispersa em um próximo passo claro, conectado a uma trilha visual de progresso.

### Público e dor principal

Orbit atende estudantes do ensino médio, vestibulandos e universitários no início da graduação que acumulam matérias, trabalhos, provas e links em lugares diferentes. No primeiro dia, resolve a paralisia de abrir cinco aplicativos e ainda não saber por onde começar: o estudante encontra uma tarefa priorizada, sabe por que ela importa e consegue iniciar um bloco de foco imediatamente.

### Fluxo da home

Ao abrir o Orbit, o estudante é recebido por uma saudação breve e pelo pulso da semana. A tela destaca um único **Próximo passo**, com matéria, estimativa de tempo e CTA para iniciar um bloco de foco. Abaixo, uma trilha mostra entregas próximas em ordem temporal e um quadro enxuto de matérias concentra materiais, pendências e progresso. Uma coluna lateral de desempenho traduz a semana em tempo investido, constância e avanço da meta — sem comparar o usuário com outras pessoas. O estudante pode concluir uma tarefa, abrir sua trilha, alternar contextos de matéria e adicionar uma nova pendência.

### Funcionalidades-chave

1. **Modo Foco com próximo passo único:** Orbit escolhe uma tarefa de tamanho realista e explica sua prioridade. Ao iniciar, a tela reduz distrações e marca o avanço ao terminar.
2. **Trilhas acadêmicas visuais:** provas, trabalhos e listas deixam de ser uma lista plana e viram uma sequência de etapas, cada uma com prazo, status e próximo microobjetivo.
3. **Pulso de progresso:** um painel semanal mostra ritmo, horas concentradas e matérias que merecem atenção. O objetivo é ajustar a próxima decisão, não gerar culpa.
