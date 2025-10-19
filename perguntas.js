const perguntas = {
  // 1
  'pergunta_1':'De acordo com o Regimento Interno da Câmara de Caxias do Sul, a função legislativa consiste em:',
  'pergunta_1_alternativa_1':'Elaborar, apreciar, votar, modificar e revogar leis municipais.',
  'pergunta_1_alternativa_2':'Fiscalizar as contas do Executivo.',
  'pergunta_1_alternativa_3':'Julgar infrações político-administrativas.',
  'pergunta_1_alternativa_4':'Administrar o orçamento interno da Câmara.',
  'pergunta_1_resposta_correta':'Elaborar, apreciar, votar, modificar e revogar leis municipais.',
  'pergunta_1_justificativa':'O artigo 5º, §1º da Resolução 244/A estabelece que a função legislativa consiste na elaboração, apreciação, votação, modificação e revogação de leis de competência municipal.',

  //----------------------------------
  // 2
  'pergunta_2':'A função de fiscalização financeira e controle externo da Câmara é exercida:',
  'pergunta_2_alternativa_1':'Sem auxílio de qualquer órgão externo.',
  'pergunta_2_alternativa_2':'Com o auxílio do Tribunal de Contas do Estado.',
  'pergunta_2_alternativa_3':'Pela Controladoria-Geral do Município.',
  'pergunta_2_alternativa_4':'Pelo Ministério Público Estadual.',
  'pergunta_2_resposta_correta':'Com o auxílio do Tribunal de Contas do Estado.',
  'pergunta_2_justificativa':'Segundo o art. 5º, §2º do Regimento, a Câmara exerce o controle financeiro e de contas com o auxílio do Tribunal de Contas do Estado.',

  //----------------------------------
  // 3
  'pergunta_3':'Assumirá a presidência da Sessão Solene de Instalação:',
  'pergunta_3_alternativa_1':'O vereador mais votado.',
  'pergunta_3_alternativa_2':'O vereador mais idoso.',
  'pergunta_3_alternativa_3':'O vereador com mais mandatos.',
  'pergunta_3_alternativa_4':'O prefeito eleito.',
  'pergunta_3_resposta_correta':'O vereador mais idoso.',
  'pergunta_3_justificativa':'O art. 6º, §1º determina que o vereador mais idoso preside a Sessão Solene de Instalação.',

  //----------------------------------
  // 4
  'pergunta_4':'A Ordem do Dia é o momento da sessão destinado a:',
  'pergunta_4_alternativa_1':'Registro de presença.',
  'pergunta_4_alternativa_2':'Leitura de expedientes.',
  'pergunta_4_alternativa_3':'Discussão e votação das matérias incluídas na pauta.',
  'pergunta_4_alternativa_4':'Comunicações pessoais dos vereadores.',
  'pergunta_4_resposta_correta':'Discussão e votação das matérias incluídas na pauta.',
  'pergunta_4_justificativa':'A Ordem do Dia é a fase da sessão em que se discutem e votam proposições previamente incluídas na pauta.',

  //----------------------------------
  // 5
  'pergunta_5':'A Mesa Diretora da Câmara é composta por:',
  'pergunta_5_alternativa_1':'Presidente, Vice-Presidente e Secretário.',
  'pergunta_5_alternativa_2':'Presidente, 1º e 2º Vice-Presidentes, 1º e 2º Secretários.',
  'pergunta_5_alternativa_3':'Presidente e dois Secretários.',
  'pergunta_5_alternativa_4':'Presidente, Vice-Presidente e Líder de Governo.',
  'pergunta_5_resposta_correta':'Presidente, 1º e 2º Vice-Presidentes, 1º e 2º Secretários.',
  'pergunta_5_justificativa':'Conforme o art. 13, a Mesa é composta por um Presidente, dois Vice-Presidentes e dois Secretários.',

  //----------------------------------
  // 6
  'pergunta_6':'As funções dos membros da Mesa cessarão:',
  'pergunta_6_alternativa_1':'Somente ao final do mandato.',
  'pergunta_6_alternativa_2':'Ao final do ano legislativo, por renúncia, perda do mandato ou destituição.',
  'pergunta_6_alternativa_3':'Apenas com a morte do titular.',
  'pergunta_6_alternativa_4':'Com aprovação de dois terços do plenário.',
  'pergunta_6_resposta_correta':'Ao final do ano legislativo, por renúncia, perda do mandato ou destituição.',
  'pergunta_6_justificativa':'Segundo o art. 23, o término ocorre nessas hipóteses.',

  //----------------------------------
  // 7
  'pergunta_7':'As Sessões Ordinárias e Extraordinárias só podem ser abertas com:',
  'pergunta_7_alternativa_1':'Um terço dos vereadores presentes.',
  'pergunta_7_alternativa_2':'Metade mais um dos vereadores.',
  'pergunta_7_alternativa_3':'Um quarto dos vereadores.',
  'pergunta_7_alternativa_4':'Dois terços dos vereadores.',
  'pergunta_7_resposta_correta':'Um terço dos vereadores.',
  'pergunta_7_justificativa':'Conforme o art. 130, a presença mínima para abertura é de um terço dos membros.',

  //----------------------------------
  // 8
  'pergunta_8':'A duração máxima das sessões ordinárias e extraordinárias é de:',
  'pergunta_8_alternativa_1':'Uma hora.',
  'pergunta_8_alternativa_2':'Duas horas.',
  'pergunta_8_alternativa_3':'Três horas.',
  'pergunta_8_alternativa_4':'Quatro horas.',
  'pergunta_8_resposta_correta':'Três horas.',
  'pergunta_8_justificativa':'O art. 130 também fixa o limite máximo de duração das sessões em três horas.',

  //----------------------------------
  // 9
  'pergunta_9':'As Sessões Solenes:',
  'pergunta_9_alternativa_1':'Dependem de quorum mínimo.',
  'pergunta_9_alternativa_2':'Podem deliberar matérias urgentes.',
  'pergunta_9_alternativa_3':'Independem de quorum por terem caráter apenas cerimonial.',
  'pergunta_9_alternativa_4':'São realizadas apenas mediante convocação do Prefeito.',
  'pergunta_9_resposta_correta':'Independem de quorum por terem caráter apenas cerimonial.',
  'pergunta_9_justificativa':'As sessões solenes têm caráter comemorativo e não deliberativo, portanto independem de quorum.',

  //----------------------------------
  // 10
  'pergunta_10':'As contas do Prefeito e da Mesa da Câmara devem ser prestadas:',
  'pergunta_10_alternativa_1':'Até noventa dias após o encerramento do exercício.',
  'pergunta_10_alternativa_2':'Em até sessenta dias após o parecer do Tribunal de Contas.',
  'pergunta_10_alternativa_3':'Diretamente ao Legislativo sem prazo fixo.',
  'pergunta_10_alternativa_4':'Até o fim da legislatura.',
  'pergunta_10_resposta_correta':'Em até sessenta dias após o parecer do Tribunal de Contas.',
  'pergunta_10_justificativa':'O Regimento prevê prazo de 60 dias para a Câmara deliberar após o recebimento do parecer prévio do Tribunal de Contas.',

  //----------------------------------
  // 11
  'pergunta_11':'O Presidente da Câmara só vota:',
  'pergunta_11_alternativa_1':'Sempre.',
  'pergunta_11_alternativa_2':'Quando houver empate, votação secreta ou matéria que exija 2/3 dos votos.',
  'pergunta_11_alternativa_3':'Em casos de urgência.',
  'pergunta_11_alternativa_4':'Quando autorizado pelo plenário.',
  'pergunta_11_resposta_correta':'Quando houver empate, votação secreta ou matéria que exija 2/3 dos votos.',
  'pergunta_11_justificativa':'O art. 29 do Regimento determina essas hipóteses específicas para o voto do Presidente.',

  //----------------------------------
  // 12
  'pergunta_12':'As Comissões Permanentes são órgãos:',
  'pergunta_12_alternativa_1':'De assessoramento técnico e político, com atuação contínua.',
  'pergunta_12_alternativa_2':'De caráter apenas temporário.',
  'pergunta_12_alternativa_3':'Formados por servidores efetivos.',
  'pergunta_12_alternativa_4':'Sem poder de parecer.',
  'pergunta_12_resposta_correta':'De assessoramento técnico e político, com atuação contínua.',
  'pergunta_12_justificativa':'O Regimento define as comissões permanentes como órgãos técnicos e políticos de caráter permanente.',

  //----------------------------------
  // 13
  'pergunta_13':'A Câmara Municipal reunir-se-á anualmente, em sessão legislativa ordinária:',
  'pergunta_13_alternativa_1':'De 1º de janeiro a 22 de dezembro.',
  'pergunta_13_alternativa_2':'De 15 de janeiro a 22 de dezembro.',
  'pergunta_13_alternativa_3':'De 1º de fevereiro a 15 de dezembro.',
  'pergunta_13_alternativa_4':'De 2 de fevereiro a 15 de dezembro.',
  'pergunta_13_resposta_correta':'De 1º de fevereiro a 15 de dezembro.',
  'pergunta_13_justificativa':'O art. 125 estabelece o período da sessão legislativa ordinária.',

  //----------------------------------
  // 14
  'pergunta_14':'As funções da Câmara incluem, entre outras:',
  'pergunta_14_alternativa_1':'Executiva e judiciária.',
  'pergunta_14_alternativa_2':'Legislativa, fiscalizadora, de julgamento e assessoramento.',
  'pergunta_14_alternativa_3':'Administrativa e privada.',
  'pergunta_14_alternativa_4':'Judicial e arbitral.',
  'pergunta_14_resposta_correta':'Legislativa, fiscalizadora, de julgamento e assessoramento.',
  'pergunta_14_justificativa':'Essas são as funções descritas no art. 5º do Regimento.',

  //----------------------------------
  // 15
  'pergunta_15':'Durante a Sessão Solene de Instalação, a posse do Prefeito ocorre:',
  'pergunta_15_alternativa_1':'Antes do compromisso legal.',
  'pergunta_15_alternativa_2':'Após a prestação do compromisso e entrega de declaração de bens.',
  'pergunta_15_alternativa_3':'Após a eleição da Mesa Diretora.',
  'pergunta_15_alternativa_4':'Somente após aprovação do Tribunal de Contas.',
  'pergunta_15_resposta_correta':'Após a prestação do compromisso e entrega de declaração de bens.',
  'pergunta_15_justificativa':'O art. 6º, §2º define essa sequência da Sessão Solene de Instalação.',

  //----------------------------------
  // 16
  'pergunta_16':'A Comissão de Constituição, Justiça e Legislação tem como competência específica:',
  'pergunta_16_alternativa_1':'Opinar sobre proposições e emendas em tramitação.',
  'pergunta_16_alternativa_2':'Fiscalizar obras públicas.',
  'pergunta_16_alternativa_3':'Acompanhar o orçamento anual.',
  'pergunta_16_alternativa_4':'Promover debates sobre meio ambiente.',
  'pergunta_16_resposta_correta':'Opinar sobre proposições e emendas em tramitação.',
  'pergunta_16_justificativa':'Compete à Comissão de Constituição e Justiça emitir parecer sobre a legalidade e constitucionalidade de proposições.',

  //----------------------------------
  // 17
  'pergunta_17':'As Comissões Temporárias têm como característica:',
  'pergunta_17_alternativa_1':'Existirem por prazo determinado para tratar de assuntos específicos.',
  'pergunta_17_alternativa_2':'Terem duração igual à legislatura.',
  'pergunta_17_alternativa_3':'Substituírem as Comissões Permanentes.',
  'pergunta_17_alternativa_4':'Serem compostas por servidores efetivos.',
  'pergunta_17_resposta_correta':'Existirem por prazo determinado para tratar de assuntos específicos.',
  'pergunta_17_justificativa':'O Regimento diferencia as Comissões Temporárias pelas suas finalidades transitórias e prazo definido.',

  //----------------------------------
  // 18
  'pergunta_18':'As Sessões Extraordinárias são realizadas:',
  'pergunta_18_alternativa_1':'Para tratar de matérias urgentes, mediante convocação.',
  'pergunta_18_alternativa_2':'Somente para homenagens.',
  'pergunta_18_alternativa_3':'Sem necessidade de convocação.',
  'pergunta_18_alternativa_4':'Apenas durante o recesso.',
  'pergunta_18_resposta_correta':'Para tratar de matérias urgentes, mediante convocação.',
  'pergunta_18_justificativa':'As sessões extraordinárias são convocadas para matérias urgentes e relevantes.',

  //----------------------------------
  // 19
  'pergunta_19':'As sessões extraordinárias e solenes independem de quorum para:',
  'pergunta_19_alternativa_1':'Convocação e deliberação, respectivamente.',
  'pergunta_19_alternativa_2':'Ambas as etapas.',
  'pergunta_19_alternativa_3':'Apenas para encerramento.',
  'pergunta_19_alternativa_4':'Nenhuma etapa.',
  'pergunta_19_resposta_correta':'Convocação e deliberação, respectivamente.',
  'pergunta_19_justificativa':'Extraordinária não depende de quorum para convocação, e a solene independe totalmente por não deliberar.',
  
  //----------------------------------
  // 20
  'pergunta_20':'Proposição é:',
  'pergunta_20_alternativa_1':'Qualquer matéria sujeita à deliberação da Câmara.',
  'pergunta_20_alternativa_2':'Apenas projeto de lei.',
  'pergunta_20_alternativa_3':'Moção de aplauso.',
  'pergunta_20_alternativa_4':'Expediente administrativo.',
  'pergunta_20_resposta_correta':'Qualquer matéria sujeita à deliberação da Câmara.',
  'pergunta_20_justificativa':'O Regimento define proposição como toda matéria sobre a qual deva pronunciar-se a Câmara.',

  //----------------------------------
//----------------------------------
  'pergunta_21':'As Comissões Temporárias podem ser criadas para:',
  'pergunta_21_alternativa_1':'Tratar de assuntos de caráter permanente.',
  'pergunta_21_alternativa_2':'Tratar de assuntos específicos e por prazo determinado.',
  'pergunta_21_alternativa_3':'Substituir a Mesa Diretora.',
  'pergunta_21_alternativa_4':'Fiscalizar obras públicas.',
  'pergunta_21_resposta_correta':'Tratar de assuntos específicos e por prazo determinado.',
  'pergunta_21_justificativa':'O Regimento define que as Comissões Temporárias são criadas para assuntos específicos e têm duração limitada.',

  //----------------------------------
  'pergunta_22':'A criação de Comissões Parlamentares de Inquérito depende de requerimento de:',
  'pergunta_22_alternativa_1':'Um terço dos vereadores.',
  'pergunta_22_alternativa_2':'Maioria simples do plenário.',
  'pergunta_22_alternativa_3':'Dois terços dos vereadores.',
  'pergunta_22_alternativa_4':'Apenas do Presidente da Câmara.',
  'pergunta_22_resposta_correta':'Um terço dos vereadores.',
  'pergunta_22_justificativa':'Conforme o art. 168 do Regimento, a CPI é criada mediante requerimento de um terço dos vereadores.',

  //----------------------------------
  'pergunta_23':'As proposições podem ser retiradas:',
  'pergunta_23_alternativa_1':'A qualquer tempo pelo autor, antes da votação.',
  'pergunta_23_alternativa_2':'Somente pela Mesa Diretora.',
  'pergunta_23_alternativa_3':'Somente antes da leitura em plenário.',
  'pergunta_23_alternativa_4':'Após a aprovação final.',
  'pergunta_23_resposta_correta':'A qualquer tempo pelo autor, antes da votação.',
  'pergunta_23_justificativa':'O autor pode retirar sua proposição até o início da votação, conforme as regras regimentais.',

  //----------------------------------
  'pergunta_24':'O veto do Prefeito deverá ser apreciado pela Câmara no prazo de:',
  'pergunta_24_alternativa_1':'10 dias úteis.',
  'pergunta_24_alternativa_2':'30 dias corridos.',
  'pergunta_24_alternativa_3':'45 dias úteis.',
  'pergunta_24_alternativa_4':'60 dias corridos.',
  'pergunta_24_resposta_correta':'30 dias corridos.',
  'pergunta_24_justificativa':'O Regimento fixa o prazo de 30 dias para apreciação do veto pelo Legislativo.',

  //----------------------------------
  'pergunta_25':'A promulgação de lei é ato que:',
  'pergunta_25_alternativa_1':'Compete sempre ao Prefeito.',
  'pergunta_25_alternativa_2':'Compete ao Presidente da Câmara quando o Prefeito não o faz.',
  'pergunta_25_alternativa_3':'Depende de aprovação judicial.',
  'pergunta_25_alternativa_4':'É feito apenas pelo Governador do Estado.',
  'pergunta_25_resposta_correta':'Compete ao Presidente da Câmara quando o Prefeito não o faz.',
  'pergunta_25_justificativa':'Se o Prefeito não promulgar a lei no prazo legal, o Presidente da Câmara o fará, conforme o Regimento.',

  //----------------------------------
  'pergunta_26':'A sanção tácita ocorre quando:',
  'pergunta_26_alternativa_1':'O Prefeito devolve o projeto com veto parcial.',
  'pergunta_26_alternativa_2':'O Prefeito não se manifesta no prazo de 15 dias úteis.',
  'pergunta_26_alternativa_3':'O projeto é aprovado por unanimidade.',
  'pergunta_26_alternativa_4':'O Prefeito promulga a lei antes do prazo.',
  'pergunta_26_resposta_correta':'O Prefeito não se manifesta no prazo de 15 dias úteis.',
  'pergunta_26_justificativa':'A ausência de manifestação do Prefeito no prazo de 15 dias úteis implica sanção tácita.',

  //----------------------------------
  'pergunta_27':'A iniciativa de lei sobre matéria orçamentária é de competência:',
  'pergunta_27_alternativa_1':'Exclusiva do Prefeito.',
  'pergunta_27_alternativa_2':'Compartilhada entre Prefeito e Câmara.',
  'pergunta_27_alternativa_3':'Exclusiva da Mesa Diretora.',
  'pergunta_27_alternativa_4':'Do Tribunal de Contas.',
  'pergunta_27_resposta_correta':'Exclusiva do Prefeito.',
  'pergunta_27_justificativa':'A competência para propor leis orçamentárias é privativa do Executivo Municipal.',

  //----------------------------------
  'pergunta_28':'As emendas apresentadas aos projetos de lei orçamentária devem ser:',
  'pergunta_28_alternativa_1':'Aprovadas por unanimidade.',
  'pergunta_28_alternativa_2':'Compatíveis com o plano plurianual e com a lei de diretrizes orçamentárias.',
  'pergunta_28_alternativa_3':'Apenas de iniciativa popular.',
  'pergunta_28_alternativa_4':'Feitas exclusivamente pelo Executivo.',
  'pergunta_28_resposta_correta':'Compatíveis com o plano plurianual e com a lei de diretrizes orçamentárias.',
  'pergunta_28_justificativa':'O Regimento impõe que as emendas respeitem o PPA e a LDO.',

  //----------------------------------
  'pergunta_29':'A Câmara Municipal julga o Prefeito e o Vice-Prefeito quando:',
  'pergunta_29_alternativa_1':'Cometem infrações penais.',
  'pergunta_29_alternativa_2':'Incorrem em infrações político-administrativas.',
  'pergunta_29_alternativa_3':'Descumprem decisões judiciais.',
  'pergunta_29_alternativa_4':'Não executam obras públicas.',
  'pergunta_29_resposta_correta':'Incorrem em infrações político-administrativas.',
  'pergunta_29_justificativa':'Essa é uma das funções da Câmara, conforme o art. 5º.',

  //----------------------------------
  'pergunta_30':'A licença para tratar de interesse particular do vereador deve ter duração mínima de:',
  'pergunta_30_alternativa_1':'10 dias.',
  'pergunta_30_alternativa_2':'20 dias.',
  'pergunta_30_alternativa_3':'30 dias.',
  'pergunta_30_alternativa_4':'60 dias.',
  'pergunta_30_resposta_correta':'30 dias.',
  'pergunta_30_justificativa':'O vereador pode licenciar-se por motivo particular por período nunca inferior a 30 dias.',

  //----------------------------------
  'pergunta_31':'O vereador pode licenciar-se por motivo de doença:',
  'pergunta_31_alternativa_1':'Sem necessidade de comprovação.',
  'pergunta_31_alternativa_2':'Mediante atestado médico comprovado.',
  'pergunta_31_alternativa_3':'Apenas com aprovação do Prefeito.',
  'pergunta_31_alternativa_4':'Com aval do Tribunal de Contas.',
  'pergunta_31_resposta_correta':'Mediante atestado médico comprovado.',
  'pergunta_31_justificativa':'A licença por moléstia deve ser comprovada por documento médico.',

  //----------------------------------
  'pergunta_32':'O vereador que assumir cargo público na administração direta ou indireta:',
  'pergunta_32_alternativa_1':'Perde automaticamente o mandato.',
  'pergunta_32_alternativa_2':'Fica licenciado enquanto durar o exercício do cargo.',
  'pergunta_32_alternativa_3':'Permanece acumulando funções.',
  'pergunta_32_alternativa_4':'Deve renunciar imediatamente.',
  'pergunta_32_resposta_correta':'Fica licenciado enquanto durar o exercício do cargo.',
  'pergunta_32_justificativa':'O vereador deve comunicar a Mesa e fica licenciado enquanto exercer função na administração pública.',

  //----------------------------------
  'pergunta_33':'A eleição da Mesa Diretora ocorre:',
  'pergunta_33_alternativa_1':'Na última sessão do ano legislativo.',
  'pergunta_33_alternativa_2':'Na primeira sessão do primeiro ano da legislatura.',
  'pergunta_33_alternativa_3':'Por votação secreta em qualquer sessão.',
  'pergunta_33_alternativa_4':'Apenas após aprovação do Prefeito.',
  'pergunta_33_resposta_correta':'Na primeira sessão do primeiro ano da legislatura.',
  'pergunta_33_justificativa':'A eleição e posse da Mesa ocorrem na primeira sessão de instalação da legislatura.',

  //----------------------------------
  'pergunta_34':'O Presidente da Câmara exerce, entre outras, a função de:',
  'pergunta_34_alternativa_1':'Julgar infrações disciplinares.',
  'pergunta_34_alternativa_2':'Representar a Câmara em juízo e fora dele.',
  'pergunta_34_alternativa_3':'Fiscalizar o Prefeito.',
  'pergunta_34_alternativa_4':'Substituir o Vice-Presidente.',
  'pergunta_34_resposta_correta':'Representar a Câmara em juízo e fora dele.',
  'pergunta_34_justificativa':'O art. 27 define como função do Presidente representar a Câmara em todas as instâncias.',

  //----------------------------------
  'pergunta_35':'Durante o recesso parlamentar, o funcionamento da Câmara é assegurado por:',
  'pergunta_35_alternativa_1':'Comissão Representativa.',
  'pergunta_35_alternativa_2':'Comissão de Ética.',
  'pergunta_35_alternativa_3':'Comissão Especial.',
  'pergunta_35_alternativa_4':'Comissão de Justiça.',
  'pergunta_35_resposta_correta':'Comissão Representativa.',
  'pergunta_35_justificativa':'A Comissão Representativa exerce as atribuições do Legislativo durante o recesso parlamentar.',

  //----------------------------------
  'pergunta_36':'Os prazos regimentais contam-se:',
  'pergunta_36_alternativa_1':'Em dias corridos.',
  'pergunta_36_alternativa_2':'Apenas em dias úteis.',
  'pergunta_36_alternativa_3':'Somente durante o recesso.',
  'pergunta_36_alternativa_4':'Excluindo sábados, domingos e feriados.',
  'pergunta_36_resposta_correta':'Em dias corridos.',
  'pergunta_36_justificativa':'Salvo disposição em contrário, os prazos contam-se em dias corridos.',

  //----------------------------------
  'pergunta_37':'As sessões poderão ser prorrogadas:',
  'pergunta_37_alternativa_1':'Pelo Presidente, a pedido de vereador, por até 30 minutos.',
  'pergunta_37_alternativa_2':'Pelo Prefeito.',
  'pergunta_37_alternativa_3':'Somente pelo plenário por unanimidade.',
  'pergunta_37_alternativa_4':'Por iniciativa do Secretário.',
  'pergunta_37_resposta_correta':'Pelo Presidente, a pedido de vereador, por até 30 minutos.',
  'pergunta_37_justificativa':'O Presidente pode prorrogar a sessão mediante solicitação e aprovação do plenário.',

  //----------------------------------
  'pergunta_38':'A votação simbólica é caracterizada por:',
  'pergunta_38_alternativa_1':'Manifestação verbal nominal.',
  'pergunta_38_alternativa_2':'Levantada de mãos ou permanência como se encontra.',
  'pergunta_38_alternativa_3':'Escrutínio secreto.',
  'pergunta_38_alternativa_4':'Utilização de urna.',
  'pergunta_38_resposta_correta':'Levantada de mãos ou permanência como se encontra.',
  'pergunta_38_justificativa':'Na votação simbólica, os vereadores manifestam-se por gestos ou permanência.',

  //----------------------------------
  'pergunta_39':'A votação nominal ocorre quando:',
  'pergunta_39_alternativa_1':'Cada vereador declara seu voto publicamente.',
  'pergunta_39_alternativa_2':'Há unanimidade no plenário.',
  'pergunta_39_alternativa_3':'O Presidente decide sozinho.',
  'pergunta_39_alternativa_4':'A matéria é de iniciativa popular.',
  'pergunta_39_resposta_correta':'Cada vereador declara seu voto publicamente.',
  'pergunta_39_justificativa':'A votação nominal é feita com chamada nominal dos vereadores e registro de voto individual.',

  //----------------------------------
  'pergunta_40':'As atas das sessões devem ser aprovadas:',
  'pergunta_40_alternativa_1':'Na mesma sessão em que foram redigidas.',
  'pergunta_40_alternativa_2':'Na sessão seguinte.',
  'pergunta_40_alternativa_3':'Somente ao final do mês.',
  'pergunta_40_alternativa_4':'Pelo Presidente.',
  'pergunta_40_resposta_correta':'Na sessão seguinte.',
  'pergunta_40_justificativa':'O Regimento prevê que as atas sejam lidas e aprovadas na sessão subsequente.',

  //----------------------------------
  'pergunta_41':'As sessões plenárias da Câmara são públicas, exceto:',
  'pergunta_41_alternativa_1':'Quando houver deliberação para que sejam secretas.',
  'pergunta_41_alternativa_2':'Durante votações simbólicas.',
  'pergunta_41_alternativa_3':'Quando tratar de moções.',
  'pergunta_41_alternativa_4':'Durante posse do Prefeito.',
  'pergunta_41_resposta_correta':'Quando houver deliberação para que sejam secretas.',
  'pergunta_41_justificativa':'Somente por deliberação da maioria absoluta é possível sessão secreta.',

  //----------------------------------
  'pergunta_42':'A tribuna livre é destinada:',
  'pergunta_42_alternativa_1':'Aos vereadores.',
  'pergunta_42_alternativa_2':'À participação de entidades e cidadãos previamente inscritos.',
  'pergunta_42_alternativa_3':'Aos servidores da Câmara.',
  'pergunta_42_alternativa_4':'Exclusivamente ao Prefeito.',
  'pergunta_42_resposta_correta':'À participação de entidades e cidadãos previamente inscritos.',
  'pergunta_42_justificativa':'A Tribuna Livre é espaço quinzenal destinado a entidades e cidadãos conforme regulamento.',

  //----------------------------------
  'pergunta_43':'Compete à Comissão de Ética Parlamentar:',
  'pergunta_43_alternativa_1':'Emitir pareceres sobre proposições de lei.',
  'pergunta_43_alternativa_2':'Apurar fatos relativos à conduta ética dos vereadores.',
  'pergunta_43_alternativa_3':'Julgar contas do Executivo.',
  'pergunta_43_alternativa_4':'Fiscalizar licitações.',
  'pergunta_43_resposta_correta':'Apurar fatos relativos à conduta ética dos vereadores.',
  'pergunta_43_justificativa':'A Comissão de Ética zela pelo decoro e apura faltas éticas de vereadores.',

  //----------------------------------
  'pergunta_44':'A destituição de membro da Mesa requer:',
  'pergunta_44_alternativa_1':'Maioria simples dos presentes.',
  'pergunta_44_alternativa_2':'Voto favorável de dois terços dos vereadores.',
  'pergunta_44_alternativa_3':'Aprovação unânime.',
  'pergunta_44_alternativa_4':'Decisão do Prefeito.',
  'pergunta_44_resposta_correta':'Voto favorável de dois terços dos vereadores.',
  'pergunta_44_justificativa':'O art. 24 exige dois terços para destituição de membro da Mesa.',

  //----------------------------------
  'pergunta_45':'As matérias de iniciativa exclusiva do Prefeito não podem:',
  'pergunta_45_alternativa_1':'Receber emendas que aumentem despesa.',
  'pergunta_45_alternativa_2':'Ser discutidas em plenário.',
  'pergunta_45_alternativa_3':'Ser arquivadas.',
  'pergunta_45_alternativa_4':'Receber parecer de comissão.',
  'pergunta_45_resposta_correta':'Receber emendas que aumentem despesa.',
  'pergunta_45_justificativa':'É vedada a apresentação de emendas que aumentem despesa em proposições de iniciativa exclusiva do Executivo.',

  //----------------------------------
  'pergunta_46':'O projeto de decreto legislativo destina-se a:',
  'pergunta_46_alternativa_1':'Regular matérias de competência exclusiva da Câmara.',
  'pergunta_46_alternativa_2':'Ser sancionado pelo Prefeito.',
  'pergunta_46_alternativa_3':'Alterar a Lei Orgânica.',
  'pergunta_46_alternativa_4':'Criar cargos públicos.',
  'pergunta_46_resposta_correta':'Regular matérias de competência exclusiva da Câmara.',
  'pergunta_46_justificativa':'Projetos de decreto legislativo tratam de matérias internas ou exclusivas do Legislativo.',

  //----------------------------------
  'pergunta_47':'As moções são proposições que visam:',
  'pergunta_47_alternativa_1':'Apenas alterar leis.',
  'pergunta_47_alternativa_2':'Expressar posicionamento da Câmara sobre determinado assunto.',
  'pergunta_47_alternativa_3':'Criar novas comissões.',
  'pergunta_47_alternativa_4':'Regulamentar o regimento interno.',
  'pergunta_47_resposta_correta':'Expressar posicionamento da Câmara sobre determinado assunto.',
  'pergunta_47_justificativa':'As moções servem para manifestar apoio, repúdio ou pesar, entre outros',


  //----------------------------------
  'pergunta_48':'Durante a discussão de uma proposição, o vereador pode usar a palavra:',
  'pergunta_48_alternativa_1':'Por tempo ilimitado.',
  'pergunta_48_alternativa_2':'Por até 10 minutos, prorrogáveis uma vez pelo Presidente.',
  'pergunta_48_alternativa_3':'Somente mediante requerimento escrito.',
  'pergunta_48_alternativa_4':'Apenas com autorização do Prefeito.',
  'pergunta_48_resposta_correta':'Por até 10 minutos, prorrogáveis uma vez pelo Presidente.',
  'pergunta_48_justificativa':'O Regimento estabelece limite de 10 minutos por vereador na discussão de cada proposição.',

  //----------------------------------
  'pergunta_49':'O prazo para o contribuinte examinar as contas apresentadas pelo Prefeito é de:',
  'pergunta_49_alternativa_1':'30 dias.',
  'pergunta_49_alternativa_2':'45 dias.',
  'pergunta_49_alternativa_3':'60 dias.',
  'pergunta_49_alternativa_4':'90 dias.',
  'pergunta_49_resposta_correta':'60 dias.',
  'pergunta_49_justificativa':'Após publicação de edital, o contribuinte tem 60 dias para examinar e apresentar questionamentos às contas.',

  //----------------------------------
  'pergunta_50':'Compete à Câmara Municipal, conforme o Regimento Interno:',
  'pergunta_50_alternativa_1':'Julgar as contas do Prefeito e da Mesa da Câmara.',
  'pergunta_50_alternativa_2':'Executar diretamente as leis municipais.',
  'pergunta_50_alternativa_3':'Representar o Município em juízo.',
  'pergunta_50_alternativa_4':'Fiscalizar apenas obras públicas.',
  'pergunta_50_resposta_correta':'Julgar as contas do Prefeito e da Mesa da Câmara.',
  'pergunta_50_justificativa':'O art. 216 e seguintes dispõem que cabe à Câmara deliberar sobre as contas do Prefeito e da própria Mesa.',
}
}
