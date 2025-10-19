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
  // (...continua até pergunta_50, mantendo o mesmo padrão)
}
