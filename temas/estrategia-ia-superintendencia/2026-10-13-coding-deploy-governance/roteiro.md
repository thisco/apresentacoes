# Roteiro v0.7: 4 pilares, as frentes das áreas, a curadoria por domínio e o produto Multicloud, 21/10

- **Audiência:** Jordane, superintendente da SUNNU. Ele volta na sexta, 17/10.
- **Formato:** 9 pranchas, uma tela 16:9 cada; navegação por abas ou ← →. A v0.1 detalhada está em `anexo/`.
- **Sem pedido e sem cronograma.** A história vai do problema ao ganho.
- **Ata da validação:** `../Reuniões/2026-10-13-ata-misael.md`

## O fio

| Prancha | Afirmação | O que fica |
|---|---|---|
| Contexto | Gerar ficou barato. O risco agora é o AI slop | a causa (gerar barato, volume explode, conferir e operar não escalaram), o AI slop e como ele aparece na SUNNU (os 5 problemas do Misael), mais 5 evidências; premissa de não barrar iniciativas |
| Iniciativas das áreas | Seis frentes já andam, da pesquisa de mercado ao faturamento | as 6 frentes de automação do mapa do Misael em 5 áreas, na ordem da jornada do cliente (Eli, NUARQ, NUJOR, GMC, Felipe), pré-venda e pós-venda; a semântica visual é a do drawio dele: caixa âmbar = frente de automação (azul quando é da NUARQ), etiqueta branca = domínio que ela cobre; cada coluna traz a caixa, os domínios e o estado; clique numa frente abre a ficha (o que é, onde está, IA dentro, o que pede aos pilares; teclas 1 a 5, Esc fecha); o rodapé diz onde elas se tocam: contratos, consumo, preço e horas |
| Pilares | Quatro pilares, com a base de conhecimento por baixo | Desenvolvimento leva a Deploy, a Governança atravessa os dois e a Base de Conhecimento é a fundação |
| Quem faz | A NUARQ habilita; os departamentos constroem e operam | área da qual se depende sempre, ou área habilitadora? dois níveis de habilitação; o custo em três canais |
| Desenvolvimento | Desenvolver com IA e de IA, com um guia para quem não é dev | quatro entregas: guia, onboarding, skills e repositórios compartilhados, padrões para aplicações de IA; o modelo assíncrono como apoio |
| Deploy | Cada departamento publica, opera e mantém na sua OCN | o padrão da NUARQ; ajuda para orçar e gerar a OCN; nuvem de governo, Estaleiro ou pública |
| Governança | Acesso, custo e segurança da IA sob controle, na hora | três entregas: controle de acesso, custo visível, guardrails; as provas da PoC |
| Base de conhecimento | Cada iniciativa deixa a próxima mais fácil | o que entra e quem cura cada domínio (GMC, NUJOR, Plataforma de Inteligência, Pesquisa de Mercado, NUARQ no seu próprio domínio); a curadoria por domínio com metadados administrativos e de qualidade; o pipeline e as ferramentas da NUARQ; o que volta (estimativa com base no executado, padrão testado, iniciativas conectadas) |

| Produto Multicloud | Serpro Multicloud como um produto: o que construir e quando (proposta a definir) | muda de altitude: os pilares são o como; esta prancha propõe o quê e o quando. Três vistas alternáveis (teclas 1, 2, 3): o ciclo do produto em seis etapas (descobrir, vender, entregar, operar, faturar, prestar contas) com o módulo de cada uma e a lacuna "prestar contas sem dono"; o núcleo comum que nenhuma frente constrói sozinha (ID único, APIs, aferição e trilha, base de conhecimento, porta única do cliente); o ecossistema (órgão cliente, TCU, backoffice Serpro, parceiros de nuvem, Nuvem de Governo, Estaleiro) com o que cada um pede e como está hoje; três horizontes (2026 em curso, 2027 previsto nas frentes, depois a definir) |

Cada pilar tem o seu "Ganho" no rodapé. A última prancha é a de produto e fecha voltando ao contexto.

## Como falar a prancha do produto

- É a única prancha com o selo "proposta a definir" no título. Dizer isso em voz alta: o que e o quando são decisões do Jordane, e a prancha existe para provocar essas decisões, não para anunciá-las.
- Abrir na vista "O quê". O argumento está na última coluna: o ciclo termina em prestar contas, ao cliente e ao TCU, e hoje nenhuma frente é dona disso. O núcleo comum é o segundo argumento: ID único de cliente e contrato é o problema transversal que a gerência já apontou em 08/09.
- "Para quem" responde à pergunta "integrado ao negócio como?": cada ator pede uma coisa do produto. O TCU entra pelo Acórdão 292/2025, que cobra governança e responsabilidades claras na contratação centralizada de nuvem.
- "Quando" só repete o que as frentes já declararam (GMC 2026 e 2027, Panorama em fases, Plataforma de Inteligência v1) e marca como "a definir" o que ninguém declarou. Não prometer datas que não vieram das áreas.
- Rodapé: as três decisões do superintendente (dono de produto, quem constrói e paga o núcleo, porta de entrada do cliente). A NUARQ garante o como.

## Como falar a prancha das iniciativas

- Abrir no mapa, sem ficha. A frase é: "isso aqui já anda, com ou sem a gente". As cores são as do mapa do Misael, para ele e o Jordane reconhecerem: caixa âmbar é a frente, etiqueta branca é o domínio. A NUARQ tem duas frentes (catálogo e demandas com agentes), por isso são seis e não cinco. A ordem das colunas é a jornada do cliente de nuvem, não o organograma: pesquisa, preço e proposta, projeto, contrato e fatura, acompanhamento.
- Só abrir a ficha da frente que o Jordane perguntar. A da NUJOR é a mais madura para contar: duas divisões, Panorama em três fases, o orçamentador de três agentes no SerproLLM e o hands-on com a NUARQ desde 29/09.
- A linha "onde se tocam" do rodapé é o sombreamento do Contexto visto de perto. A resposta não é barrar: é um dono por domínio e integração por API. A Plataforma de Inteligência já nasce lendo o GMC por adaptador, não copiando.
- A frente da NUARQ (catálogo) está no mapa como mais uma frente, não como a dona das outras. Isso sustenta a prancha "Quem faz".

## Como falar a base de conhecimento (v0.6)

- O que mudou: a NUARQ não cura conteúdo. Quem cura é o departamento dono do domínio, porque só ele sabe de onde o dado veio e se está certo. A NUARQ entrega o pipeline, as ferramentas e a governança da base.
- A ficha de curadoria tem dois tipos de metadado: administrativos (dono, origem, data, validade, sigilo) e de qualidade (executado ou estimado, conferido por quem, completo ou parcial). A classificação segue o esquema da NISO (descritivo, estrutural, administrativo) com a camada de qualidade por cima; o modelo de domínio dono com plataforma central é o do data mesh.
- A lâmina do Gartner sobre IA em times de plataforma (enviada pelo Misael) dá a referência externa: instrumentar antes de automatizar, humano no circuito por padrão, um time de habilitação de IA. Mapeia direto: o curador é o humano no circuito; a NUARQ é o time de habilitação; o pipeline é o caminho dourado.

## Ainda em aberto
- **Prancha do produto:** confirmar com o Misael se a NUARQ propõe mesmo um "dono de produto" para o Multicloud e quem seria o candidato natural; decidir se o núcleo comum é construído por um departamento, pela NUARQ (foge do papel habilitador) ou por contratação.
- **Fichas das frentes:** confirmar com o Eli o modelo de pesquisa externo; com o Flamarion onde o GMC usa o SerproLLM; com o Felipe os pontos "a validar" da prancha (contratos de API, fonte financeira, periodicidades, acesso à IA).
- **Ficha de metadados:** fechar com o Misael os campos mínimos que cada curador preenche antes de a NUARQ ingerir.
- **Nome do processo para quem não é dev:** por enquanto, "Guia de desenvolvimento com IA". Opções: *Da Ideia ao Ar*, *Caminho Pavimentado*, *Spec Simples*.
- **Critério de nuvem:** quando o dado vai para a nuvem de governo, para o Estaleiro ou para a nuvem pública.
- **Onboarding em três casos** (começa do zero, entra no processo depois, já existe e precisa ir ao ar): fica para o anexo, ainda por escrever.
- **Sombreamento de iniciativas:** aparece como problema; a premissa é não barrar. Combinar com o Misael se vale sugerir ao Jordane um ambiente de aprovação.
- **Números a confirmar:** teto da OCN Sandbox; 45 contra 40 casos da avaliação.

## Não afirmar
- Que existe decisão de criar o produto, o dono ou o núcleo comum: a prancha é proposta.
- Datas de 2027 e "depois" como compromisso: vêm do roadmap do GMC e das fases do Panorama, não de um plano aprovado.
- Que o GMC já usa IA em produção: a nota de 08/09 diz "aparentemente consome o SerproLLM", a confirmar.
- Que a Plataforma de Inteligência tem periodicidade ou SLA definidos: a prancha v1 declara tudo "a validar".
- Que o Panorama já insere dados: a fase 1 só exibe o que está no Git.
- Que a Anthropic publicou os arquétipos: foi post pessoal de Boris Cherny.
- Que o gateway já está em produção ou aprovado.
- Que a NUARQ vai escolher ou conduzir as iniciativas.

## Fontes das iniciativas (prancha Iniciativas das áreas)
- Mapa "SUNNU, Frentes de Automação" (draw.io) do Misael, out. 2026: as 5 frentes, pré-venda e pós-venda, plataformas e domínios.
- GMC: `gmc2.docx` do Flamarion, roadmap com legenda 2026 (verde), 2027 (âmbar), "fica na SUNNU até SUPAN ter maturidade" (azul) e previsto (cinza).
- Plataforma de Inteligência de Nuvem: `Plataforma de Inteligência de Nuvem_Arquitetura_v1.pdf` do Felipe, prancha única, classificação confidencial.
- NUJOR: transcrição da reunião de 23/09/2026 (Junio, Robson, João, Vitor, Daniel, Joaquim) e o hands-on de 29/09 (`../../engenharia-ia-agentes/2026-09-29-nujor-harness-sdd/`).
- Pesquisa de mercado e inventário inicial: nota de alinhamento com a gerência de 08/09/2026 (`../../governanca-ia-multicloud/2026-09-11-avaliacao-gateway-ia/2026-09-08-alinhamento-gerente-arquitetura.md`).

## Fontes da prancha do produto (consultadas em 21/10/2026)
- TCU, Acórdão 292/2025-Plenário, sobre a contratação centralizada de nuvem pelo MGI (modelo de cloud broker multinuvem): riscos de fragmentação e lacunas no compartilhamento de responsabilidades. Resumo em https://www.mattosfilho.com.br/unico/tcu-contratacao-servicos-nuvem/ e notícia do TCU em https://portal.tcu.gov.br/imprensa/noticias/atuacao-do-tcu-reduz-riscos-e-valores-de-contratacao-de-servicos-de-computacao-em-nuvem
- Serpro, lançamento da Nuvem de Governo (2023) e oferta Serpro Multicloud "todas as nuvens em um único contrato": https://serpro.gov.br/menu/noticias/noticias-2023/serpro-lanca-nuvem-de-governo e https://serpro.gov.br/menu/noticias/noticias-2023/multicloud-mais-que-infraestrutura-de-nuvem
- Problema do ID único de cliente entre sistemas: nota de alinhamento com a gerência de 08/09/2026, seção 6.
- Ressalva: a lista de provedores varia entre os materiais públicos do Serpro; a prancha usa os oito do roadmap do GMC.

## Fontes da base de conhecimento (consultadas em 21/10/2026)
- Gartner, "Lack of AI-Ready Data Puts AI Projects at Risk", 26/02/2025: até o fim de 2026, 60% dos projetos de IA sem dado pronto para IA serão abandonados; maturidade de metadados como primeiro passo: https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk
- Gartner, lâmina "Harnessing AI in Your Platform Teams" (2026, material restrito enviado pelo Misael): caminho dourado, instrumentar antes de automatizar, humano no circuito por padrão, time de habilitação de IA.
- NISO, "Understanding Metadata": metadados descritivos, estruturais e administrativos (com direitos e preservação como subtipos): https://metadataetc.org/metadatabasics/types.htm
- Data mesh (Dehghani): domínio dono do dado como produto, plataforma self-service e governança federada: https://cloud.google.com/discover/what-is-data-mesh
- Ressalva: a lâmina do Gartner não foi localizada em fonte pública; citar como "Gartner, 2026" e não como relatório publicado.

## Fontes do AI slop (prancha de Contexto, consultadas em 13/10/2026)
- Merriam-Webster escolhe "slop" como palavra do ano de 2025: https://simonwillison.net/2025/Dec/15/2025-word-of-the-year-slop/
- Workslop, BetterUp Labs e Stanford Social Media Lab (1.150 trabalhadores dos EUA; 40% receberam no último mês; cerca de 1h56 perdida por caso): https://betterup.com/workslop-infographic
- Veracode, 2025 GenAI Code Security Report (45% das tarefas com falha de segurança): https://www.veracode.com/press-release/ai-generated-code-poses-major-security-risks-in-nearly-half-of-all-development-tasks-veracode-research-reveals/
- GitClear, AI Copilot Code Quality 2025 (8x mais blocos duplicados em 2024): https://leaddev.com/software-quality/how-ai-generated-code-accelerates-technical-debt
- METR, jul. 2025 (devs experientes 19% mais lentos, achando que estavam mais rápidos): https://the-decoder.com/ai-coding-can-make-developers-slower-even-if-they-feel-faster/
- curl encerra o bug bounty por excesso de relatórios slop (jan. 2026): https://thenewstack.io/drowning-in-ai-slop-reports-curl-ends-bug-bounties/
- Ressalvas para a fala: o METR teve uma amostra pequena (16 devs); os números da BetterUp vêm de autodeclaração.
