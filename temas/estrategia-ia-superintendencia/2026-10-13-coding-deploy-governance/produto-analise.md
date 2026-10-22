# Serpro Multicloud como produto: o que uma plataforma de broker precisa ter

Análise de apoio à prancha `produto.html`, 21/10/2026. Duas lentes: a do gestor de produto de um
broker multinuvem e a do cliente (órgão). No fim, o que isso muda na prancha.

Referências: NIST SP 500-292 define o broker por três papéis (intermediação, agregação,
arbitragem); FOCUS é a especificação aberta de custo e uso da FinOps Foundation (1.3 ratificada
em dez/2025; 1.4 com detalhe de fatura em 2026). AWS e Azure exportam FOCUS nativamente (até 1.2);
OCI em 1.0; Google só parcial, por view no BigQuery. A Nuvem de Governo precisaria do próprio
export conformante.

## Lente 1: gestor de produto de broker multinuvem

Onze capacidades, na ordem do ciclo do cliente. "Hoje" vem do mapa das frentes.

| # | Capacidade | O que é essencial | Hoje na SUNNU | Lacuna |
|---|---|---|---|---|
| 1 | Catálogo e preço | catálogo único de serviços e preços de todos os provedores e da Nuvem de Governo; calculadora; comparação; repasse de desconto (arbitragem) | Catálogo NUARQ em produção, 6 provedores; integração com GMC em andamento | Nuvem de Governo no mesmo catálogo |
| 2 | Demanda e proposta | entrada estruturada (as perguntas certas na abertura), orçamento de horas e de consumo, proposta com arquitetura, contrato | Demandas NUARQ em produção; orçamentador NUJOR com IA | formulário genérico; proposta e contrato em sistemas separados |
| 3 | Conta e provisionamento | criar OCN e contas por provedor com guardrails, tags, SSO, orçamento; onboarding | padrão de deploy NUARQ; GMC prevê OCN e onboard (2027) | hoje é manual e lento |
| 4 | Contratos e compromissos | contrato do órgão, compromisso de uso, créditos, descontos, renovação, SLA | GMC contratos; Felipe compromissos e SLAs; gestão de provedores prevista | compromissos e créditos geridos à mão |
| 5 | Medição e cobrança | ingestão FOCUS de todos os provedores, normalização, rateio por órgão, conta, projeto e OS, fatura única conciliável com a do provedor, margem | GMC extrai de 8 fontes (2026) e afere consumo; Felipe consome RDC e Focus | FOCUS como formato canônico, com as colunas do Serpro (contrato, OS, órgão) |
| 6 | FinOps para o cliente | painel, orçamento com alerta, anomalia, recomendações, previsão de fatura | Qlik e Data Lake previstos (Felipe) | nada voltado ao cliente ainda |
| 7 | Suporte e acionamento | um canal só, roteamento ao provedor, SLA visível, histórico, escalonamento | GOVI para acionamentos | portal de acionamento não existe como produto |
| 8 | Serviços profissionais | OS gerada da demanda aprovada, aprovação eletrônica, horas executadas, entregas | Panorama fase 1; GMC prevê OS (2027) | emissão de OS é dor conhecida |
| 9 | Relacionamento (CRM e TAM) | visão 360 do órgão, contatos, histórico, pipeline, plano de adoção, revisão periódica, saúde da conta | GMC prevê gestão de clientes (relacionamento, incentivo, classificação) | sem dono hoje; vive em Git e planilha |
| 10 | Governança e conformidade | política por classificação do dado, guardrails, LGPD, trilha de auditoria, relatório de prestação de contas, usuários e acessos | guardrails NUARQ; GMC prevê usuários e acessos | prestação de contas ao TCU sem dono |
| 11 | Plataforma | ID único de cliente e contrato, APIs e eventos, base de conhecimento, agentes de IA (orçamento, atendimento, FinOps) | gateway de IA; base de conhecimento | núcleo comum a definir |

Leitura de produto: 1, 2 e 5 são o coração de um broker e já têm dono. 7, 8 e 9 são o que o
cliente sente todo dia e são as mais fracas. 10 é o que o TCU vai cobrar. 11 é o que faz as
outras dez conversarem.

## Lente 2: o que eu quero como cliente (órgão)

Um lugar só, com sete verbos: pedir, contratar, usar, ver, pagar, pedir ajuda, prestar contas.

- **Pedir:** abrir a demanda respondendo às perguntas que o Serpro já sabe que vai fazer, e ver o prazo de resposta.
- **Contratar:** proposta, OS e contrato no mesmo fluxo, com aprovação eletrônica e horas estimadas a partir do histórico.
- **Usar:** contas criadas no padrão, acesso por SSO, papéis definidos por mim.
- **Ver:** consumo diário em FOCUS por conta, projeto e etiqueta; previsão de fatura; orçamento com alerta; preço pago contra preço de lista.
- **Pagar:** fatura única, mas detalhada o suficiente para conciliar com o relatório de consumo.
- **Pedir ajuda:** um portal de acionamento, sem eu precisar saber qual provedor está por trás, com SLA e status visíveis; um TAM nomeado que me procura antes do problema.
- **Prestar contas:** relatório pronto para auditoria: o que contratei, consumi e paguei, com que desconto.

Os cinco problemas já conhecidos, pela lente do cliente:

| Problema | O que eu espero |
|---|---|
| Emissão de OS | OS nasce da demanda aprovada, com atividades e horas sugeridas do histórico (o orçamentador da NUJOR já faz o esboço); aprovo no portal; vejo horas executadas enquanto o projeto anda |
| Relatórios FOCUS integrados | um dataset FOCUS só, de todos os provedores e da Nuvem de Governo, com as colunas do Serpro (contrato, OS, órgão, projeto); painel pronto e export para a minha ferramenta |
| Portal de acionamento | canal único, roteamento automático ao provedor, SLA e histórico, primeiro atendimento por agente de IA, integrado ao GOVI |
| TAM | engenheiro nomeado por conta, plano de adoção, revisão trimestral, alertas proativos (anomalia, crédito acabando, renovação) |
| CRM | visão 360 da minha conta, que o TAM e a venda enxergam juntos; hoje cada etapa está num sistema |

## O que isso muda na prancha do produto

1. O ciclo tem duas lacunas, não uma: prestar contas (TCU) e relacionar (CRM e TAM). Vale uma
   sétima etapa "Relacionar" ou marcar "Acompanhar" como sem dono.
2. O núcleo comum ganha um nome concreto em "Aferição e trilha": FOCUS como formato canônico de
   consumo, com as colunas do Serpro.
3. Em "Para quem", o órgão cliente passa a pedir os sete verbos, e os cinco problemas entram como
   "hoje".
4. Em "Quando", 2026 ganha "portal de acionamento e OS a partir da demanda" como candidatos de
   maior valor percebido pelo cliente, se o Jordane quiser um ganho visível antes de 2027.
