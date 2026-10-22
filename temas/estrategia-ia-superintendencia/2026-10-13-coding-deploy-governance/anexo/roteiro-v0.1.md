# Roteiro: Coding · Deploy · Governance na SUNNU

- **Audiência final:** Superintendente da SUNNU
- **Validação prévia:** Misael Santos, gerente de departamento da NUARQ
- **Proposta:** NUARQ · **escopo:** a superintendência, não o Serpro inteiro
- **Formato:** cinco pranchas HTML de uma página, navegáveis pelas abas no topo ou por ← →. Não é um deck.
- **Duração-alvo:** 25 min de fala e 15 min de conversa

## O fio da história

| # | Prancha | Pergunta que responde | Ponte para a próxima |
|---|---|---|---|
| 00 | Conceito | Por que mudar, e qual é o desenho? | "Antes do como, o quem." |
| 01 | Papéis | Se a NUARQ não escreve todo o código, o que ela conduz? | "Definido quem faz, falta definir como." |
| 02 | Coding | Como garantir que o que o agente escreveu é o que a gente quis? | "Código revisado ainda não é serviço no ar." |
| 03 | Deploy | Como o código chega à nuvem certa, pelo mesmo caminho para todos? | "Em produção, o produto chama modelo. Quem controla?" |
| 04 | Governance | Quem usa IA, com que dado e a que custo, na hora? | Volta às três decisões do 00 |

O ciclo de 7 etapas da prancha 00 reaparece como minimapa em cada prancha, marcando o trecho em discussão.

## Fala sugerida

### 00 · Conceito (4 min)
- **Abra pelos três "hoje":**
  - a IA já é usada fora de controle;
  - cada projeto inventa processo e infra;
  - gerar ficou barato, julgar não.
- **Frase de virada:** "A resposta é um ciclo só, com um dono para cada parte."
- **Percorra o ciclo da esquerda para a direita:**
  - a cor de cima diz quem conduz;
  - as faixas de baixo dizem a que linha cada etapa pertence;
  - a Governance fica embaixo de tudo.
- Não leia as três decisões agora. Diga só: "a história termina em três pedidos, um por linha".

### 01 · Papéis (7 min, a prancha mais política)
- **Dê nome à leitura do superintendente:** "a NUARQ conduz o coding". Concorde com ela e depois refine: a NUARQ conduz pelo **processo**, os departamentos conduzem o **produto**.
- **Argumento central:** se o Builder fica na NUARQ, a capacidade de entrega da superintendência fica limitada ao quadro da NUARQ. Se fica nos departamentos, ela cresce com cada departamento que adota o processo.
- **Conceitos:**
  - Cherny (modos, não cargos), mais o Verificador;
  - o estudo da Anthropic (o domínio pesa mais que o código);
  - Team Topologies (fluxo e plataforma);
  - FinOps (showback);
  - DORA (a IA amplifica; plataforma interna de qualidade).
- **RACI:** convide a mudar na sala. Clique numa célula e mostre o aviso "precisa de exatamente um A".
- **Orçamento:** um teto único, cotas por chave virtual, a NUARQ paga só o que é dela.

### 02 · Coding (5 min)
- **As três raias:**
  - a pessoa decide e assina (portões);
  - o agente executa;
  - a NUARQ trava e verifica.
- **Tiers:** "o Tier 0 vai direto; o rigor só aparece onde aparece o risco". É a resposta para "isso vai deixar tudo lento?".
- **1 bloqueia, 5 avisam, 42 orientam:** trava só onde o erro é irreversível.
- **Prova:**
  - F0, 60 de 60 em três harnesses;
  - o caso SGD (6 provedores, 0 chave estática).

### 03 · Deploy (4 min)
- **Seis paradas.** Embaixo de cada uma, quem responde.
- **O dado decide a nuvem.** Diga explicitamente que o critério é proposta.
- **Arquitetura Viva:** o diagrama não envelhece.
- **OCNs:** as contas já têm desenho, e a topologia C cabe na alçada.

### 04 · Governance (5 min)
- **Gateway:** um ponto de controle e três camadas de modelo; o soberano é o padrão.
- **Prova:**
  - 41 de 45;
  - CPF mascarado;
  - 403 e 429;
  - o agente que disse "sucesso" com 4 ações bloqueadas.
- **Anéis:** comece pela fundação.
- **Piloto de 90 dias com gate:** se não fechar, encerra.
- **Feche com a frase da ponte** e volte ao 00 #decisoes.

## Para validar com o Misael antes de levar

1. **Squad:** o enquadramento "NUARQ = plataforma e habilitação, departamentos = Builders" responde ao que o superintendente quer, ou ele espera ver a NUARQ entregando produto?
2. **Squad conjunto:** a NUARQ embarcada no primeiro ciclo de cada squad. Temos gente para isso? Por quantos ciclos?
3. **RACI:** as quatro colunas estão certas? Falta comitê de IA ou Auditoria? Os "A" da superintendência estão no lugar certo?
4. **Orçamento:** propor showback já e chargeback depois? Existe reserva da NUARQ?
5. **Números a confirmar:**
   - teto da OCN Sandbox: R$ 275 mil em 12 meses (resumo executivo) contra R$ 490 mil em 24 meses (nota técnica);
   - avaliação: 45/41 (deck executivo e matriz) contra 40 (README do repo).
6. **Nuvem de governo versus pública:** as fontes não comparam as duas. O critério "o dado decide" é nosso e precisa de aval.
7. **Nome do departamento:** o repo de governança fala em "Dept. Arquitetura de Nuvem", não em NUARQ. Uniformizar.

## Não afirmar em público
- Que a Anthropic publicou os arquétipos: é post pessoal de Boris Cherny, com fonte secundária.
- Que a Fase 1 do gateway já está aprovada ou que já roda no Estaleiro.
- Números de produtividade da Anthropic além dos da página do estudo.
- Que a OCN é aquisição: ela executa contratos de parceria já vigentes.

## Fontes
- `padroes-engenharia/` (portal, constituição, pessoas-e-normas)
- `sdd-lifecycle/` e `sdd-scaffold/`
- `serpro-cloud-ia-governance/` (arquitetura, deck executivo, avaliação)
- `ocn-sandbox-nuarq/` e `ocn-servicos-nuarq/`
- Web, consultada em 13/10/2026: teamtopologies.com/key-concepts; anthropic.com/research/claude-code-expertise; finops.org (FinOps for AI, Token Economics); dora.dev/research/2025; it.cornell.edu (RACI)
