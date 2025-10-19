const perguntas = {
  
  'pergunta_1':'O controle externo da Câmara Municipal de Caxias do Sul terá o auxílio do Tribunal de Contas do Estado do Rio Grande do Sul, por meio de parecer prévio. Sobre o julgamento das contas do Prefeito: I - A Câmara julgará as contas com base em processo iniciado a partir do parecer prévio do TCE. II - A Câmara tem prazo improrrogável de 60 dias, a partir do recebimento do parecer do TCE, para analisar e julgar as contas. III - O parecer prévio somente poderá ser rejeitado por decisão de 2/3 dos membros da Câmara. IV - Esgotado o prazo do art. 217, as contas vão a Plenário para apreciação. V - O contribuinte possui prazo de 60 dias para impugnar as contas diretamente na Câmara.',
  'pergunta_1_alternativa_1':'Se corretas I, III e IV.',
  'pergunta_1_alternativa_2':'Se corretas I, II, III e IV.',
  'pergunta_1_alternativa_3':'Se corretas I e V.',
  'pergunta_1_alternativa_4':'Se corretas I, II, III, IV e V.',
  'pergunta_1_resposta_correta':'Se corretas I, III e IV.',
  'pergunta_1_justificativa':'Arts. 216, 217 e 218 — o prazo de 60 dias (art. 217) conta do recebimento do parecer do TCE; não há previsão de “impugnação por contribuinte” no Regimento.',


  //----------------------------------
  'pergunta_2':'Sobre a Sessão Solene de Instalação da Legislatura: I - O vereador mais idoso preside a Sessão Solene de Instalação. II - Prestado o compromisso, o Presidente declara empossados Prefeito, Vice e Vereadores. III - Após a posse, a Sessão pode ser suspensa por até 180 minutos para tratativas da composição e eleição da Mesa Diretora. IV - Reabertos os trabalhos, procede-se à eleição e posse da Mesa Diretora. V - A indicação de Líderes e Vice-Líderes deve ser encaminhada ao Presidente da Sessão Solene por documento subscrito pela maioria da bancada.',
  'pergunta_2_alternativa_1':'Se corretas I, II e IV.',
  'pergunta_2_alternativa_2':'Se corretas I, II, III e IV.',
  'pergunta_2_alternativa_3':'Se corretas I, II, III, IV e V.',
  'pergunta_2_alternativa_4':'Se corretas II, III e V.',
  'pergunta_2_resposta_correta':'Se corretas I, II, III, IV e V.',
  'pergunta_2_justificativa':'Art. 6º, §§ 1º a 9º — regra de presidência por vereador mais idoso, posse, suspensão por até 180 min, eleição e indicação de líderes.',


  //----------------------------------
  'pergunta_3':'Quanto às funções da Câmara Municipal previstas no Regimento Interno, assinale a alternativa CORRETA.',
  'pergunta_3_alternativa_1':'A Câmara tem apenas função legislativa e de fiscalização financeira.',
  'pergunta_3_alternativa_2':'A Câmara exerce funções legislativa, de fiscalização e controle externo, de julgamento, de assessoramento e administrativa interna.',
  'pergunta_3_alternativa_3':'A Câmara não exerce função de julgamento.',
  'pergunta_3_alternativa_4':'A função administrativa da Câmara alcança toda a Administração Municipal.',
  'pergunta_3_resposta_correta':'A Câmara exerce funções legislativa, de fiscalização e controle externo, de julgamento, de assessoramento e administrativa interna.',
  'pergunta_3_justificativa':'Art. 5º, caput e §§ 1º a 5º — enumeração das funções e seus limites.',


  //----------------------------------
  'pergunta_4':'Sobre a composição da Mesa Diretora, assinale a correta.',
  'pergunta_4_alternativa_1':'Presidente, 1º Secretário e 2º Secretário.',
  'pergunta_4_alternativa_2':'Presidente, 1º Vice-Presidente, 1º Secretário e 2º Secretário.',
  'pergunta_4_alternativa_3':'Presidente, 1º Vice-Presidente, 2º Vice-Presidente, 1º Secretário e 2º Secretário.',
  'pergunta_4_alternativa_4':'Presidente e dois Secretários.',
  'pergunta_4_resposta_correta':'Presidente, 1º Vice-Presidente, 2º Vice-Presidente, 1º Secretário e 2º Secretário.',
  'pergunta_4_justificativa':'Art. 10 — composição da Mesa.',


  //----------------------------------
  'pergunta_5':'Sobre o mandato e a vacância na Mesa Diretora, assinale a alternativa CORRETA.',
  'pergunta_5_alternativa_1':'O mandato é de 2 anos, sem reeleição.',
  'pergunta_5_alternativa_2':'O mandato é de 1 ano, com uma única reeleição possível.',
  'pergunta_5_alternativa_3':'O mandato é de 1 ano, sem reeleição.',
  'pergunta_5_alternativa_4':'O mandato é de 2 anos, com reeleição ilimitada.',
  'pergunta_5_resposta_correta':'O mandato é de 1 ano, com uma única reeleição possível.',
  'pergunta_5_justificativa':'Art. 10, § 1º — duração do mandato e reeleição.',


  //----------------------------------
  'pergunta_6':'Na ausência do Presidente da Câmara, a substituição em caráter interino observa a seguinte ordem:',
  'pergunta_6_alternativa_1':'1º Secretário, 2º Secretário, 1º Vice-Presidente, 2º Vice-Presidente.',
  'pergunta_6_alternativa_2':'1º Vice-Presidente, 2º Vice-Presidente, 1º Secretário e 2º Secretário.',
  'pergunta_6_alternativa_3':'2º Vice-Presidente, 1º Vice-Presidente, 1º Secretário, 2º Secretário.',
  'pergunta_6_alternativa_4':'2º Secretário, 1º Secretário, 2º Vice-Presidente, 1º Vice-Presidente.',
  'pergunta_6_resposta_correta':'1º Vice-Presidente, 2º Vice-Presidente, 1º Secretário e 2º Secretário.',
  'pergunta_6_justificativa':'Art. 10, § 2º — ordem de substituição.',


  //----------------------------------
  'pergunta_7':'As Sessões Ordinárias compõem-se, na ordem, de:',
  'pergunta_7_alternativa_1':'Ordem do Dia, Pequenas Comunicações, Grande Expediente e Pequeno Expediente.',
  'pergunta_7_alternativa_2':'Pequenas Comunicações, Grande Expediente, Ordem do Dia e Pequeno Expediente.',
  'pergunta_7_alternativa_3':'Grande Expediente, Pequenas Comunicações, Ordem do Dia e Pequeno Expediente.',
  'pergunta_7_alternativa_4':'Pequenas Comunicações, Ordem do Dia, Grande Expediente e Pequeno Expediente.',
  'pergunta_7_resposta_correta':'Pequenas Comunicações, Grande Expediente, Ordem do Dia e Pequeno Expediente.',
  'pergunta_7_justificativa':'Art. 106, incisos I a IV — sequência das partes da Sessão Ordinária.',


  //----------------------------------
  'pergunta_8':'Sobre a Tribuna Livre, assinale a alternativa CORRETA.',
  'pergunta_8_alternativa_1':'Realiza-se semanalmente, por 30 minutos, antes do Grande Expediente.',
  'pergunta_8_alternativa_2':'Realiza-se quinzenalmente, por 20 minutos, após as Pequenas Comunicações da última Sessão Ordinária.',
  'pergunta_8_alternativa_3':'Somente cidadãos individualmente podem falar, por inscrição no protocolo.',
  'pergunta_8_alternativa_4':'Pode ser usada ilimitadamente por uma mesma instituição no mesmo ano legislativo.',
  'pergunta_8_resposta_correta':'Realiza-se quinzenalmente, por 20 minutos, após as Pequenas Comunicações da última Sessão Ordinária.',
  'pergunta_8_justificativa':'Art. 109, caput — periodicidade, duração e posicionamento na sessão.',


  //----------------------------------
  'pergunta_9':'Entidades que podem utilizar a Tribuna Livre incluem:',
  'pergunta_9_alternativa_1':'Clubes de serviço, entidades beneficentes, fundações, associações e órgãos públicos municipais.',
  'pergunta_9_alternativa_2':'Apenas associações e cidadãos individualmente.',
  'pergunta_9_alternativa_3':'Somente órgãos do Executivo Municipal.',
  'pergunta_9_alternativa_4':'Somente entidades religiosas.',
  'pergunta_9_resposta_correta':'Clubes de serviço, entidades beneficentes, fundações, associações e órgãos públicos municipais.',
  'pergunta_9_justificativa':'Art. 109, § 1º, I a V — rol de legitimados.',


  //----------------------------------
  'pergunta_10':'Quanto à Ordem do Dia, assinale a alternativa CORRETA.',
  'pergunta_10_alternativa_1':'É fase da Sessão destinada apenas a comunicações dos vereadores.',
  'pergunta_10_alternativa_2':'Constitui-se de matérias sobre as quais a Câmara se manifesta por voto.',
  'pergunta_10_alternativa_3':'Não admite inversão de pauta.',
  'pergunta_10_alternativa_4':'Não admite pedido de vista.',
  'pergunta_10_resposta_correta':'Constitui-se de matérias sobre as quais a Câmara se manifesta por voto.',
  'pergunta_10_justificativa':'Art. 115 — conceito da Ordem do Dia.',


  //----------------------------------
  'pergunta_11':'A pauta da Ordem do Dia é organizada e distribuída na seguinte ordem:',
  'pergunta_11_alternativa_1':'Veto; primeira discussão; segunda discussão; redação final; discussões reabertas.',
  'pergunta_11_alternativa_2':'Discussão única; primeira discussão; segunda discussão; veto; redação final.',
  'pergunta_11_alternativa_3':'Veto; reabertura de discussão única; discussão única; reabertura de primeira; primeira; reabertura de segunda; segunda; discussão única de redação final.',
  'pergunta_11_alternativa_4':'Ordem livre estabelecida pelo Presidente sem critérios.',
  'pergunta_11_resposta_correta':'Veto; reabertura de discussão única; discussão única; reabertura de primeira; primeira; reabertura de segunda; segunda; discussão única de redação final.',
  'pergunta_11_justificativa':'Art. 116, incisos I a VIII — ordem de distribuição na pauta.',


  //----------------------------------
  'pergunta_12':'A Ordem do Dia só pode ser interrompida/alterada para:',
  'pergunta_12_alternativa_1':'Inclusão de Urgência, retirada de proposição ou inversão de pauta.',
  'pergunta_12_alternativa_2':'Manifestação de vereador por questão pessoal.',
  'pergunta_12_alternativa_3':'Homenagem a visitantes.',
  'pergunta_12_alternativa_4':'Debates temáticos sem votação.',
  'pergunta_12_resposta_correta':'Inclusão de Urgência, retirada de proposição ou inversão de pauta.',
  'pergunta_12_justificativa':'Art. 117, I a III — hipóteses de alteração/interrupção.',


  //----------------------------------
  'pergunta_13':'Sobre o Pedido de Vista na Ordem do Dia, assinale a CORRETA.',
  'pergunta_13_alternativa_1':'É formulado verbalmente e por prazo indeterminado.',
  'pergunta_13_alternativa_2':'É formulado por requerimento escrito, na primeira discussão, por prazo determinado, até 15 dias.',
  'pergunta_13_alternativa_3':'Somente o Presidente pode solicitar vista.',
  'pergunta_13_alternativa_4':'Pode ser apresentado após iniciada a votação.',
  'pergunta_13_resposta_correta':'É formulado por requerimento escrito, na primeira discussão, por prazo determinado, até 15 dias.',
  'pergunta_13_justificativa':'Art. 120, caput — forma, fase e prazo máximo.',


  //----------------------------------
  'pergunta_14':'Quanto ao adiamento de votação na Ordem do Dia, é CORRETO afirmar:',
  'pergunta_14_alternativa_1':'Admite-se mesmo após a votação de alguma peça do processo.',
  'pergunta_14_alternativa_2':'Somente pode ser concedido uma vez para cada vereador.',
  'pergunta_14_alternativa_3':'Requer votação unânime.',
  'pergunta_14_alternativa_4':'Não há necessidade de prazo.',
  'pergunta_14_resposta_correta':'Somente pode ser concedido uma vez para cada vereador.',
  'pergunta_14_justificativa':'Art. 121, § 4º — limitação do adiamento.',


  //----------------------------------
  'pergunta_15':'Sobre a retirada de proposição constante da Ordem do Dia:',
  'pergunta_15_alternativa_1':'Depende sempre de deliberação do Plenário.',
  'pergunta_15_alternativa_2':'Dá-se por requerimento escrito do autor; se for de Mesa ou Comissão, precisa da maioria de seus membros.',
  'pergunta_15_alternativa_3':'É vedada após inclusão em pauta.',
  'pergunta_15_alternativa_4':'Somente o Presidente pode requerer.',
  'pergunta_15_resposta_correta':'Dá-se por requerimento escrito do autor; se for de Mesa ou Comissão, precisa da maioria de seus membros.',
  'pergunta_15_justificativa':'Art. 122, caput e parágrafo único — regras de retirada.',


  //----------------------------------
  'pergunta_16':'No Pequeno Expediente, a regra de início e uso da palavra é:',
  'pergunta_16_alternativa_1':'Inicia-se com qualquer quórum e fala livre de 10 minutos.',
  'pergunta_16_alternativa_2':'Inicia-se se presente ao menos 1/3 dos vereadores e cada um fala por até 5 minutos.',
  'pergunta_16_alternativa_3':'Início depende de maioria absoluta e fala de 2 minutos.',
  'pergunta_16_alternativa_4':'Início automático ao fim da Ordem do Dia, sem quórum mínimo.',
  'pergunta_16_resposta_correta':'Inicia-se se presente ao menos 1/3 dos vereadores e cada um fala por até 5 minutos.',
  'pergunta_16_justificativa':'Art. 124 e art. 125 — quórum e tempo de fala.',


  //----------------------------------
  'pergunta_17':'Quanto ao expediente disponibilizado no site da Câmara durante Sessões Ordinárias:',
  'pergunta_17_alternativa_1':'As proposições dos vereadores podem ser protocoladas até 1 hora antes do início.',
  'pergunta_17_alternativa_2':'Devem ser protocoladas com 48 horas de antecedência.',
  'pergunta_17_alternativa_3':'Somente o Executivo pode encaminhar documentos.',
  'pergunta_17_alternativa_4':'A ordem do expediente é livre.',
  'pergunta_17_resposta_correta':'As proposições dos vereadores podem ser protocoladas até 1 hora antes do início.',
  'pergunta_17_justificativa':'Art. 108, § 1º — prazo mínimo para protocolo.',


  //----------------------------------
  'pergunta_18':'Sobre a participação de entidades na Tribuna Livre da segunda quinzena:',
  'pergunta_18_alternativa_1':'A inscrição é por requerimento de vereador em discussão única.',
  'pergunta_18_alternativa_2':'As entidades legitimadas inscrevem-se em livro próprio na Secretaria Legislativa.',
  'pergunta_18_alternativa_3':'É vedada a participação de órgãos públicos.',
  'pergunta_18_alternativa_4':'Necessita aprovação por 2/3 do Plenário.',
  'pergunta_18_resposta_correta':'As entidades legitimadas inscrevem-se em livro próprio na Secretaria Legislativa.',
  'pergunta_18_justificativa':'Art. 109, § 3º — procedimento de inscrição.',


  //----------------------------------
  'pergunta_19':'Cada instituição pode usar a Tribuna Livre, por ano legislativo:',
  'pergunta_19_alternativa_1':'Ilimitadamente.',
  'pergunta_19_alternativa_2':'No máximo duas vezes.',
  'pergunta_19_alternativa_3':'Uma única vez.',
  'pergunta_19_alternativa_4':'Somente se tiver utilidade pública.',
  'pergunta_19_resposta_correta':'Uma única vez.',
  'pergunta_19_justificativa':'Art. 109, § 5º — limitação anual.',


  //----------------------------------
  'pergunta_20':'A pauta da Ordem do Dia pode sofrer Inversão de Pauta mediante:',
  'pergunta_20_alternativa_1':'Solicitação verbal devidamente fundamentada.',
  'pergunta_20_alternativa_2':'Requerimento escrito do Prefeito.',
  'pergunta_20_alternativa_3':'Ato unilateral do Presidente, sem justificativa.',
  'pergunta_20_alternativa_4':'Pedido de qualquer cidadão.',
  'pergunta_20_resposta_correta':'Solicitação verbal devidamente fundamentada.',
  'pergunta_20_justificativa':'Art. 118 — forma de inversão da pauta.',


  //----------------------------------
  'pergunta_21':'Constituídas as Comissões Permanentes, a eleição de seu Presidente dar-se-á:',
  'pergunta_21_alternativa_1':'Imediatamente, sob a presidência do mais jovem.',
  'pergunta_21_alternativa_2':'No prazo de 3 Sessões Legislativas Ordinárias, presidida pelo mais idoso presente.',
  'pergunta_21_alternativa_3':'Somente após indicação do Executivo.',
  'pergunta_21_alternativa_4':'Por votação secreta em Plenário.',
  'pergunta_21_resposta_correta':'No prazo de 3 Sessões Legislativas Ordinárias, presidida pelo mais idoso presente.',
  'pergunta_21_justificativa':'Art. 41, caput — prazo e condução da eleição.',


  //----------------------------------
  'pergunta_22':'A destituição de membro de Comissão Permanente por faltas ocorre quando:',
  'pergunta_22_alternativa_1':'Não comparece a 2 reuniões consecutivas.',
  'pergunta_22_alternativa_2':'Não comparece a 3 reuniões ordinárias consecutivas, salvo justificativa.',
  'pergunta_22_alternativa_3':'Falta a uma reunião sem justificativa.',
  'pergunta_22_alternativa_4':'Somente por decisão judicial.',
  'pergunta_22_resposta_correta':'Não comparece a 3 reuniões ordinárias consecutivas, salvo justificativa.',
  'pergunta_22_justificativa':'Art. 43, caput e §§ — regra de destituição e justificativa.',


  //----------------------------------
  'pergunta_23':'Poderão participar das Comissões Permanentes, como convidados:',
  'pergunta_23_alternativa_1':'Apenas vereadores suplentes.',
  'pergunta_23_alternativa_2':'Qualquer cidadão.',
  'pergunta_23_alternativa_3':'Técnicos de reconhecida competência ou representantes de entidades idôneas.',
  'pergunta_23_alternativa_4':'Somente servidores efetivos da Câmara.',
  'pergunta_23_resposta_correta':'Técnicos de reconhecida competência ou representantes de entidades idôneas.',
  'pergunta_23_justificativa':'Art. 44, caput e parágrafo único — convidados e forma do convite.',


  //----------------------------------
  'pergunta_24':'Durante a Ordem do Dia, é permitido projetar:',
  'pergunta_24_alternativa_1':'Vídeos com áudio.',
  'pergunta_24_alternativa_2':'Apenas imagens estáticas, gráficos, quadros e tabelas, sem áudio, relativas à matéria.',
  'pergunta_24_alternativa_3':'Qualquer conteúdo multimídia.',
  'pergunta_24_alternativa_4':'Somente texto.',
  'pergunta_24_resposta_correta':'Apenas imagens estáticas, gráficos, quadros e tabelas, sem áudio, relativas à matéria.',
  'pergunta_24_justificativa':'Art. 123, caput e parágrafo único — limites de projeção.',


  //----------------------------------
  'pergunta_25':'Sobre requerimentos sujeitos a despacho do Presidente (verbais), é CORRETO:',
  'pergunta_25_alternativa_1':'Retirada de moção ainda não deliberada pode ser pedida verbalmente.',
  'pergunta_25_alternativa_2':'Pedido de vista verbal é admitido.',
  'pergunta_25_alternativa_3':'Renúncia de membro da Mesa é verbal.',
  'pergunta_25_alternativa_4':'Nenhum requerimento pode ser verbal.',
  'pergunta_25_resposta_correta':'Retirada de moção ainda não deliberada pode ser pedida verbalmente.',
  'pergunta_25_justificativa':'Art. 172, V — requerimentos verbais sujeitos ao Presidente.',


  //----------------------------------
  'pergunta_26':'São requerimentos escritos sujeitos ao Presidente:',
  'pergunta_26_alternativa_1':'Requisição de documentos relacionados à proposição em discussão e renúncia de membro da Mesa.',
  'pergunta_26_alternativa_2':'Pedido de palavra pela ordem.',
  'pergunta_26_alternativa_3':'Pedido de verificação de quórum.',
  'pergunta_26_alternativa_4':'Permissão para falar sentado.',
  'pergunta_26_resposta_correta':'Requisição de documentos relacionados à proposição em discussão e renúncia de membro da Mesa.',
  'pergunta_26_justificativa':'Art. 173, I e II — exemplos de requerimentos escritos.',


  //----------------------------------
  'pergunta_27':'Na pauta, quando ocorre encerramento da sessão com inversão já concedida:',
  'pergunta_27_alternativa_1':'Perde-se a inversão.',
  'pergunta_27_alternativa_2':'A proposição figurará como primeiro item da Sessão Ordinária seguinte, após vetos.',
  'pergunta_27_alternativa_3':'Retorna ao fim da pauta.',
  'pergunta_27_alternativa_4':'Vai automaticamente a arquivo.',
  'pergunta_27_resposta_correta':'A proposição figurará como primeiro item da Sessão Ordinária seguinte, após vetos.',
  'pergunta_27_justificativa':'Art. 118, parágrafo único — efeito do encerramento sobre a inversão.',


  //----------------------------------
  'pergunta_28':'O Pedido de Vista na Ordem do Dia:',
  'pergunta_28_alternativa_1':'Admite vários pedidos simultâneos sem preferência.',
  'pergunta_28_alternativa_2':'Se houver dois ou mais, vota-se o de menor prazo.',
  'pergunta_28_alternativa_3':'Pode ser renovado indefinidamente pelo mesmo vereador.',
  'pergunta_28_alternativa_4':'Suspende todas as demais proposições da pauta.',
  'pergunta_28_resposta_correta':'Se houver dois ou mais, vota-se o de menor prazo.',
  'pergunta_28_justificativa':'Art. 120, § 2º — preferência ao menor prazo.',


  //----------------------------------
  'pergunta_29':'Esgotado o prazo de Vista/Adiamento e não devolvido o processo, o Presidente poderá:',
  'pergunta_29_alternativa_1':'Arquivar definitivamente.',
  'pergunta_29_alternativa_2':'Colocar em Ordem do Dia pela cópia.',
  'pergunta_29_alternativa_3':'Enviar ao Executivo.',
  'pergunta_29_alternativa_4':'Substituir o autor da proposição.',
  'pergunta_29_resposta_correta':'Colocar em Ordem do Dia pela cópia.',
  'pergunta_29_justificativa':'Art. 120, § 3º e art. 121, § 5º — inclusão pela cópia.',


  //----------------------------------
  'pergunta_30':'A Comissão de Desenvolvimento Econômico, Fiscalização e Controle Orçamentário (CDEFCOT), no processo orçamentário, deverá:',
  'pergunta_30_alternativa_1':'Em 20 dias realizar audiência pública quando necessário.',
  'pergunta_30_alternativa_2':'Emitir parecer em 5 dias após a audiência pública.',
  'pergunta_30_alternativa_3':'Ambas as anteriores.',
  'pergunta_30_alternativa_4':'Nenhuma das anteriores.',
  'pergunta_30_resposta_correta':'Ambas as anteriores.',
  'pergunta_30_justificativa':'Art. 214, §§ 2º e 3º (numeração do PDF p.61 antes do Cap. III) — prazos de audiência e parecer da CDEFCOT.',


  //----------------------------------
  'pergunta_31':'A concessão de Títulos Honoríficos (como Cidadão Caxiense) exige:',
  'pergunta_31_alternativa_1':'Aprovação unânime dos vereadores.',
  'pergunta_31_alternativa_2':'Subscrição mínima por 1/3 dos vereadores e biografia circunstanciada.',
  'pergunta_31_alternativa_3':'Iniciativa exclusiva do Prefeito.',
  'pergunta_31_alternativa_4':'Apenas despacho da Mesa.',
  'pergunta_31_resposta_correta':'Subscrição mínima por 1/3 dos vereadores e biografia circunstanciada.',
  'pergunta_31_justificativa':'Art. 214, parágrafo único — requisitos de instrução.',


  //----------------------------------
  'pergunta_32':'A entrega de títulos honoríficos ocorre:',
  'pergunta_32_alternativa_1':'Em Sessão Ordinária.',
  'pergunta_32_alternativa_2':'Em Sessão Extraordinária.',
  'pergunta_32_alternativa_3':'Em Sessão Solene, convocada unicamente para esse fim.',
  'pergunta_32_alternativa_4':'No expediente do Gabinete da Presidência.',
  'pergunta_32_resposta_correta':'Em Sessão Solene, convocada unicamente para esse fim.',
  'pergunta_32_justificativa':'Art. 215 — forma de entrega dos títulos.',


  //----------------------------------
  'pergunta_33':'Recebido o parecer prévio do TCE, a Câmara observará, dentre outros, que:',
  'pergunta_33_alternativa_1':'O parecer pode ser rejeitado por maioria simples.',
  'pergunta_33_alternativa_2':'O parecer somente poderá ser rejeitado por 2/3 dos membros.',
  'pergunta_33_alternativa_3':'O parecer é irrecorrível e irrevogável.',
  'pergunta_33_alternativa_4':'O parecer dispensa deliberação do Plenário.',
  'pergunta_33_resposta_correta':'O parecer somente poderá ser rejeitado por 2/3 dos membros.',
  'pergunta_33_justificativa':'Art. 218, I — quórum para rejeição do parecer do TCE.',


  //----------------------------------
  'pergunta_34':'Sobre a convocação e suspensão de Sessão pelo Presidente, assinale a correta.',
  'pergunta_34_alternativa_1':'O Presidente pode determinar a suspensão da Sessão nas hipóteses regimentais.',
  'pergunta_34_alternativa_2':'A suspensão de Sessão depende sempre de deliberação do Plenário.',
  'pergunta_34_alternativa_3':'O Presidente não pode suspender Sessão Solene.',
  'pergunta_34_alternativa_4':'A suspensão deve ser homologada pelo Prefeito.',
  'pergunta_34_resposta_correta':'O Presidente pode determinar a suspensão da Sessão nas hipóteses regimentais.',
  'pergunta_34_justificativa':'Índice remissivo (art. 20, II, “a” e “g”, e art. 194, IV) — competência do Presidente para suspensão.',


  //----------------------------------
  'pergunta_35':'Quanto ao início da Legislatura e posse dos eleitos, é CORRETO afirmar:',
  'pergunta_35_alternativa_1':'A instalação ocorre em 1º de janeiro do ano subsequente à eleição, salvo legislação superior.',
  'pergunta_35_alternativa_2':'A instalação ocorre sempre em 15 de janeiro.',
  'pergunta_35_alternativa_3':'A posse do Prefeito é posterior à posse da Mesa e não ocorre na mesma Sessão.',
  'pergunta_35_alternativa_4':'A instalação depende de maioria absoluta presente.',
  'pergunta_35_resposta_correta':'A instalação ocorre em 1º de janeiro do ano subsequente à eleição, salvo legislação superior.',
  'pergunta_35_justificativa':'Art. 6º, caput — data e natureza da Sessão Solene de Instalação.',


  //----------------------------------
  'pergunta_36':'O compromisso legal lido na posse dos eleitos é prestado:',
  'pergunta_36_alternativa_1':'Coletivamente, por representante da Câmara.',
  'pergunta_36_alternativa_2':'Individualmente, da tribuna, por Prefeito, Vice e Vereadores presentes.',
  'pergunta_36_alternativa_3':'Somente pelo Prefeito.',
  'pergunta_36_alternativa_4':'Apenas pelos vereadores.',
  'pergunta_36_resposta_correta':'Individualmente, da tribuna, por Prefeito, Vice e Vereadores presentes.',
  'pergunta_36_justificativa':'Art. 6º, § 3º — forma do compromisso.',


  //----------------------------------
  'pergunta_37':'O vereador que não prestou compromisso na Sessão Solene de Instalação:',
  'pergunta_37_alternativa_1':'Perde o mandato.',
  'pergunta_37_alternativa_2':'Prestará compromisso na primeira Sessão a que comparecer.',
  'pergunta_37_alternativa_3':'Somente poderá tomar posse por decisão judicial.',
  'pergunta_37_alternativa_4':'Prestará compromisso por escrito ao Presidente.',
  'pergunta_37_resposta_correta':'Prestará compromisso na primeira Sessão a que comparecer.',
  'pergunta_37_justificativa':'Art. 6º, § 5º — regra para compromisso posterior.',


  //----------------------------------
  'pergunta_38':'Quanto ao local das Sessões da Câmara:',
  'pergunta_38_alternativa_1':'Devem ocorrer sempre no Plenário, sem exceções.',
  'pergunta_38_alternativa_2':'Podem ocorrer em outro local, mediante resolução da Mesa ou aprovação da maioria absoluta, conforme o caso.',
  'pergunta_38_alternativa_3':'Podem ocorrer em qualquer local por ato do Prefeito.',
  'pergunta_38_alternativa_4':'Exige-se unanimidade dos vereadores para mudança.',
  'pergunta_38_resposta_correta':'Podem ocorrer em outro local, mediante resolução da Mesa ou aprovação da maioria absoluta, conforme o caso.',
  'pergunta_38_justificativa':'Art. 3º, §§ 1º e 2º — hipóteses de mudança do local.',


  //----------------------------------
  'pergunta_39':'Além dos atos parlamentares, no Plenário poderão ocorrer:',
  'pergunta_39_alternativa_1':'Somente reuniões partidárias fechadas.',
  'pergunta_39_alternativa_2':'Reuniões de caráter político, cultural ou de interesse da comunidade, com autorização prévia da Mesa.',
  'pergunta_39_alternativa_3':'Eventos particulares sem autorização.',
  'pergunta_39_alternativa_4':'Atos do Executivo sem comunicação.',
  'pergunta_39_resposta_correta':'Reuniões de caráter político, cultural ou de interesse da comunidade, com autorização prévia da Mesa.',
  'pergunta_39_justificativa':'Art. 4º — limitações de uso do Plenário.',


  //----------------------------------
  'pergunta_40':'A Mesa Diretora é:',
  'pergunta_40_alternativa_1':'Órgão consultivo do Executivo.',
  'pergunta_40_alternativa_2':'Órgão de direção dos trabalhos da Câmara.',
  'pergunta_40_alternativa_3':'Comissão temporária.',
  'pergunta_40_alternativa_4':'Frente parlamentar.',
  'pergunta_40_resposta_correta':'Órgão de direção dos trabalhos da Câmara.',
  'pergunta_40_justificativa':'Art. 9º — definição da Mesa.',


  //----------------------------------
  'pergunta_41':'No índice remissivo, a eleição da Mesa está associada aos artigos:',
  'pergunta_41_alternativa_1':'Arts. 10, 11 e 12.',
  'pergunta_41_alternativa_2':'Arts. 16, 17 e 40.',
  'pergunta_41_alternativa_3':'Arts. 18, 19 e 20.',
  'pergunta_41_alternativa_4':'Arts. 90, 92 e 94.',
  'pergunta_41_resposta_correta':'Arts. 16, 17 e 40.',
  'pergunta_41_justificativa':'Índice remissivo — remissão expressa para eleição da Mesa.',


  //----------------------------------
  'pergunta_42':'Sobre o Pequeno Expediente, é correto afirmar:',
  'pergunta_42_alternativa_1':'Serve à livre manifestação do vereador, por até 5 minutos.',
  'pergunta_42_alternativa_2':'É fase para votação nominal.',
  'pergunta_42_alternativa_3':'É reservado a líderes de bancada.',
  'pergunta_42_alternativa_4':'Exige quórum de maioria absoluta.',
  'pergunta_42_resposta_correta':'Serve à livre manifestação do vereador, por até 5 minutos.',
  'pergunta_42_justificativa':'Art. 125 — finalidade e tempo do Pequeno Expediente.',


  //----------------------------------
  'pergunta_43':'Sobre a “Inversão de Pauta”, assinale a incorreta.',
  'pergunta_43_alternativa_1':'Exige solicitação verbal fundamentada.',
  'pergunta_43_alternativa_2':'Se a sessão encerrar, a proposição volta como primeiro item na seguinte.',
  'pergunta_43_alternativa_3':'Pode ser requerida por qualquer vereador.',
  'pergunta_43_alternativa_4':'Depende de despacho do Prefeito.',
  'pergunta_43_resposta_correta':'Depende de despacho do Prefeito.',
  'pergunta_43_justificativa':'Arts. 118 e parágrafo único — nada envolve despacho do Prefeito.',


  //----------------------------------
  'pergunta_44':'No âmbito das Comissões Permanentes, as atas das reuniões:',
  'pergunta_44_alternativa_1':'São dispensadas.',
  'pergunta_44_alternativa_2':'Devem ser lavradas e assinadas pelos membros presentes.',
  'pergunta_44_alternativa_3':'São lavradas apenas quando houver votação.',
  'pergunta_44_alternativa_4':'São sigilosas por padrão.',
  'pergunta_44_resposta_correta':'Devem ser lavradas e assinadas pelos membros presentes.',
  'pergunta_44_justificativa':'Art. 49, § 2º — lavratura e assinatura de atas (numeração no PDF indica § 2º em sequência de reuniões).',


  //----------------------------------
  'pergunta_45':'As reuniões das Comissões Permanentes:',
  'pergunta_45_alternativa_1':'Ocorrem em dias/horários informados à Mesa Diretora.',
  'pergunta_45_alternativa_2':'Devem ocorrer simultaneamente às Sessões Ordinárias.',
  'pergunta_45_alternativa_3':'Somente por convocação do Prefeito.',
  'pergunta_45_alternativa_4':'Não podem ter convidados.',
  'pergunta_45_resposta_correta':'Ocorrem em dias/horários informados à Mesa Diretora.',
  'pergunta_45_justificativa':'Art. 42 — periodicidade informada à Mesa.',


  //----------------------------------
  'pergunta_46':'Licença de membro de Comissão Permanente:',
  'pergunta_46_alternativa_1':'É irrelevante para composição.',
  'pergunta_46_alternativa_2':'O Presidente oficiará ao Líder da bancada para indicar novo representante em até 5 dias.',
  'pergunta_46_alternativa_3':'Exige eleição em Plenário para substituição.',
  'pergunta_46_alternativa_4':'Suspende a Comissão.',
  'pergunta_46_resposta_correta':'O Presidente oficiará ao Líder da bancada para indicar novo representante em até 5 dias.',
  'pergunta_46_justificativa':'Art. 40, § 2º — regra de substituição em caso de licença.',


  //----------------------------------
  'pergunta_47':'No processo de concessão de títulos honoríficos, a biografia da pessoa a ser homenageada:',
  'pergunta_47_alternativa_1':'É facultativa.',
  'pergunta_47_alternativa_2':'É requisito essencial e deve ser circunstanciada.',
  'pergunta_47_alternativa_3':'Pode ser apresentada após a votação.',
  'pergunta_47_alternativa_4':'É substituída por currículo resumido.',
  'pergunta_47_resposta_correta':'É requisito essencial e deve ser circunstanciada.',
  'pergunta_47_justificativa':'Art. 214, parágrafo único — exigência de biografia circunstanciada.',


  //----------------------------------
  'pergunta_48':'Sobre a redação final, na ordem da pauta:',
  'pergunta_48_alternativa_1':'Tem discussão única no final da sequência.',
  'pergunta_48_alternativa_2':'É discutida em segunda discussão.',
  'pergunta_48_alternativa_3':'Não integra a Ordem do Dia.',
  'pergunta_48_alternativa_4':'É votada antes de vetos.',
  'pergunta_48_resposta_correta':'Tem discussão única no final da sequência.',
  'pergunta_48_justificativa':'Art. 116, VIII — discussão única de parecer de redação final.',


  //----------------------------------
  'pergunta_49':'Sobre o conceito de requerimento no Regimento:',
  'pergunta_49_alternativa_1':'É todo pedido verbal ou escrito feito ao Presidente ou por seu intermédio, por vereador ou comissão.',
  'pergunta_49_alternativa_2':'É apenas pedido escrito ao Prefeito.',
  'pergunta_49_alternativa_3':'É sempre deliberado pelo Plenário.',
  'pergunta_49_alternativa_4':'É exclusivo das Comissões.',
  'pergunta_49_resposta_correta':'É todo pedido verbal ou escrito feito ao Presidente ou por seu intermédio, por vereador ou comissão.',
  'pergunta_49_justificativa':'Art. 171 — conceito e legitimados do requerimento.',


  //----------------------------------
  'pergunta_50':'Sobre a finalidade do Grande Expediente, assinale a alternativa CORRETA.',
  'pergunta_50_alternativa_1':'Destina-se exclusivamente à votação de proposições.',
  'pergunta_50_alternativa_2':'Permite a cessão total ou parcial do tempo do vereador inscrito, mediante comunicação verbal à Mesa.',
  'pergunta_50_alternativa_3':'É reservado a líderes.',
  'pergunta_50_alternativa_4':'Não admite declarações de líder.',
  'pergunta_50_resposta_correta':'Permite a cessão total ou parcial do tempo do vereador inscrito, mediante comunicação verbal à Mesa.',
  'pergunta_50_justificativa':'Art. 114, caput e parágrafo único — cessão de tempo no Grande Expediente.',

  
  'pergunta_51':'De acordo com o art. 40 da Lei Orgânica do Município de Caxias do Sul, o Poder Legislativo é exercido por:',
  'pergunta_51_alternativa_1':'Câmara Municipal de Vereadores.',
  'pergunta_51_alternativa_2':'Assembleia Legislativa Municipal.',
  'pergunta_51_alternativa_3':'Prefeitura e Câmara, conjuntamente.',
  'pergunta_51_alternativa_4':'Poder Executivo e Judiciário municipais.',
  'pergunta_51_resposta_correta':'Câmara Municipal de Vereadores.',
  'pergunta_51_justificativa':'Conforme art. 40 da Lei Orgânica do Município de Caxias do Sul.',
  //----------------------------------
  'pergunta_52':'Quantos Vereadores compõem a Câmara Municipal de Caxias do Sul, conforme o art. 40?',
  'pergunta_52_alternativa_1':'19',
  'pergunta_52_alternativa_2':'21',
  'pergunta_52_alternativa_3':'23',
  'pergunta_52_alternativa_4':'25',
  'pergunta_52_resposta_correta':'21',
  'pergunta_52_justificativa':'De acordo com o parágrafo único do art. 40, a composição é de 21 vereadores.',
  //----------------------------------
  'pergunta_53':'Segundo o art. 41, a Câmara Municipal reunir-se-á anualmente:',
  'pergunta_53_alternativa_1':'De 1º de janeiro a 31 de dezembro.',
  'pergunta_53_alternativa_2':'De 1º de fevereiro a 15 de dezembro.',
  'pergunta_53_alternativa_3':'De 15 de janeiro a 15 de dezembro.',
  'pergunta_53_alternativa_4':'De 1º de março a 30 de novembro.',
  'pergunta_53_resposta_correta':'De 1º de fevereiro a 15 de dezembro.',
  'pergunta_53_justificativa':'Conforme redação do art. 41, dada pela Emenda nº 17/2000.',
  //----------------------------------
  'pergunta_54':'De acordo com o art. 42, a primeira sessão de cada legislatura será realizada:',
  'pergunta_54_alternativa_1':'No dia 1º de janeiro do ano subsequente à eleição.',
  'pergunta_54_alternativa_2':'No dia 1º de fevereiro do ano subsequente à eleição.',
  'pergunta_54_alternativa_3':'Na primeira segunda-feira do ano subsequente.',
  'pergunta_54_alternativa_4':'No último dia do ano da eleição.',
  'pergunta_54_resposta_correta':'No dia 1º de janeiro do ano subsequente à eleição.',
  'pergunta_54_justificativa':'Conforme art. 42 da Lei Orgânica.',
  //----------------------------------
  'pergunta_55':'O mandato dos membros da Mesa da Câmara é de:',
  'pergunta_55_alternativa_1':'Dois anos, vedada a recondução.',
  'pergunta_55_alternativa_2':'Um ano, permitida a recondução por igual período.',
  'pergunta_55_alternativa_3':'Dois anos, permitida recondução ilimitada.',
  'pergunta_55_alternativa_4':'Um ano, vedada a recondução.',
  'pergunta_55_resposta_correta':'Um ano, permitida a recondução por igual período.',
  'pergunta_55_justificativa':'Conforme parágrafo único do art. 42 da Lei Orgânica.',
  //----------------------------------
  'pergunta_56':'O Vereador que não tomar posse até 15 dias do início do funcionamento normal da Câmara:',
  'pergunta_56_alternativa_1':'Perderá o mandato, salvo motivo justo aceito pela maioria dos membros.',
  'pergunta_56_alternativa_2':'Poderá tomar posse até o final da legislatura.',
  'pergunta_56_alternativa_3':'Terá suspensos seus vencimentos, mas manterá o mandato.',
  'pergunta_56_alternativa_4':'Será automaticamente reconduzido ao cargo.',
  'pergunta_56_resposta_correta':'Perderá o mandato, salvo motivo justo aceito pela maioria dos membros.',
  'pergunta_56_justificativa':'Conforme art. 43 da Lei Orgânica.',
  //----------------------------------
  'pergunta_57':'Conforme o art. 44, no ato da posse e ao término do mandato, os Vereadores deverão:',
  'pergunta_57_alternativa_1':'Apresentar declaração de bens, a ser arquivada na Câmara.',
  'pergunta_57_alternativa_2':'Prestar juramento de sigilo funcional.',
  'pergunta_57_alternativa_3':'Protocolar relatório de atividades.',
  'pergunta_57_alternativa_4':'Entregar prestação de contas à Prefeitura.',
  'pergunta_57_resposta_correta':'Apresentar declaração de bens, a ser arquivada na Câmara.',
  'pergunta_57_justificativa':'Conforme art. 44 da Lei Orgânica.',
  //----------------------------------
  'pergunta_58':'Quem pode convocar extraordinariamente a Câmara Municipal, segundo o art. 45?',
  'pergunta_58_alternativa_1':'Somente o Prefeito.',
  'pergunta_58_alternativa_2':'O Prefeito, o Presidente da Câmara ou a maioria dos Vereadores.',
  'pergunta_58_alternativa_3':'Apenas o Presidente da Câmara.',
  'pergunta_58_alternativa_4':'O Tribunal de Contas e o Prefeito.',
  'pergunta_58_resposta_correta':'O Prefeito, o Presidente da Câmara ou a maioria dos Vereadores.',
  'pergunta_58_justificativa':'De acordo com o art. 45 da Lei Orgânica.',
  //----------------------------------
  'pergunta_59':'As sessões da Câmara serão públicas, salvo deliberação contrária tomada por:',
  'pergunta_59_alternativa_1':'Maioria simples.',
  'pergunta_59_alternativa_2':'Maioria absoluta.',
  'pergunta_59_alternativa_3':'Dois terços dos membros.',
  'pergunta_59_alternativa_4':'Unanimidade dos Vereadores.',
  'pergunta_59_resposta_correta':'Dois terços dos membros.',
  'pergunta_59_justificativa':'Conforme art. 47 da Lei Orgânica.',
  //----------------------------------
  'pergunta_60':'Qual o número mínimo de Vereadores necessário para abertura das sessões da Câmara?',
  'pergunta_60_alternativa_1':'Metade mais um dos membros.',
  'pergunta_60_alternativa_2':'Um terço dos membros.',
  'pergunta_60_alternativa_3':'Dois terços dos membros.',
  'pergunta_60_alternativa_4':'Maioria absoluta dos membros.',
  'pergunta_60_resposta_correta':'Um terço dos membros.',
  'pergunta_60_justificativa':'Conforme art. 48 da Lei Orgânica.',
  //----------------------------------
  'pergunta_61':'De acordo com o art. 51, a Mesa da Câmara é composta por:',
  'pergunta_61_alternativa_1':'Presidente, Vice-Presidente e Secretário.',
  'pergunta_61_alternativa_2':'Presidente, dois Vice-Presidentes e dois Secretários.',
  'pergunta_61_alternativa_3':'Presidente, Vice-Presidente e três Secretários.',
  'pergunta_61_alternativa_4':'Presidente, dois Vice-Presidentes e um Secretário.',
  'pergunta_61_resposta_correta':'Presidente, dois Vice-Presidentes e dois Secretários.',
  'pergunta_61_justificativa':'Conforme art. 51 da Lei Orgânica.',
  //----------------------------------
  'pergunta_62':'Compete ao Presidente da Câmara, dentre outras atribuições:',
  'pergunta_62_alternativa_1':'Representar a Câmara em juízo e fora dele.',
  'pergunta_62_alternativa_2':'Julgar as contas do Prefeito.',
  'pergunta_62_alternativa_3':'Criar comissões parlamentares.',
  'pergunta_62_alternativa_4':'Elaborar leis complementares.',
  'pergunta_62_resposta_correta':'Representar a Câmara em juízo e fora dele.',
  'pergunta_62_justificativa':'Conforme art. 53, inciso I, da Lei Orgânica.',
  //----------------------------------
  'pergunta_63':'É vedado ao Vereador, desde a expedição do diploma:',
  'pergunta_63_alternativa_1':'Firmar contrato com pessoa jurídica de direito público, salvo cláusulas uniformes.',
  'pergunta_63_alternativa_2':'Exercer mandato em mais de um município.',
  'pergunta_63_alternativa_3':'Representar partido político em atos públicos.',
  'pergunta_63_alternativa_4':'Aceitar cargo em comissão municipal.',
  'pergunta_63_resposta_correta':'Firmar contrato com pessoa jurídica de direito público, salvo cláusulas uniformes.',
  'pergunta_63_justificativa':'De acordo com art. 55, I, alínea “a”.',
  //----------------------------------
  'pergunta_64':'A perda do mandato do Vereador por decoro parlamentar será decidida:',
  'pergunta_64_alternativa_1':'Pela Justiça Eleitoral.',
  'pergunta_64_alternativa_2':'Pela Câmara, por maioria absoluta.',
  'pergunta_64_alternativa_3':'Pelo Prefeito.',
  'pergunta_64_alternativa_4':'Pelo Tribunal de Contas.',
  'pergunta_64_resposta_correta':'Pela Câmara, por maioria absoluta.',
  'pergunta_64_justificativa':'Conforme art. 56, §1º, da Lei Orgânica.',
  //----------------------------------
  'pergunta_65':'Não perde o mandato o Vereador que:',
  'pergunta_65_alternativa_1':'Assumir cargo de Secretário Municipal, afastando-se da vereança.',
  'pergunta_65_alternativa_2':'Exercer cargo em empresa pública municipal.',
  'pergunta_65_alternativa_3':'Aceitar emprego na iniciativa privada.',
  'pergunta_65_alternativa_4':'Deixar de comparecer a 1/3 das sessões sem justificativa.',
  'pergunta_65_resposta_correta':'Assumir cargo de Secretário Municipal, afastando-se da vereança.',
  'pergunta_65_justificativa':'Conforme art. 58 da Lei Orgânica.',
  //----------------------------------
//----------------------------------
  'pergunta_66':'Compete à Câmara Municipal, com a sanção do Prefeito, dispor sobre todas as matérias de competência do Município e, especialmente:',
  'pergunta_66_alternativa_1':'Instituir tributos e regular a arrecadação e aplicação das rendas municipais.',
  'pergunta_66_alternativa_2':'Elaborar o regimento interno do Tribunal de Contas.',
  'pergunta_66_alternativa_3':'Nomear diretores das secretarias municipais.',
  'pergunta_66_alternativa_4':'Fiscalizar obras estaduais no município.',
  'pergunta_66_resposta_correta':'Instituir tributos e regular a arrecadação e aplicação das rendas municipais.',
  'pergunta_66_justificativa':'Conforme art. 61, inciso I, da Lei Orgânica.',
  //----------------------------------
  'pergunta_67':'É competência privativa da Câmara Municipal, segundo o art. 62:',
  'pergunta_67_alternativa_1':'Tomar e julgar as contas do Prefeito.',
  'pergunta_67_alternativa_2':'Aprovar o orçamento estadual.',
  'pergunta_67_alternativa_3':'Emitir decretos executivos municipais.',
  'pergunta_67_alternativa_4':'Indicar servidores ao Executivo.',
  'pergunta_67_resposta_correta':'Tomar e julgar as contas do Prefeito.',
  'pergunta_67_justificativa':'Conforme art. 62, VIII, da Lei Orgânica.',
  //----------------------------------
  'pergunta_68':'Segundo o art. 62, inciso VIII, o parecer do Tribunal de Contas sobre as contas do Prefeito deixa de prevalecer por decisão de:',
  'pergunta_68_alternativa_1':'Maioria simples.',
  'pergunta_68_alternativa_2':'Maioria absoluta.',
  'pergunta_68_alternativa_3':'Dois terços dos membros da Câmara.',
  'pergunta_68_alternativa_4':'Unanimidade dos Vereadores.',
  'pergunta_68_resposta_correta':'Dois terços dos membros da Câmara.',
  'pergunta_68_justificativa':'Conforme art. 62, VIII, alínea “a”.',
  //----------------------------------
  'pergunta_69':'De acordo com o art. 63, durante o recesso da Câmara Municipal atuará:',
  'pergunta_69_alternativa_1':'Uma comissão representativa.',
  'pergunta_69_alternativa_2':'A Mesa Diretora.',
  'pergunta_69_alternativa_3':'O Conselho Municipal.',
  'pergunta_69_alternativa_4':'A Comissão de Orçamento e Finanças.',
  'pergunta_69_resposta_correta':'Uma comissão representativa.',
  'pergunta_69_justificativa':'Conforme art. 63 da Lei Orgânica.',
  //----------------------------------
  'pergunta_70':'A iniciativa das leis municipais, salvo casos de competência exclusiva, cabe:',
  'pergunta_70_alternativa_1':'A qualquer Vereador, ao Prefeito e ao eleitorado.',
  'pergunta_70_alternativa_2':'Somente ao Prefeito.',
  'pergunta_70_alternativa_3':'Aos secretários municipais.',
  'pergunta_70_alternativa_4':'Aos partidos políticos representados na Câmara.',
  'pergunta_70_resposta_correta':'A qualquer Vereador, ao Prefeito e ao eleitorado.',
  'pergunta_70_justificativa':'Conforme art. 66 da Lei Orgânica.',
  //----------------------------------
  'pergunta_71':'O projeto de lei de iniciativa popular deve ser subscrito por, no mínimo:',
  'pergunta_71_alternativa_1':'1% do total de eleitores do Município.',
  'pergunta_71_alternativa_2':'5% do total de eleitores do Município.',
  'pergunta_71_alternativa_3':'10% do total de eleitores do Município.',
  'pergunta_71_alternativa_4':'15% do total de eleitores do Município.',
  'pergunta_71_resposta_correta':'5% do total de eleitores do Município.',
  'pergunta_71_justificativa':'Conforme art. 66, caput.',
  //----------------------------------
  'pergunta_72':'Os projetos de iniciativa privativa do Prefeito são aqueles que dispõem sobre:',
  'pergunta_72_alternativa_1':'Criação de cargos e funções na administração pública.',
  'pergunta_72_alternativa_2':'Homenagens e títulos honoríficos.',
  'pergunta_72_alternativa_3':'Organização interna da Câmara.',
  'pergunta_72_alternativa_4':'Nomeação de comissões legislativas.',
  'pergunta_72_resposta_correta':'Criação de cargos e funções na administração pública.',
  'pergunta_72_justificativa':'Conforme art. 67, inciso I.',
  //----------------------------------
  'pergunta_73':'Segundo o art. 69, o Prefeito pode solicitar urgência na apreciação de projetos, devendo a Câmara manifestar-se em até:',
  'pergunta_73_alternativa_1':'15 dias.',
  'pergunta_73_alternativa_2':'20 dias.',
  'pergunta_73_alternativa_3':'30 dias.',
  'pergunta_73_alternativa_4':'60 dias.',
  'pergunta_73_resposta_correta':'30 dias.',
  'pergunta_73_justificativa':'Conforme art. 69, §1º.',
  //----------------------------------
  'pergunta_74':'As leis complementares municipais serão aprovadas por:',
  'pergunta_74_alternativa_1':'Maioria simples.',
  'pergunta_74_alternativa_2':'Maioria absoluta.',
  'pergunta_74_alternativa_3':'Dois terços dos Vereadores.',
  'pergunta_74_alternativa_4':'Unanimidade.',
  'pergunta_74_resposta_correta':'Maioria absoluta.',
  'pergunta_74_justificativa':'Conforme parágrafo único do art. 70.',
  //----------------------------------
  'pergunta_75':'O veto parcial do Prefeito somente abrangerá:',
  'pergunta_75_alternativa_1':'Palavras e expressões específicas.',
  'pergunta_75_alternativa_2':'Texto integral de artigo, parágrafo, inciso ou alínea.',
  'pergunta_75_alternativa_3':'Somente o caput do projeto.',
  'pergunta_75_alternativa_4':'Apenas os anexos do projeto.',
  'pergunta_75_resposta_correta':'Texto integral de artigo, parágrafo, inciso ou alínea.',
  'pergunta_75_justificativa':'Conforme art. 73, §2º.',
  //----------------------------------
  'pergunta_76':'O veto do Prefeito deve ser apreciado pela Câmara em até:',
  'pergunta_76_alternativa_1':'15 dias.',
  'pergunta_76_alternativa_2':'20 dias.',
  'pergunta_76_alternativa_3':'30 dias.',
  'pergunta_76_alternativa_4':'45 dias.',
  'pergunta_76_resposta_correta':'30 dias.',
  'pergunta_76_justificativa':'Conforme art. 73, §4º.',
  //----------------------------------
  'pergunta_77':'A Câmara de Vereadores tem comissões permanentes e temporárias constituídas:',
  'pergunta_77_alternativa_1':'Por livre escolha do Presidente.',
  'pergunta_77_alternativa_2':'Na forma e com as atribuições do Regimento Interno.',
  'pergunta_77_alternativa_3':'A critério do Prefeito.',
  'pergunta_77_alternativa_4':'Somente por indicação partidária.',
  'pergunta_77_resposta_correta':'Na forma e com as atribuições do Regimento Interno.',
  'pergunta_77_justificativa':'Conforme art. 75 da Lei Orgânica.',
  //----------------------------------
  'pergunta_78':'As Comissões Parlamentares de Inquérito podem ser criadas mediante requerimento de:',
  'pergunta_78_alternativa_1':'Um quarto dos Vereadores.',
  'pergunta_78_alternativa_2':'Um terço dos Vereadores.',
  'pergunta_78_alternativa_3':'Metade dos Vereadores.',
  'pergunta_78_alternativa_4':'Dois terços dos Vereadores.',
  'pergunta_78_resposta_correta':'Um terço dos Vereadores.',
  'pergunta_78_justificativa':'Conforme art. 76 da Lei Orgânica.',
  //----------------------------------
  'pergunta_79':'As deliberações da Câmara são tomadas por:',
  'pergunta_79_alternativa_1':'Maioria simples.',
  'pergunta_79_alternativa_2':'Maioria absoluta.',
  'pergunta_79_alternativa_3':'Dois terços dos votos.',
  'pergunta_79_alternativa_4':'Unanimidade.',
  'pergunta_79_resposta_correta':'Maioria simples.',
  'pergunta_79_justificativa':'Conforme art. 77, caput.',
  //----------------------------------
  'pergunta_80':'Dependem do voto favorável de dois terços dos Vereadores:',
  'pergunta_80_alternativa_1':'Emendas à Lei Orgânica e rejeição do parecer prévio do Tribunal de Contas.',
  'pergunta_80_alternativa_2':'Projetos de decreto legislativo.',
  'pergunta_80_alternativa_3':'Leis ordinárias.',
  'pergunta_80_alternativa_4':'Moções de aplauso.',
  'pergunta_80_resposta_correta':'Emendas à Lei Orgânica e rejeição do parecer prévio do Tribunal de Contas.',
  'pergunta_80_justificativa':'Conforme art. 77, §2º.',
  //----------------------------------
  'pergunta_81':'O Presidente da Câmara só tem voto:',
  'pergunta_81_alternativa_1':'Nas eleições da Mesa, votações secretas e em caso de empate.',
  'pergunta_81_alternativa_2':'Somente em votações nominais.',
  'pergunta_81_alternativa_3':'Sempre que desejar manifestar-se.',
  'pergunta_81_alternativa_4':'Apenas em projetos de lei.',
  'pergunta_81_resposta_correta':'Nas eleições da Mesa, votações secretas e em caso de empate.',
  'pergunta_81_justificativa':'Conforme art. 77, §3º.',
  //----------------------------------
  'pergunta_82':'A Câmara poderá retirar da Ordem do Dia, em caso de convocação extraordinária, projeto que não tiver tramitado por:',
  'pergunta_82_alternativa_1':'15 dias.',
  'pergunta_82_alternativa_2':'20 dias.',
  'pergunta_82_alternativa_3':'30 dias.',
  'pergunta_82_alternativa_4':'45 dias.',
  'pergunta_82_resposta_correta':'30 dias.',
  'pergunta_82_justificativa':'Conforme art. 79.',
  //----------------------------------
  'pergunta_83':'A remuneração do Prefeito, Vice-Prefeito e Vereadores será fixada:',
  'pergunta_83_alternativa_1':'Pela Câmara Municipal, para vigorar na mesma legislatura.',
  'pergunta_83_alternativa_2':'Pela Câmara Municipal, para a legislatura subsequente.',
  'pergunta_83_alternativa_3':'Pelo Tribunal de Contas do Estado.',
  'pergunta_83_alternativa_4':'Pelo Prefeito Municipal.',
  'pergunta_83_resposta_correta':'Pela Câmara Municipal, para a legislatura subsequente.',
  'pergunta_83_justificativa':'Conforme art. 80 da Lei Orgânica.',
  //----------------------------------
  'pergunta_84':'A fixação da remuneração dos agentes políticos deve ocorrer em data:',
  'pergunta_84_alternativa_1':'Posterior às eleições municipais.',
  'pergunta_84_alternativa_2':'Anterior às eleições para os respectivos cargos.',
  'pergunta_84_alternativa_3':'No início da legislatura.',
  'pergunta_84_alternativa_4':'Durante o recesso parlamentar.',
  'pergunta_84_resposta_correta':'Anterior às eleições para os respectivos cargos.',
  'pergunta_84_justificativa':'Conforme art. 80.',
  //----------------------------------
  'pergunta_85':'Inexistindo previsão de atualização da remuneração, aplicar-se-á:',
  'pergunta_85_alternativa_1':'O índice fixado pelo Prefeito.',
  'pergunta_85_alternativa_2':'O mesmo índice concedido ao funcionalismo público municipal.',
  'pergunta_85_alternativa_3':'A média do IPCA dos últimos 12 meses.',
  'pergunta_85_alternativa_4':'A variação cambial do período.',
  'pergunta_85_resposta_correta':'O mesmo índice concedido ao funcionalismo público municipal.',
  'pergunta_85_justificativa':'Conforme art. 81, parágrafo único.',
  //----------------------------------
  'pergunta_86':'O controle externo da Câmara Municipal é exercido com auxílio de qual órgão?',
  'pergunta_86_alternativa_1':'Controladoria-Geral do Município.',
  'pergunta_86_alternativa_2':'Tribunal de Contas do Estado do Rio Grande do Sul.',
  'pergunta_86_alternativa_3':'Ministério Público Estadual.',
  'pergunta_86_alternativa_4':'Secretaria da Fazenda.',
  'pergunta_86_resposta_correta':'Tribunal de Contas do Estado do Rio Grande do Sul.',
  'pergunta_86_justificativa':'Conforme art. 83 da Lei Orgânica.',
  //----------------------------------
  'pergunta_87':'As contas do Município devem ser apresentadas até quantos dias após o encerramento do exercício financeiro?',
  'pergunta_87_alternativa_1':'30 dias.',
  'pergunta_87_alternativa_2':'60 dias.',
  'pergunta_87_alternativa_3':'90 dias.',
  'pergunta_87_alternativa_4':'120 dias.',
  'pergunta_87_resposta_correta':'90 dias.',
  'pergunta_87_justificativa':'Conforme art. 83, §1º.',
  //----------------------------------
  'pergunta_88':'Se as contas não forem apresentadas no prazo, quem deverá fazê-lo em 30 dias?',
  'pergunta_88_alternativa_1':'O Prefeito.',
  'pergunta_88_alternativa_2':'A Comissão Permanente de Fiscalização e Controle Orçamentário.',
  'pergunta_88_alternativa_3':'O Tribunal de Contas.',
  'pergunta_88_alternativa_4':'A Mesa Diretora.',
  'pergunta_88_resposta_correta':'A Comissão Permanente de Fiscalização e Controle Orçamentário.',
  'pergunta_88_justificativa':'Conforme art. 83, §2º.',
  //----------------------------------
  'pergunta_89':'O contribuinte poderá examinar e questionar as contas apresentadas pelo prazo de:',
  'pergunta_89_alternativa_1':'30 dias.',
  'pergunta_89_alternativa_2':'45 dias.',
  'pergunta_89_alternativa_3':'60 dias.',
  'pergunta_89_alternativa_4':'90 dias.',
  'pergunta_89_resposta_correta':'60 dias.',
  'pergunta_89_justificativa':'Conforme art. 83, §3º.',
  //----------------------------------
  'pergunta_90':'Quem promulgará as leis com sanção tácita ou cujo veto tenha sido rejeitado e não promulgado pelo Prefeito?',
  'pergunta_90_alternativa_1':'O Vice-Prefeito.',
  'pergunta_90_alternativa_2':'O Presidente da Câmara.',
  'pergunta_90_alternativa_3':'O Tribunal de Contas.',
  'pergunta_90_alternativa_4':'O Procurador-Geral do Município.',
  'pergunta_90_resposta_correta':'O Presidente da Câmara.',
  'pergunta_90_justificativa':'Conforme art. 53, inciso IV.',
  //----------------------------------
  'pergunta_91':'As consultas referendárias e plebiscitárias serão formuladas em termos de:',
  'pergunta_91_alternativa_1':'Aprovação ou rejeição dos atos ou matérias.',
  'pergunta_91_alternativa_2':'Escolha entre propostas alternativas.',
  'pergunta_91_alternativa_3':'Sorteio público.',
  'pergunta_91_alternativa_4':'Nomeação de autoridades.',
  'pergunta_91_resposta_correta':'Aprovação ou rejeição dos atos ou matérias.',
  'pergunta_91_justificativa':'Conforme art. 72, parágrafo único.',
  //----------------------------------
  'pergunta_92':'O projeto rejeitado pela Câmara só poderá constituir objeto de novo projeto na mesma sessão legislativa mediante proposta de:',
  'pergunta_92_alternativa_1':'Maioria absoluta dos Vereadores.',
  'pergunta_92_alternativa_2':'Um terço dos Vereadores.',
  'pergunta_92_alternativa_3':'Dois terços dos Vereadores.',
  'pergunta_92_alternativa_4':'Unanimidade da Câmara.',
  'pergunta_92_resposta_correta':'Maioria absoluta dos Vereadores.',
  'pergunta_92_justificativa':'Conforme art. 74.',
  //----------------------------------
   //----------------------------------
  'pergunta_93':'Durante o recesso, a Comissão Representativa reúne-se:',
  'pergunta_93_alternativa_1':'Ordinariamente uma vez por semana, em dia e horário fixados no Regimento Interno.',
  'pergunta_93_alternativa_2':'A cada quinze dias.',
  'pergunta_93_alternativa_3':'Somente quando convocada pelo Prefeito.',
  'pergunta_93_alternativa_4':'Mensalmente, mediante autorização da Mesa.',
  'pergunta_93_resposta_correta':'Ordinariamente uma vez por semana, em dia e horário fixados no Regimento Interno.',
  'pergunta_93_justificativa':'Conforme art. 63, inciso I, da Lei Orgânica.',
  //----------------------------------
  'pergunta_94':'Compete à Comissão Representativa, dentre outras atribuições:',
  'pergunta_94_alternativa_1':'Zelar pelas prerrogativas do Poder Legislativo.',
  'pergunta_94_alternativa_2':'Nomear secretários municipais.',
  'pergunta_94_alternativa_3':'Votar o orçamento anual.',
  'pergunta_94_alternativa_4':'Julgar o Prefeito e o Vice-Prefeito.',
  'pergunta_94_resposta_correta':'Zelar pelas prerrogativas do Poder Legislativo.',
  'pergunta_94_justificativa':'Conforme art. 63, inciso II.',
  //----------------------------------
  'pergunta_95':'A iniciativa popular rejeitada pela Câmara poderá ser submetida a referendo se requerida por:',
  'pergunta_95_alternativa_1':'1% do eleitorado.',
  'pergunta_95_alternativa_2':'3% do eleitorado.',
  'pergunta_95_alternativa_3':'5% do eleitorado que tiver votado nas últimas eleições municipais.',
  'pergunta_95_alternativa_4':'10% do eleitorado do município.',
  'pergunta_95_resposta_correta':'5% do eleitorado que tiver votado nas últimas eleições municipais.',
  'pergunta_95_justificativa':'Conforme art. 71 da Lei Orgânica.',
  //----------------------------------
  'pergunta_96':'As Comissões da Câmara podem receber petições, reclamações e representações de qualquer pessoa contra atos ou omissões das autoridades públicas?',
  'pergunta_96_alternativa_1':'Sim, conforme previsto no art. 75, §2º, inciso IV.',
  'pergunta_96_alternativa_2':'Não, essa atribuição é exclusiva do Prefeito.',
  'pergunta_96_alternativa_3':'Apenas mediante autorização judicial.',
  'pergunta_96_alternativa_4':'Somente quando o Regimento Interno permitir expressamente.',
  'pergunta_96_resposta_correta':'Sim, conforme previsto no art. 75, §2º, inciso IV.',
  'pergunta_96_justificativa':'As comissões podem receber petições e reclamações contra autoridades, segundo a Lei Orgânica.',
  //----------------------------------
  'pergunta_97':'Conforme o art. 78, o Presidente da Câmara deverá incluir proposição na Ordem do Dia após quantos dias de seu recebimento, se houver requerimento de Vereadores?',
  'pergunta_97_alternativa_1':'15 dias.',
  'pergunta_97_alternativa_2':'30 dias.',
  'pergunta_97_alternativa_3':'45 dias.',
  'pergunta_97_alternativa_4':'60 dias.',
  'pergunta_97_resposta_correta':'45 dias.',
  'pergunta_97_justificativa':'Conforme art. 78 da Lei Orgânica.',
  //----------------------------------
  'pergunta_98':'As leis complementares municipais tratam, entre outros temas, de:',
  'pergunta_98_alternativa_1':'Código Tributário, Código de Obras e Plano Diretor de Desenvolvimento Integrado.',
  'pergunta_98_alternativa_2':'Atos administrativos internos da Câmara.',
  'pergunta_98_alternativa_3':'Regulamento das empresas públicas.',
  'pergunta_98_alternativa_4':'Regimento Interno da Prefeitura.',
  'pergunta_98_resposta_correta':'Código Tributário, Código de Obras e Plano Diretor de Desenvolvimento Integrado.',
  'pergunta_98_justificativa':'Conforme art. 70, incisos I a III.',
  //----------------------------------
  'pergunta_99':'O quórum de dois terços é exigido, entre outras hipóteses, para:',
  'pergunta_99_alternativa_1':'Conceder título de cidadão caxiense.',
  'pergunta_99_alternativa_2':'Aprovar leis ordinárias.',
  'pergunta_99_alternativa_3':'Aprovar o orçamento municipal.',
  'pergunta_99_alternativa_4':'Convocar secretários municipais.',
  'pergunta_99_resposta_correta':'Conceder título de cidadão caxiense.',
  'pergunta_99_justificativa':'Conforme art. 77, §2º, alínea “c”.',
  //----------------------------------
  'pergunta_100':'Quando o Presidente da Câmara não promulgar a lei no prazo de 48 horas, caberá fazê-lo:',
  'pergunta_100_alternativa_1':'Ao Vice-Presidente da Câmara.',
  'pergunta_100_alternativa_2':'Ao Prefeito.',
  'pergunta_100_alternativa_3':'Ao Tribunal de Contas.',
  'pergunta_100_alternativa_4':'À Mesa Diretora.',
  'pergunta_100_resposta_correta':'Ao Vice-Presidente da Câmara.',
  'pergunta_100_justificativa':'Conforme art. 73, §7º da Lei Orgânica.',



  'pergunta_101': 'Sobre os conceitos básicos do Estatuto, assinale a alternativa correta:',
  'pergunta_101_alternativa_1': 'Servidor é a pessoa legalmente investida em cargo público.',
  'pergunta_101_alternativa_2': 'Servidor é toda pessoa que presta serviço ao Município, com ou sem vínculo jurídico.',
  'pergunta_101_alternativa_3': 'Servidor é a pessoa contratada temporariamente para função pública.',
  'pergunta_101_alternativa_4': 'Servidor é exclusivamente o ocupante de cargo em comissão.',
  'pergunta_101_resposta_correta': 'Servidor é a pessoa legalmente investida em cargo público.',
  'pergunta_101_justificativa': 'Art. 2º',


  'pergunta_102': 'De acordo com o Estatuto, cargo público é:',
  'pergunta_102_alternativa_1': 'O criado por lei, em número certo, remunerado pelos cofres municipais, ao qual corresponde um conjunto de atribuições e responsabilidades.',
  'pergunta_102_alternativa_2': 'Toda função desempenhada no Município, ainda que sem criação legal.',
  'pergunta_102_alternativa_3': 'A função temporária exercida por necessidade do serviço.',
  'pergunta_102_alternativa_4': 'Qualquer posto de trabalho remunerado, ainda que privado.',
  'pergunta_102_resposta_correta': 'O criado por lei, em número certo, remunerado pelos cofres municipais, ao qual corresponde um conjunto de atribuições e responsabilidades.',
  'pergunta_102_justificativa': 'Art. 3º, caput',


  'pergunta_103': 'A investidura em cargo público depende de:',
  'pergunta_103_alternativa_1': 'Aprovação prévia em concurso público de provas ou de provas e títulos, ressalvadas as nomeações para cargos em comissão.',
  'pergunta_103_alternativa_2': 'Indicação política e aprovação da Câmara Municipal.',
  'pergunta_103_alternativa_3': 'Apenas exame psicológico.',
  'pergunta_103_alternativa_4': 'Somente entrevista com o órgão de pessoal.',
  'pergunta_103_resposta_correta': 'Aprovação prévia em concurso público de provas ou de provas e títulos, ressalvadas as nomeações para cargos em comissão.',
  'pergunta_103_justificativa': 'Art. 4º',


  'pergunta_104': 'Os cargos públicos municipais são acessíveis a:',
  'pergunta_104_alternativa_1': 'Todos os brasileiros, preenchidos os requisitos que a lei estabelecer.',
  'pergunta_104_alternativa_2': 'Apenas aos brasileiros natos com ensino superior.',
  'pergunta_104_alternativa_3': 'A brasileiros e estrangeiros sem requisitos legais.',
  'pergunta_104_alternativa_4': 'Somente aos residentes no Município há mais de 5 anos.',
  'pergunta_104_resposta_correta': 'Todos os brasileiros, preenchidos os requisitos que a lei estabelecer.',
  'pergunta_104_justificativa': 'Art. 5º',


  'pergunta_105': 'Assinale a alternativa correta sobre “Quadro”:',
  'pergunta_105_alternativa_1': 'É o conjunto dos cargos públicos municipais de provimento efetivo.',
  'pergunta_105_alternativa_2': 'É o conjunto de cargos em comissão.',
  'pergunta_105_alternativa_3': 'É a relação de funções gratificadas, exclusivamente.',
  'pergunta_105_alternativa_4': 'É a soma de empregos públicos privados e municipais.',
  'pergunta_105_resposta_correta': 'É o conjunto dos cargos públicos municipais de provimento efetivo.',
  'pergunta_105_justificativa': 'Art. 6º, caput',


  // --- Ingresso, Nomeação e Concurso ---
  'pergunta_106': 'Precederão sempre o ingresso no serviço público municipal:',
  'pergunta_106_alternativa_1': 'A inspeção de saúde e o exame psicológico, realizados pelo órgão competente do Município.',
  'pergunta_106_alternativa_2': 'Somente a entrevista funcional.',
  'pergunta_106_alternativa_3': 'Apenas a inspeção de saúde, facultado o exame psicológico.',
  'pergunta_106_alternativa_4': 'Somente a apresentação de atestados particulares.',
  'pergunta_106_resposta_correta': 'A inspeção de saúde e o exame psicológico, realizados pelo órgão competente do Município.',
  'pergunta_106_justificativa': 'Art. 7º, caput',


  'pergunta_107': 'A inspeção médica para ingresso é válida por:',
  'pergunta_107_alternativa_1': 'Noventa (90) dias.',
  'pergunta_107_alternativa_2': 'Trinta (30) dias.',
  'pergunta_107_alternativa_3': 'Sessenta (60) dias.',
  'pergunta_107_alternativa_4': 'Centovinte (120) dias.',
  'pergunta_107_resposta_correta': 'Noventa (90) dias.',
  'pergunta_107_justificativa': 'Art. 7º, § 1º',


  'pergunta_108': 'São requisitos básicos para ingresso no serviço público, dentre outros:',
  'pergunta_108_alternativa_1': 'Nacionalidade brasileira; gozo dos direitos políticos; quitação com as obrigações militares e eleitorais.',
  'pergunta_108_alternativa_2': 'Somente idade mínima e ensino fundamental.',
  'pergunta_108_alternativa_3': 'Apenas boa conduta, dispensada a saúde física e mental.',
  'pergunta_108_alternativa_4': 'Somente aptidão física, dispensada a vocação para o cargo.',
  'pergunta_108_resposta_correta': 'Nacionalidade brasileira; gozo dos direitos políticos; quitação com as obrigações militares e eleitorais.',
  'pergunta_108_justificativa': 'Art. 8º, incisos I a IV',


  'pergunta_109': 'Marque a alternativa correta sobre formas de provimento em cargo público:',
  'pergunta_109_alternativa_1': 'Nomeação; readaptação; reversão; aproveitamento; reintegração; recondução.',
  'pergunta_109_alternativa_2': 'Apenas nomeação e contratação temporária.',
  'pergunta_109_alternativa_3': 'Somente concurso e remoção.',
  'pergunta_109_alternativa_4': 'Exclusivamente nomeação e ascensão funcional.',
  'pergunta_109_resposta_correta': 'Nomeação; readaptação; reversão; aproveitamento; reintegração; recondução.',
  'pergunta_109_justificativa': 'Art. 11, I a VI',


  'pergunta_110': 'A nomeação far-se-á:',
  'pergunta_110_alternativa_1': 'Em caráter efetivo ou em comissão, conforme o caso.',
  'pergunta_110_alternativa_2': 'Somente em caráter efetivo.',
  'pergunta_110_alternativa_3': 'Apenas em comissão, vedada a efetividade.',
  'pergunta_110_alternativa_4': 'Por eleição interna.',
  'pergunta_110_resposta_correta': 'Em caráter efetivo ou em comissão, conforme o caso.',
  'pergunta_110_justificativa': 'Art. 12, I e II',


  'pergunta_111': 'Sobre o concurso público, assinale a correta:',
  'pergunta_111_alternativa_1': 'O prazo de validade será de até dois (2) anos, prorrogável uma (1) vez, por igual período.',
  'pergunta_111_alternativa_2': 'O prazo de validade será de cinco (5) anos, improrrogável.',
  'pergunta_111_alternativa_3': 'Não há previsão de prorrogação.',
  'pergunta_111_alternativa_4': 'Os títulos podem valer até metade dos pontos do concurso.',
  'pergunta_111_resposta_correta': 'O prazo de validade será de até dois (2) anos, prorrogável uma (1) vez, por igual período.',
  'pergunta_111_justificativa': 'Art. 15, III',


  // --- Posse e Exercício ---
  'pergunta_112': 'Posse é:',
  'pergunta_112_alternativa_1': 'A aceitação expressa das atribuições, deveres e responsabilidades inerentes ao cargo público, formalizada com assinatura do termo.',
  'pergunta_112_alternativa_2': 'O simples início do trabalho sem formalidades.',
  'pergunta_112_alternativa_3': 'A publicação do edital do concurso.',
  'pergunta_112_alternativa_4': 'A lotação em repartição diversa.',
  'pergunta_112_resposta_correta': 'A aceitação expressa das atribuições, deveres e responsabilidades inerentes ao cargo público, formalizada com assinatura do termo.',
  'pergunta_112_justificativa': 'Art. 17, caput',


  'pergunta_113': 'O prazo para a posse é de:',
  'pergunta_113_alternativa_1': 'Quinze (15) dias, prorrogáveis por mais quinze (15), a requerimento do interessado.',
  'pergunta_113_alternativa_2': 'Dez (10) dias, improrrogáveis.',
  'pergunta_113_alternativa_3': 'Trinta (30) dias, improrrogáveis.',
  'pergunta_113_alternativa_4': 'Sete (7) dias, prorrogáveis por sete (7).',
  'pergunta_113_resposta_correta': 'Quinze (15) dias, prorrogáveis por mais quinze (15), a requerimento do interessado.',
  'pergunta_113_justificativa': 'Art. 17, § 1º',


  'pergunta_114': 'Só haverá posse nos casos de provimento por:',
  'pergunta_114_alternativa_1': 'Nomeação.',
  'pergunta_114_alternativa_2': 'Readaptação.',
  'pergunta_114_alternativa_3': 'Aproveitamento.',
  'pergunta_114_alternativa_4': 'Reintegração.',
  'pergunta_114_resposta_correta': 'Nomeação.',
  'pergunta_114_justificativa': 'Art. 20, caput',


  'pergunta_115': 'Exercício é:',
  'pergunta_115_alternativa_1': 'O desempenho do cargo pelo servidor nele provido.',
  'pergunta_115_alternativa_2': 'A designação para função gratificada.',
  'pergunta_115_alternativa_3': 'A aprovação em concurso.',
  'pergunta_115_alternativa_4': 'A avaliação do estágio probatório.',
  'pergunta_115_resposta_correta': 'O desempenho do cargo pelo servidor nele provido.',
  'pergunta_115_justificativa': 'Art. 21, caput',


  'pergunta_116': 'O exercício no cargo terá início no prazo de quinze (15) dias contados:',
  'pergunta_116_alternativa_1': 'Da data da posse ou da publicação do ato, conforme o caso.',
  'pergunta_116_alternativa_2': 'Somente da data da posse.',
  'pergunta_116_alternativa_3': 'Somente da data da publicação.',
  'pergunta_116_alternativa_4': 'Da assinatura do contrato temporário.',
  'pergunta_116_resposta_correta': 'Da data da posse ou da publicação do ato, conforme o caso.',
  'pergunta_116_justificativa': 'Art. 22, I e II',


  // --- Estabilidade, Estágio Probatório e Avaliação ---
  'pergunta_117': 'São estáveis após três anos de efetivo exercício os servidores:',
  'pergunta_117_alternativa_1': 'Nomeados para cargos de provimento efetivo em virtude de concurso público.',
  'pergunta_117_alternativa_2': 'Em comissão há mais de 3 anos.',
  'pergunta_117_alternativa_3': 'Temporários com mais de 2 anos.',
  'pergunta_117_alternativa_4': 'Readaptados em qualquer cargo.',
  'pergunta_117_resposta_correta': 'Nomeados para cargos de provimento efetivo em virtude de concurso público.',
  'pergunta_117_justificativa': 'Art. 32, caput',


  'pergunta_118': 'Para a aquisição da estabilidade é obrigatória:',
  'pergunta_118_alternativa_1': 'Avaliação especial de desempenho, realizada no período de estágio probatório.',
  'pergunta_118_alternativa_2': 'Apenas a contagem de tempo.',
  'pergunta_118_alternativa_3': 'Um curso de formação sem avaliação.',
  'pergunta_118_alternativa_4': 'A homologação pela Câmara, exclusivamente.',
  'pergunta_118_resposta_correta': 'Avaliação especial de desempenho, realizada no período de estágio probatório.',
  'pergunta_118_justificativa': 'Art. 32, § 1º',


  'pergunta_119': 'O servidor estável só perderá o cargo:',
  'pergunta_119_alternativa_1': 'Em virtude de sentença judicial transitada em julgado ou de decisão em processo administrativo disciplinar com contraditório e ampla defesa.',
  'pergunta_119_alternativa_2': 'Por avaliação negativa sem defesa.',
  'pergunta_119_alternativa_3': 'Por decisão do chefe imediato.',
  'pergunta_119_alternativa_4': 'Por ato unilateral do órgão de pessoal.',
  'pergunta_119_resposta_correta': 'Em virtude de sentença judicial transitada em julgado ou de decisão em processo administrativo disciplinar com contraditório e ampla defesa.',
  'pergunta_119_justificativa': 'Art. 33',


  'pergunta_120': 'O estágio probatório terá duração de:',
  'pergunta_120_alternativa_1': 'Três (3) anos, com avaliação de fatores como assiduidade, pontualidade, disciplina, relacionamento interpessoal, responsabilidade, produtividade, dedicação ao serviço, eficiência e iniciativa.',
  'pergunta_120_alternativa_2': 'Doze (12) meses, com avaliação apenas de assiduidade.',
  'pergunta_120_alternativa_3': 'Seis (6) meses, sem avaliação formal.',
  'pergunta_120_alternativa_4': 'Quatro (4) anos, com avaliação apenas de produtividade.',
  'pergunta_120_resposta_correta': 'Três (3) anos, com avaliação de fatores como assiduidade, pontualidade, disciplina, relacionamento interpessoal, responsabilidade, produtividade, dedicação ao serviço, eficiência e iniciativa.',
  'pergunta_120_justificativa': 'Art. 42, caput e incisos I a IX',


  'pergunta_121': 'Para confirmação no cargo, o conceito final do estágio probatório deve ser:',
  'pergunta_121_alternativa_1': 'Igual ou superior a dois terços do grau máximo, em cada um dos fatores de avaliação.',
  'pergunta_121_alternativa_2': 'Apenas superior à média simples.',
  'pergunta_121_alternativa_3': 'Igual a metade do grau máximo, no geral.',
  'pergunta_121_alternativa_4': 'Livremente fixado pelo chefe imediato.',
  'pergunta_121_resposta_correta': 'Igual ou superior a dois terços do grau máximo, em cada um dos fatores de avaliação.',
  'pergunta_121_justificativa': 'Art. 45, § 1º',


  'pergunta_122': 'O servidor não aprovado em estágio probatório será:',
  'pergunta_122_alternativa_1': 'Exonerado ou reconduzido ao cargo anteriormente ocupado, se era estável.',
  'pergunta_122_alternativa_2': 'Demissionado sem processo.',
  'pergunta_122_alternativa_3': 'Mantido no cargo até novo concurso.',
  'pergunta_122_alternativa_4': 'Automaticamente aposentado.',
  'pergunta_122_resposta_correta': 'Exonerado ou reconduzido ao cargo anteriormente ocupado, se era estável.',
  'pergunta_122_justificativa': 'Art. 45, § 3º',


  // --- Readaptação, Reversão, Reintegração ---
  'pergunta_123': 'Readaptação é:',
  'pergunta_123_alternativa_1': 'A investidura do servidor em cargo de igual padrão, mais compatível com sua aptidão ou vocação.',
  'pergunta_123_alternativa_2': 'A perda do cargo por sentença judicial.',
  'pergunta_123_alternativa_3': 'A avaliação do estágio probatório.',
  'pergunta_123_alternativa_4': 'A nomeação para cargo em comissão.',
  'pergunta_123_resposta_correta': 'A investidura do servidor em cargo de igual padrão, mais compatível com sua aptidão ou vocação.',
  'pergunta_123_justificativa': 'Art. 34, caput',


  'pergunta_124': 'Sobre reversão, assinale a correta:',
  'pergunta_124_alternativa_1': 'É o retorno do aposentado à atividade, verificado que não subsistem os motivos determinantes da aposentadoria, com prova de capacidade para o exercício do cargo.',
  'pergunta_124_alternativa_2': 'É a volta do exonerado sem requisitos.',
  'pergunta_124_alternativa_3': 'É a transformação de cargo em comissão em efetivo.',
  'pergunta_124_alternativa_4': 'É a mudança de lotação sem formalidades.',
  'pergunta_124_resposta_correta': 'É o retorno do aposentado à atividade, verificado que não subsistem os motivos determinantes da aposentadoria, com prova de capacidade para o exercício do cargo.',
  'pergunta_124_justificativa': 'Art. 39, caput e § 2º',


'pergunta_125': 'Reintegração é:',
  'pergunta_125_alternativa_1': 'O reingresso no serviço público municipal de servidor demitido ou exonerado, com ressarcimento do prejuízo correspondente às vantagens ligadas ao cargo.',
  'pergunta_125_alternativa_2': 'A confirmação no cargo após o estágio probatório.',
  'pergunta_125_alternativa_3': 'A recondução por opção do servidor.',
  'pergunta_125_alternativa_4': 'A promoção por merecimento.',
  'pergunta_125_resposta_correta': 'O reingresso no serviço público municipal de servidor demitido ou exonerado, com ressarcimento do prejuízo correspondente às vantagens ligadas ao cargo.',


  //----------------------------------
  'pergunta_126':'Acerca da reversão prevista no Estatuto dos Servidores de Caxias do Sul, assinale a alternativa correta:',
  'pergunta_126_alternativa_1':'A reversão é o retorno do aposentado à atividade, verificado que não subsistem os motivos determinantes da aposentadoria e haja comprovação de capacidade para o exercício do cargo.',
  'pergunta_126_alternativa_2':'A reversão é a reintegração de servidor exonerado ilegalmente, com pagamento retroativo.',
  'pergunta_126_alternativa_3':'A reversão ocorre sempre por interesse exclusivo do servidor aposentado.',
  'pergunta_126_alternativa_4':'A reversão somente é possível mediante aprovação em novo concurso público.',
  'pergunta_126_resposta_correta':'A reversão é o retorno do aposentado à atividade, verificado que não subsistem os motivos determinantes da aposentadoria e haja comprovação de capacidade para o exercício do cargo.',
  'pergunta_126_justificativa':'Art. 39, caput e §2º',


  //----------------------------------
  'pergunta_127':'De acordo com o Estatuto, a reintegração é definida como:',
  'pergunta_127_alternativa_1':'O reingresso do servidor no serviço público após demissão ou exoneração, quando invalidado o ato, com ressarcimento de todas as vantagens.',
  'pergunta_127_alternativa_2':'O retorno voluntário do servidor afastado por licença.',
  'pergunta_127_alternativa_3':'A mudança de cargo por interesse da administração.',
  'pergunta_127_alternativa_4':'A substituição temporária de servidor afastado.',
  'pergunta_127_resposta_correta':'O reingresso do servidor no serviço público após demissão ou exoneração, quando invalidado o ato, com ressarcimento de todas as vantagens.',
  'pergunta_127_justificativa':'Art. 40',


  //----------------------------------
  'pergunta_128':'De acordo com o Estatuto dos Servidores, o aproveitamento ocorrerá quando:',
  'pergunta_128_alternativa_1':'O servidor estiver em disponibilidade e houver cargo compatível com a sua situação funcional.',
  'pergunta_128_alternativa_2':'O servidor desejar mudar de cargo por interesse pessoal.',
  'pergunta_128_alternativa_3':'A administração extinguir cargo efetivo ocupado.',
  'pergunta_128_alternativa_4':'O servidor for aprovado em novo concurso.',
  'pergunta_128_resposta_correta':'O servidor estiver em disponibilidade e houver cargo compatível com a sua situação funcional.',
  'pergunta_128_justificativa':'Art. 41',


  //----------------------------------
  'pergunta_129':'Nos termos do Estatuto, a recondução é o retorno do servidor ao cargo anteriormente ocupado em razão de:',
  'pergunta_129_alternativa_1':'Inabilitação em estágio probatório relativo a outro cargo ou reintegração do anterior ocupante.',
  'pergunta_129_alternativa_2':'Pedido pessoal do servidor estável.',
  'pergunta_129_alternativa_3':'Transferência de ofício pela administração.',
  'pergunta_129_alternativa_4':'Substituição temporária.',
  'pergunta_129_resposta_correta':'Inabilitação em estágio probatório relativo a outro cargo ou reintegração do anterior ocupante.',
  'pergunta_129_justificativa':'Art. 44',


  //----------------------------------
  'pergunta_130':'Conforme o Estatuto, o servidor que não for aprovado no estágio probatório será:',
  'pergunta_130_alternativa_1':'Exonerado ou, se estável, reconduzido ao cargo anteriormente ocupado.',
  'pergunta_130_alternativa_2':'Aposentado proporcionalmente ao tempo de serviço.',
  'pergunta_130_alternativa_3':'Mantido no cargo até nova avaliação.',
  'pergunta_130_alternativa_4':'Substituído automaticamente por outro servidor.',
  'pergunta_130_resposta_correta':'Exonerado ou, se estável, reconduzido ao cargo anteriormente ocupado.',
  'pergunta_130_justificativa':'Art. 45, §3º',


  //----------------------------------
  'pergunta_131':'Segundo o Estatuto, a vacância do cargo público ocorrerá em razão de:',
  'pergunta_131_alternativa_1':'Exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável ou falecimento.',
  'pergunta_131_alternativa_2':'Apenas exoneração e demissão.',
  'pergunta_131_alternativa_3':'Promoção e transferência voluntária.',
  'pergunta_131_alternativa_4':'Apenas aposentadoria.',
  'pergunta_131_resposta_correta':'Exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável ou falecimento.',
  'pergunta_131_justificativa':'Art. 46',


  //----------------------------------
  'pergunta_132':'Conforme o Estatuto, a exoneração de cargo efetivo dar-se-á:',
  'pergunta_132_alternativa_1':'A pedido do servidor ou de ofício, quando não satisfeitas as condições de estágio probatório.',
  'pergunta_132_alternativa_2':'Somente a pedido do servidor.',
  'pergunta_132_alternativa_3':'Apenas por decisão judicial.',
  'pergunta_132_alternativa_4':'Por conveniência política.',
  'pergunta_132_resposta_correta':'A pedido do servidor ou de ofício, quando não satisfeitas as condições de estágio probatório.',
  'pergunta_132_justificativa':'Art. 47, I e II',


  //----------------------------------
  'pergunta_133':'A demissão será aplicada como penalidade disciplinar nos casos de:',
  'pergunta_133_alternativa_1':'Insubordinação grave, abandono de cargo, improbidade administrativa e ineficiência.',
  'pergunta_133_alternativa_2':'Atraso ocasional e faltas justificadas.',
  'pergunta_133_alternativa_3':'Desempenho mediano.',
  'pergunta_133_alternativa_4':'Erro de cálculo não intencional.',
  'pergunta_133_resposta_correta':'Insubordinação grave, abandono de cargo, improbidade administrativa e ineficiência.',
  'pergunta_133_justificativa':'Art. 160, incisos IV, V, VI e VII',


  //----------------------------------
  'pergunta_134':'Sobre a acumulação de cargos, empregos e funções públicas, é correto afirmar:',
  'pergunta_134_alternativa_1':'É vedada, salvo quando houver compatibilidade de horários e nas hipóteses constitucionais.',
  'pergunta_134_alternativa_2':'É livre, desde que o servidor cumpra a carga horária total.',
  'pergunta_134_alternativa_3':'É permitida apenas a acumulação de cargos em comissão.',
  'pergunta_134_alternativa_4':'Depende de autorização legislativa específica.',
  'pergunta_134_resposta_correta':'É vedada, salvo quando houver compatibilidade de horários e nas hipóteses constitucionais.',
  'pergunta_134_justificativa':'Art. 51, caput',


  //----------------------------------
  'pergunta_135':'Conforme o Estatuto, o servidor em exercício de cargo em comissão pode ser exonerado:',
  'pergunta_135_alternativa_1':'A qualquer tempo, por conveniência da Administração.',
  'pergunta_135_alternativa_2':'Apenas por motivo disciplinar.',
  'pergunta_135_alternativa_3':'Somente mediante processo administrativo.',
  'pergunta_135_alternativa_4':'Somente por decisão judicial.',
  'pergunta_135_resposta_correta':'A qualquer tempo, por conveniência da Administração.',
  'pergunta_135_justificativa':'Art. 50, §1º',


  //----------------------------------
  'pergunta_136':'Nos termos do Estatuto, o servidor perderá a remuneração do dia em que:',
  'pergunta_136_alternativa_1':'Não comparecer ao serviço, salvo motivo legalmente justificado.',
  'pergunta_136_alternativa_2':'Chegar com atraso inferior a 10 minutos.',
  'pergunta_136_alternativa_3':'Estiver em licença prêmio.',
  'pergunta_136_alternativa_4':'Estiver em missão oficial.',
  'pergunta_136_resposta_correta':'Não comparecer ao serviço, salvo motivo legalmente justificado.',
  'pergunta_136_justificativa':'Art. 61',


  //----------------------------------
  'pergunta_137':'Conforme o Estatuto, o servidor somente poderá afastar-se do exercício mediante:',
  'pergunta_137_alternativa_1':'Licença, afastamento ou dispensa previstos em lei.',
  'pergunta_137_alternativa_2':'Autorização verbal do chefe imediato.',
  'pergunta_137_alternativa_3':'Solicitação por e-mail.',
  'pergunta_137_alternativa_4':'Interesse pessoal não comunicado.',
  'pergunta_137_resposta_correta':'Licença, afastamento ou dispensa previstos em lei.',
  'pergunta_137_justificativa':'Art. 60',


  //----------------------------------
  'pergunta_138':'O servidor poderá obter licença para tratar de interesses particulares:',
  'pergunta_138_alternativa_1':'Sem remuneração, pelo prazo máximo de dois anos consecutivos.',
  'pergunta_138_alternativa_2':'Com remuneração integral, por tempo indeterminado.',
  'pergunta_138_alternativa_3':'Com vencimentos, por até seis meses.',
  'pergunta_138_alternativa_4':'Sem vencimentos, limitada a 30 dias.',
  'pergunta_138_resposta_correta':'Sem remuneração, pelo prazo máximo de dois anos consecutivos.',
  'pergunta_138_justificativa':'Art. 88, caput',


  //----------------------------------
  'pergunta_139':'Nos termos do Estatuto, a licença para desempenho de mandato classista será concedida:',
  'pergunta_139_alternativa_1':'Sem prejuízo da remuneração, durante o mandato.',
  'pergunta_139_alternativa_2':'Com perda total de vencimentos.',
  'pergunta_139_alternativa_3':'Somente após 10 anos de efetivo exercício.',
  'pergunta_139_alternativa_4':'Com remuneração parcial.',
  'pergunta_139_resposta_correta':'Sem prejuízo da remuneração, durante o mandato.',
  'pergunta_139_justificativa':'Art. 92',


  //----------------------------------
  'pergunta_140':'Segundo o Estatuto, o servidor poderá gozar licença para tratamento de saúde:',
  'pergunta_140_alternativa_1':'Mediante inspeção médica oficial e com percepção de vencimentos.',
  'pergunta_140_alternativa_2':'Independentemente de perícia médica.',
  'pergunta_140_alternativa_3':'Apenas com atestado particular.',
  'pergunta_140_alternativa_4':'Com vencimentos reduzidos à metade.',
  'pergunta_140_resposta_correta':'Mediante inspeção médica oficial e com percepção de vencimentos.',
  'pergunta_140_justificativa':'Art. 77',


  //----------------------------------
  'pergunta_141':'De acordo com o Estatuto, a licença à gestante será concedida:',
  'pergunta_141_alternativa_1':'Sem prejuízo do cargo e da remuneração, com duração de 120 dias.',
  'pergunta_141_alternativa_2':'Com perda parcial da remuneração.',
  'pergunta_141_alternativa_3':'Apenas 60 dias, sem vencimentos.',
  'pergunta_141_alternativa_4':'Somente a servidoras concursadas há mais de 10 anos.',
  'pergunta_141_resposta_correta':'Sem prejuízo do cargo e da remuneração, com duração de 120 dias.',
  'pergunta_141_justificativa':'Art. 81',


  //----------------------------------
  'pergunta_142':'Conforme o Estatuto, o servidor fará jus a férias anuais remuneradas:',
  'pergunta_142_alternativa_1':'Com acréscimo de um terço da remuneração.',
  'pergunta_142_alternativa_2':'Sem qualquer acréscimo.',
  'pergunta_142_alternativa_3':'Com metade da remuneração.',
  'pergunta_142_alternativa_4':'Com vencimentos reduzidos.',
  'pergunta_142_resposta_correta':'Com acréscimo de um terço da remuneração.',
  'pergunta_142_justificativa':'Art. 100, §2º',


  //----------------------------------
  'pergunta_143':'De acordo com o Estatuto, o servidor em férias poderá interrompê-las:',
  'pergunta_143_alternativa_1':'Por necessidade do serviço e a pedido, devidamente autorizado.',
  'pergunta_143_alternativa_2':'Somente por decisão judicial.',
  'pergunta_143_alternativa_3':'A qualquer tempo, por iniciativa própria.',
  'pergunta_143_alternativa_4':'Por motivo particular, sem autorização.',
  'pergunta_143_resposta_correta':'Por necessidade do serviço e a pedido, devidamente autorizado.',
  'pergunta_143_justificativa':'Art. 101',


  //----------------------------------
  'pergunta_144':'A contagem de tempo de serviço compreenderá, dentre outros, o período de:',
  'pergunta_144_alternativa_1':'Exercício, férias, licenças e afastamentos considerados de efetivo exercício.',
  'pergunta_144_alternativa_2':'Apenas tempo efetivamente trabalhado.',
  'pergunta_144_alternativa_3':'Somente o tempo de cargo efetivo.',
  'pergunta_144_alternativa_4':'Período de estágio probatório e nada mais.',
  'pergunta_144_resposta_correta':'Exercício, férias, licenças e afastamentos considerados de efetivo exercício.',
  'pergunta_144_justificativa':'Art. 113',


  //----------------------------------
  'pergunta_145':'O tempo de serviço público federal, estadual ou municipal será:',
  'pergunta_145_alternativa_1':'Computado para todos os efeitos legais, quando houver reciprocidade legal.',
  'pergunta_145_alternativa_2':'Desconsiderado totalmente.',
  'pergunta_145_alternativa_3':'Contado apenas para aposentadoria.',
  'pergunta_145_alternativa_4':'Computado apenas se prestado em cargo comissionado.',
  'pergunta_145_resposta_correta':'Computado para todos os efeitos legais, quando houver reciprocidade legal.',
  'pergunta_145_justificativa':'Art. 115',


  //----------------------------------
  'pergunta_146':'O servidor que acumular cargos indevidamente estará sujeito a:',
  'pergunta_146_alternativa_1':'Demissão de todos, exceto do de menor remuneração.',
  'pergunta_146_alternativa_2':'Advertência apenas.',
  'pergunta_146_alternativa_3':'Suspensão de 30 dias.',
  'pergunta_146_alternativa_4':'Multa correspondente a 50% dos vencimentos.',
  'pergunta_146_resposta_correta':'Demissão de todos, exceto do de menor remuneração.',
  'pergunta_146_justificativa':'Art. 52, §3º',


  //----------------------------------
  'pergunta_147':'De acordo com o Estatuto, constitui dever do servidor:',
  'pergunta_147_alternativa_1':'Cumprir as ordens superiores, exceto quando manifestamente ilegais.',
  'pergunta_147_alternativa_2':'Cumprir ordens superiores, ainda que ilegais.',
  'pergunta_147_alternativa_3':'Apenas as ordens que desejar.',
  'pergunta_147_alternativa_4':'Negar-se a cumprir ordens verbais.',
  'pergunta_147_resposta_correta':'Cumprir as ordens superiores, exceto quando manifestamente ilegais.',
  'pergunta_147_justificativa':'Art. 156, VIII',


  //----------------------------------
  'pergunta_148':'Conforme o Estatuto, é proibido ao servidor público municipal:',
  'pergunta_148_alternativa_1':'Retirar, sem prévia autorização, qualquer documento ou bem da repartição.',
  'pergunta_148_alternativa_2':'Opinar sobre assuntos administrativos.',
  'pergunta_148_alternativa_3':'Solicitar licença para tratamento de saúde.',
  'pergunta_148_alternativa_4':'Fazer críticas construtivas ao serviço.',
  'pergunta_148_resposta_correta':'Retirar, sem prévia autorização, qualquer documento ou bem da repartição.',
  'pergunta_148_justificativa':'Art. 157, II',


  //----------------------------------
  'pergunta_149':'Nos termos do Estatuto, a penalidade de advertência será aplicada:',
  'pergunta_149_alternativa_1':'Por escrito, nos casos de negligência leve.',
  'pergunta_149_alternativa_2':'Verbalmente, sem registro.',
  'pergunta_149_alternativa_3':'Somente por reincidência grave.',
  'pergunta_149_alternativa_4':'Com suspensão automática.',
  'pergunta_149_resposta_correta':'Por escrito, nos casos de negligência leve.',
  'pergunta_149_justificativa':'Art. 158, I',
  //----------------------------------
  'pergunta_150':'De acordo com o Estatuto dos Servidores Públicos do Município de Caxias do Sul, a penalidade de suspensão não poderá exceder:',
  'pergunta_150_alternativa_1':'Sessenta (60) dias consecutivos, perdendo o servidor todos os direitos e vantagens decorrentes do exercício do cargo.',
  'pergunta_150_alternativa_2':'Trinta (30) dias consecutivos, sem perda de vencimentos.',
  'pergunta_150_alternativa_3':'Noventa (90) dias, podendo ser prorrogada a critério da chefia.',
  'pergunta_150_alternativa_4':'Cinquenta (50) dias, com redução de vencimentos à metade.',
  'pergunta_150_resposta_correta':'Sessenta (60) dias consecutivos, perdendo o servidor todos os direitos e vantagens decorrentes do exercício do cargo.',
  'pergunta_150_justificativa':'Art. 255, caput, Lei Complementar nº 3.673/1991',


  'pergunta_151':'Segundo a LC 241, a previdência social dos servidores efetivos tem por finalidade:',
  'pergunta_151_alternativa_1':'Assegurar o pagamento dos proventos de aposentadoria e de pensão, observados os requisitos legais.',
  'pergunta_151_alternativa_2':'Garantir apenas auxílio-doença e salário-família aos servidores efetivos.',
  'pergunta_151_alternativa_3':'Assegurar exclusivamente aposentadoria por idade aos servidores efetivos.',
  'pergunta_151_alternativa_4':'Conceder benefícios por convênios com outros entes, em substituição ao regime próprio.',
  'pergunta_151_resposta_correta':'Assegurar o pagamento dos proventos de aposentadoria e de pensão, observados os requisitos legais.',
  'pergunta_151_justificativa':'Art. 2º',


  //----------------------------------
  'pergunta_152':'Sobre o financiamento do regime próprio estabelecido na LC 241, assinale a correta:',
  'pergunta_152_alternativa_1':'É custeado por recursos do Município e por contribuições dos servidores ativos, inativos e pensionistas vinculados a cargos efetivos.',
  'pergunta_152_alternativa_2':'É custeado exclusivamente por transferências da União.',
  'pergunta_152_alternativa_3':'É custeado apenas pelas contribuições dos servidores ativos.',
  'pergunta_152_alternativa_4':'Dispensa contribuições, sendo mantido por taxas municipais específicas.',
  'pergunta_152_resposta_correta':'É custeado por recursos do Município e por contribuições dos servidores ativos, inativos e pensionistas vinculados a cargos efetivos.',
  'pergunta_152_justificativa':'Art. 1º, II',


  //----------------------------------
  'pergunta_153':'É vedado ao regime próprio previsto na LC 241:',
  'pergunta_153_alternativa_1':'Pagar benefícios mediante convênios ou consórcios com Estados e Municípios.',
  'pergunta_153_alternativa_2':'Manter registro contábil individualizado das contribuições.',
  'pergunta_153_alternativa_3':'Garantir acesso dos segurados às informações relativas à gestão.',
  'pergunta_153_alternativa_4':'Submeter-se a inspeções e auditorias dos órgãos de controle.',
  'pergunta_153_resposta_correta':'Pagar benefícios mediante convênios ou consórcios com Estados e Municípios.',
  'pergunta_153_justificativa':'Art. 1º, III',


  //----------------------------------
  'pergunta_154':'As contribuições do empregador e do pessoal ativo, inativo e pensionistas vinculados ao regime:',
  'pergunta_154_alternativa_1':'Destinam-se ao pagamento de aposentadorias e pensões, podendo cobrir despesas administrativas até o limite legal.',
  'pergunta_154_alternativa_2':'Podem custear quaisquer despesas de pessoal do Município.',
  'pergunta_154_alternativa_3':'Podem financiar obras públicas.',
  'pergunta_154_alternativa_4':'Podem ser livremente utilizadas para assistência à saúde.',
  'pergunta_154_resposta_correta':'Destinam-se ao pagamento de aposentadorias e pensões, podendo cobrir despesas administrativas até o limite legal.',
  'pergunta_154_justificativa':'Art. 2º, §1º',


  //----------------------------------
  'pergunta_155':'Salário-de-contribuição compreende a remuneração do mês e a gratificação natalina, excluídas, entre outras, as parcelas:',
  'pergunta_155_alternativa_1':'Ajuda de custo e diárias; salário-família; adicional de 1/3 de férias; função gratificada ou cargo em comissão.',
  'pergunta_155_alternativa_2':'Vencimento básico; gratificação natalina.',
  'pergunta_155_alternativa_3':'Horas extras e vencimento básico.',
  'pergunta_155_alternativa_4':'Adicional de tempo de serviço e vencimento básico.',
  'pergunta_155_resposta_correta':'Ajuda de custo e diárias; salário-família; adicional de 1/3 de férias; função gratificada ou cargo em comissão.',
  'pergunta_155_justificativa':'Art. 4º, VII',


  //----------------------------------
  'pergunta_156':'As exclusões do inciso VII do art. 4º não se aplicam ao servidor que:',
  'pergunta_156_alternativa_1':'Tenha incorporado ou preenchido os requisitos à incorporação das parcelas até a entrada em vigor da EC 103/2019, nos termos da lei.',
  'pergunta_156_alternativa_2':'Esteja em licença sem remuneração.',
  'pergunta_156_alternativa_3':'Exerça exclusivamente cargo em comissão.',
  'pergunta_156_alternativa_4':'Seja temporário vinculado ao RGPS.',
  'pergunta_156_resposta_correta':'Tenha incorporado ou preenchido os requisitos à incorporação das parcelas até a entrada em vigor da EC 103/2019, nos termos da lei.',
  'pergunta_156_justificativa':'Art. 4º-A',


  //----------------------------------
  'pergunta_157':'A opção de incluir parcelas remuneratórias temporárias no salário de contribuição é:',
  'pergunta_157_alternativa_1':'Em caráter irretratável, com efeitos financeiros definidos em lei.',
  'pergunta_157_alternativa_2':'Retratável a cada 12 meses.',
  'pergunta_157_alternativa_3':'Válida apenas para uma parcela escolhida.',
  'pergunta_157_alternativa_4':'Sem eficácia sobre parcelas futuras.',
  'pergunta_157_resposta_correta':'Em caráter irretratável, com efeitos financeiros definidos em lei.',
  'pergunta_157_justificativa':'Art. 4º-B',


  //----------------------------------
  'pergunta_158':'São segurados obrigatórios do regime próprio municipal:',
  'pergunta_158_alternativa_1':'Servidores ocupantes de cargo efetivo, ativos, inativos e pensionistas, dos órgãos da administração direta, autárquica e fundacional e da Câmara de Vereadores.',
  'pergunta_158_alternativa_2':'Apenas servidores em comissão.',
  'pergunta_158_alternativa_3':'Somente servidores efetivos do Executivo, excluídos os do Legislativo.',
  'pergunta_158_alternativa_4':'Apenas aposentados do RGPS.',
  'pergunta_158_resposta_correta':'Servidores ocupantes de cargo efetivo, ativos, inativos e pensionistas, dos órgãos da administração direta, autárquica e fundacional e da Câmara de Vereadores.',
  'pergunta_158_justificativa':'Art. 6º',


  //----------------------------------
  'pergunta_159':'Servidores em licença sem remuneração ou colocados à disposição sem ônus para o Município:',
  'pergunta_159_alternativa_1':'Podem permanecer vinculados ao regime, recolhendo integralmente as contribuições do segurado e patronal por conta própria.',
  'pergunta_159_alternativa_2':'Devem ser desligados do regime.',
  'pergunta_159_alternativa_3':'Permanecem vinculados sem recolhimento.',
  'pergunta_159_alternativa_4':'Ficam automaticamente vinculados ao RGPS.',
  'pergunta_159_resposta_correta':'Podem permanecer vinculados ao regime, recolhendo integralmente as contribuições do segurado e patronal por conta própria.',
  'pergunta_159_justificativa':'Art. 7º',


  //----------------------------------
  'pergunta_160':'Quem ocupa exclusivamente cargo em comissão, emprego público ou contrato temporário:',
  'pergunta_160_alternativa_1':'Vincula-se ao RGPS, segundo suas leis e regulamentos.',
  'pergunta_160_alternativa_2':'É segurado obrigatório do regime próprio municipal.',
  'pergunta_160_alternativa_3':'Pode escolher livremente o regime.',
  'pergunta_160_alternativa_4':'Vincula-se a regime próprio estadual.',
  'pergunta_160_resposta_correta':'Vincula-se ao RGPS, segundo suas leis e regulamentos.',
  'pergunta_160_justificativa':'Art. 2º, §2º',


  //----------------------------------
  'pergunta_161':'Para cálculo de proventos pela média, consideram-se as maiores remunerações correspondentes a:',
  'pergunta_161_alternativa_1':'80% de todo o período contributivo desde 07/1994, ou desde o início da contribuição se posterior.',
  'pergunta_161_alternativa_2':'100% de todo o período contributivo desde 07/1991.',
  'pergunta_161_alternativa_3':'60% das menores remunerações desde 07/1994.',
  'pergunta_161_alternativa_4':'Apenas as últimas 36 remunerações.',
  'pergunta_161_resposta_correta':'80% de todo o período contributivo desde 07/1994, ou desde o início da contribuição se posterior.',
  'pergunta_161_justificativa':'Art. 3º, caput',


  //----------------------------------
  'pergunta_162':'Por ocasião da concessão, os proventos calculados pela média:',
  'pergunta_162_alternativa_1':'Não podem ser inferiores ao salário-mínimo nem exceder a remuneração do cargo efetivo.',
  'pergunta_162_alternativa_2':'Podem ser inferiores ao salário-mínimo.',
  'pergunta_162_alternativa_3':'Podem exceder a remuneração do cargo, se houver vantagens pessoais.',
  'pergunta_162_alternativa_4':'Devem ser iguais à última remuneração.',
  'pergunta_162_resposta_correta':'Não podem ser inferiores ao salário-mínimo nem exceder a remuneração do cargo efetivo.',
  'pergunta_162_justificativa':'Art. 3º, §5º',


  //----------------------------------
  'pergunta_163':'Quanto ao rol de benefícios assegurados pelo regime, a LC 241 dispõe que, ao segurado, são devidos:',
  'pergunta_163_alternativa_1':'Aposentadoria por incapacidade, aposentadoria voluntária, aposentadoria compulsória, aposentadoria especial e gratificação natalina.',
  'pergunta_163_alternativa_2':'Apenas aposentadoria por idade.',
  'pergunta_163_alternativa_3':'Salário-família e salário-maternidade.',
  'pergunta_163_alternativa_4':'Auxílio-reclusão e auxílio-natalidade.',
  'pergunta_163_resposta_correta':'Aposentadoria por incapacidade, aposentadoria voluntária, aposentadoria compulsória, aposentadoria especial e gratificação natalina.',
  'pergunta_163_justificativa':'Art. 14, I',


  //----------------------------------
  'pergunta_164':'Para os dependentes, o benefício previsto na LC 241 é:',
  'pergunta_164_alternativa_1':'Pensão por morte do segurado.',
  'pergunta_164_alternativa_2':'Salário-família.',
  'pergunta_164_alternativa_3':'Auxílio-natalidade.',
  'pergunta_164_alternativa_4':'Auxílio-doença.',
  'pergunta_164_resposta_correta':'Pensão por morte do segurado.',
  'pergunta_164_justificativa':'Art. 14, II',


  //----------------------------------
  'pergunta_165':'A aposentadoria por incapacidade será sempre precedida de:',
  'pergunta_165_alternativa_1':'Licença para tratamento de saúde de, no mínimo, 24 meses.',
  'pergunta_165_alternativa_2':'Licença prêmio de 12 meses.',
  'pergunta_165_alternativa_3':'Licença interesse particular de 24 meses.',
  'pergunta_165_alternativa_4':'Readaptação de 6 meses.',
  'pergunta_165_resposta_correta':'Licença para tratamento de saúde de, no mínimo, 24 meses.',
  'pergunta_165_justificativa':'Art. 20, §1º',


  //----------------------------------
  'pergunta_166':'É vedada a concessão de aposentadoria por incapacidade sem:',
  'pergunta_166_alternativa_1':'Prévia confirmação em perícia biopsicossocial a cargo do órgão competente e homologação prevista em lei.',
  'pergunta_166_alternativa_2':'Relatório do chefe imediato.',
  'pergunta_166_alternativa_3':'Decisão do Tribunal de Contas.',
  'pergunta_166_alternativa_4':'Laudo psicológico apenas.',
  'pergunta_166_resposta_correta':'Prévia confirmação em perícia biopsicossocial a cargo do órgão competente e homologação prevista em lei.',
  'pergunta_166_justificativa':'Art. 20, §3º',


  //----------------------------------
  'pergunta_167':'Os proventos da aposentadoria por incapacidade serão integrais quando decorrentes de:',
  'pergunta_167_alternativa_1':'Acidente em serviço, moléstia profissional ou doença grave especificada em lei.',
  'pergunta_167_alternativa_2':'Qualquer doença comum.',
  'pergunta_167_alternativa_3':'Tempo de contribuição insuficiente.',
  'pergunta_167_alternativa_4':'Opção do servidor.',
  'pergunta_167_resposta_correta':'Acidente em serviço, moléstia profissional ou doença grave especificada em lei.',
  'pergunta_167_justificativa':'Art. 21',


  //----------------------------------
  'pergunta_168':'A verificação periódica da incapacidade do aposentado por incapacidade será realizada:',
  'pergunta_168_alternativa_1':'A cada dois anos, por perícia biopsicossocial, até completar 70 anos, ou sempre que convocado.',
  'pergunta_168_alternativa_2':'A cada cinco anos, por médico assistente.',
  'pergunta_168_alternativa_3':'Somente por junta administrativa, sem perícia.',
  'pergunta_168_alternativa_4':'Apenas mediante requerimento do interessado.',
  'pergunta_168_resposta_correta':'A cada dois anos, por perícia biopsicossocial, até completar 70 anos, ou sempre que convocado.',
  'pergunta_168_justificativa':'Art. 22, caput',


  //----------------------------------
  'pergunta_169':'O retorno à atividade do aposentado por incapacidade ocorrerá quando:',
  'pergunta_169_alternativa_1':'A perícia declarar insubsistentes os motivos da aposentadoria, após homologação, com comunicação ao ente empregador.',
  'pergunta_169_alternativa_2':'Houver pedido do servidor, sem perícia.',
  'pergunta_169_alternativa_3':'Por ato do Legislativo, sem exame pericial.',
  'pergunta_169_alternativa_4':'Decorridos cinco anos automaticamente.',
  'pergunta_169_resposta_correta':'A perícia declarar insubsistentes os motivos da aposentadoria, após homologação, com comunicação ao ente empregador.',
  'pergunta_169_justificativa':'Art. 22, §3º',


  //----------------------------------
  'pergunta_170':'Para aposentadoria voluntária, exige-se, dentre outros requisitos:',
  'pergunta_170_alternativa_1':'10 anos de efetivo exercício no serviço público e 5 anos no cargo efetivo.',
  'pergunta_170_alternativa_2':'5 anos de serviço público e 2 anos no cargo.',
  'pergunta_170_alternativa_3':'Apenas idade mínima.',
  'pergunta_170_alternativa_4':'Apenas tempo de contribuição.',
  'pergunta_170_resposta_correta':'10 anos de efetivo exercício no serviço público e 5 anos no cargo efetivo.',
  'pergunta_170_justificativa':'Art. 23, caput',


  //----------------------------------
  'pergunta_171':'Para professores, os requisitos de idade e tempo de contribuição serão reduzidos em 5 anos quando houver:',
  'pergunta_171_alternativa_1':'Exercício exclusivo em educação básica (docência, direção, coordenação e assessoramento pedagógico).',
  'pergunta_171_alternativa_2':'Exercício em qualquer função administrativa da educação.',
  'pergunta_171_alternativa_3':'Docência em ensino superior.',
  'pergunta_171_alternativa_4':'Cursos livres de capacitação.',
  'pergunta_171_resposta_correta':'Exercício exclusivo em educação básica (docência, direção, coordenação e assessoramento pedagógico).',
  'pergunta_171_justificativa':'Art. 23, §1º',


  //----------------------------------
  'pergunta_172':'É assegurado abono de permanência ao servidor que:',
  'pergunta_172_alternativa_1':'Tendo completado os requisitos da aposentadoria voluntária, optar por permanecer em atividade até a compulsória.',
  'pergunta_172_alternativa_2':'Completar 5 anos de serviço.',
  'pergunta_172_alternativa_3':'Exercer função em comissão.',
  'pergunta_172_alternativa_4':'Pedir licença sem remuneração.',
  'pergunta_172_resposta_correta':'Tendo completado os requisitos da aposentadoria voluntária, optar por permanecer em atividade até a compulsória.',
  'pergunta_172_justificativa':'Art. 23, §2º',


  //----------------------------------
  'pergunta_173':'A aposentadoria especial será devida ao segurado que se enquadrar:',
  'pergunta_173_alternativa_1':'Nas situações e condições previstas na legislação federal aplicável, vedados critérios diferenciados salvo os previstos em leis complementares federais.',
  'pergunta_173_alternativa_2':'Por ato discricionário, a qualquer servidor.',
  'pergunta_173_alternativa_3':'Apenas a quem exerce direção escolar.',
  'pergunta_173_alternativa_4':'Mediante acordo coletivo.',
  'pergunta_173_resposta_correta':'Nas situações e condições previstas na legislação federal aplicável, vedados critérios diferenciados salvo os previstos em leis complementares federais.',
  'pergunta_173_justificativa':'Art. 25 e parágrafo único',


  //----------------------------------
  'pergunta_174':'A aposentadoria compulsória será automática, com proventos proporcionais. A idade prevista é:',
  'pergunta_174_alternativa_1':'70 anos.',
  'pergunta_174_alternativa_2':'75 anos.',
  'pergunta_174_alternativa_3':'65 anos.',
  'pergunta_174_alternativa_4':'72 anos.',
  'pergunta_174_resposta_correta':'70 anos.',
  'pergunta_174_justificativa':'Art. 26',


  //----------------------------------
  'pergunta_175':'A pensão por morte será devida a partir:',
  'pergunta_175_alternativa_1':'Do óbito, se requerida até 90 dias; após esse prazo, da data do requerimento.',
  'pergunta_175_alternativa_2':'Do trânsito em julgado judicial.',
  'pergunta_175_alternativa_3':'Do óbito, independentemente de requerimento.',
  'pergunta_175_alternativa_4':'Da publicação em Diário Oficial.',
  'pergunta_175_resposta_correta':'Do óbito, se requerida até 90 dias; após esse prazo, da data do requerimento.',
  'pergunta_175_justificativa':'Art. 27',


  //----------------------------------
  'pergunta_176':'O valor da pensão por morte corresponderá:',
  'pergunta_176_alternativa_1':'À totalidade dos proventos (se aposentado) ou da remuneração do cargo efetivo (se em atividade) até o teto do RGPS, acrescida de 70% da parcela excedente.',
  'pergunta_176_alternativa_2':'A 50% da última remuneração, sem acréscimos.',
  'pergunta_176_alternativa_3':'À média de 60% das contribuições.',
  'pergunta_176_alternativa_4':'Ao salário-mínimo, qualquer que seja a remuneração.',
  'pergunta_176_resposta_correta':'À totalidade dos proventos (se aposentado) ou da remuneração do cargo efetivo (se em atividade) até o teto do RGPS, acrescida de 70% da parcela excedente.',
  'pergunta_176_justificativa':'Art. 28, I e II',


  //----------------------------------
  'pergunta_177':'A pensão poderá ser concedida por morte presumida, em caráter provisório, nas hipóteses de:',
  'pergunta_177_alternativa_1':'Declaração de autoridade judiciária; ou desaparecimento por acidente, desastre ou catástrofe, mediante prova hábil.',
  'pergunta_177_alternativa_2':'Relato verbal de familiares.',
  'pergunta_177_alternativa_3':'Boletim de ocorrência sem outras provas.',
  'pergunta_177_alternativa_4':'Comunicação do empregador, sem decisão judicial quando não houver prova do evento.',
  'pergunta_177_resposta_correta':'Declaração de autoridade judiciária; ou desaparecimento por acidente, desastre ou catástrofe, mediante prova hábil.',
  'pergunta_177_justificativa':'Art. 29',


  //----------------------------------
  'pergunta_178':'Extingue-se o direito à pensão, entre outras hipóteses:',
  'pergunta_178_alternativa_1':'Para o filho, aos 21 anos de idade ou se emancipado, salvo se inválido.',
  'pergunta_178_alternativa_2':'Para o filho, somente aos 25 anos.',
  'pergunta_178_alternativa_3':'Para o cônjuge, apenas com novo casamento.',
  'pergunta_178_alternativa_4':'Apenas com a morte do dependente.',
  'pergunta_178_resposta_correta':'Para o filho, aos 21 anos de idade ou se emancipado, salvo se inválido.',
  'pergunta_178_justificativa':'Art. 30, I',


  //----------------------------------
  'pergunta_179':'Nas médias de aposentadoria, as remunerações consideradas não poderão ser:',
  'pergunta_179_alternativa_1':'Inferiores ao salário-mínimo nem superiores ao limite máximo do salário de contribuição nos períodos vinculados ao RGPS.',
  'pergunta_179_alternativa_2':'Superiores à última remuneração do cargo.',
  'pergunta_179_alternativa_3':'Atualizadas mês a mês.',
  'pergunta_179_alternativa_4':'Comprovadas por documentos públicos.',
  'pergunta_179_resposta_correta':'Inferiores ao salário-mínimo nem superiores ao limite máximo do salário de contribuição nos períodos vinculados ao RGPS.',
  'pergunta_179_justificativa':'Art. 3º, §4º',


  //----------------------------------
  'pergunta_180':'Entre os critérios do art. 1º para organização do regime, consta:',
  'pergunta_180_alternativa_1':'Identificação e consolidação, em demonstrativos, de todas as despesas com inativos e pensionistas.',
  'pergunta_180_alternativa_2':'Dispensa de auditoria atuarial.',
  'pergunta_180_alternativa_3':'Cobertura de benefícios a comissionados sem vínculo efetivo.',
  'pergunta_180_alternativa_4':'Sigilo absoluto sobre a gestão.',
  'pergunta_180_resposta_correta':'Identificação e consolidação, em demonstrativos, de todas as despesas com inativos e pensionistas.',
  'pergunta_180_justificativa':'Art. 1º, VI',


  //----------------------------------
  'pergunta_181':'Para a LC 241, “segurado” é:',
  'pergunta_181_alternativa_1':'A pessoa investida em cargo público efetivo municipal e os aposentados de cargo efetivo.',
  'pergunta_181_alternativa_2':'Qualquer comissionado.',
  'pergunta_181_alternativa_3':'Apenas o pensionista.',
  'pergunta_181_alternativa_4':'Todo servidor do Município, independentemente de vínculo.',
  'pergunta_181_resposta_correta':'A pessoa investida em cargo público efetivo municipal e os aposentados de cargo efetivo.',
  'pergunta_181_justificativa':'Art. 4º, II',


  //----------------------------------
  'pergunta_182':'Equiparam-se a filho, mediante declaração e comprovação de dependência econômica:',
  'pergunta_182_alternativa_1':'O enteado e o menor tutelado.',
  'pergunta_182_alternativa_2':'Somente o enteado.',
  'pergunta_182_alternativa_3':'Somente o tutelado maior de 21 anos.',
  'pergunta_182_alternativa_4':'Nenhum dependente por equiparação.',
  'pergunta_182_resposta_correta':'O enteado e o menor tutelado.',
  'pergunta_182_justificativa':'Art. 9º, §5º',


  //----------------------------------
  'pergunta_183':'A duração da pensão ao cônjuge/companheiro, quando cumpridas as carências legais, será de 15 anos se a idade do pensionista, na data do óbito, estiver entre:',
  'pergunta_183_alternativa_1':'30 e 40 anos.',
  'pergunta_183_alternativa_2':'21 e 26 anos.',
  'pergunta_183_alternativa_3':'27 e 29 anos.',
  'pergunta_183_alternativa_4':'41 e 43 anos.',
  'pergunta_183_resposta_correta':'30 e 40 anos.',
  'pergunta_183_justificativa':'Art. 9º, §2º',


  //----------------------------------
  'pergunta_184':'O cônjuge/companheiro não terá direito à pensão se o casamento/união tiver menos de 2 anos, salvo se:',
  'pergunta_184_alternativa_1':'O óbito decorrer de acidente posterior ao casamento/união, ou se for considerado incapaz e insuscetível de reabilitação por doença/acidente após o casamento/união.',
  'pergunta_184_alternativa_2':'Houver dependência econômica presumida.',
  'pergunta_184_alternativa_3':'Existir filho em comum maior de 21 anos.',
  'pergunta_184_alternativa_4':'O segurado tiver mais de 10 anos de contribuição.',
  'pergunta_184_resposta_correta':'O óbito decorrer de acidente posterior ao casamento/união, ou se for considerado incapaz e insuscetível de reabilitação por doença/acidente após o casamento/união.',
  'pergunta_184_justificativa':'Art. 9º, §2º',


  //----------------------------------
  'pergunta_185':'Se o cônjuge/companheiro for considerado incapaz e insuscetível de reabilitação, por doença ou acidente, terá direito à pensão:',
  'pergunta_185_alternativa_1':'Vitalícia, observado o disposto na lei.',
  'pergunta_185_alternativa_2':'Por 3 anos.',
  'pergunta_185_alternativa_3':'Por 6 anos.',
  'pergunta_185_alternativa_4':'Por 10 anos.',
  'pergunta_185_resposta_correta':'Vitalícia, observado o disposto na lei.',
  'pergunta_185_justificativa':'Art. 9º, §2º',


  //----------------------------------
  'pergunta_186':'A concessão de pensão aos beneficiários prioritários:',
  'pergunta_186_alternativa_1':'Exclui os beneficiários das classes seguintes.',
  'pergunta_186_alternativa_2':'Não exclui os pais em nenhuma hipótese.',
  'pergunta_186_alternativa_3':'Suspende automaticamente as pensões dos filhos.',
  'pergunta_186_alternativa_4':'Concede prioridade aos pais sobre o cônjuge.',
  'pergunta_186_resposta_correta':'Exclui os beneficiários das classes seguintes.',
  'pergunta_186_justificativa':'Art. 9º, §1º e Art. 10',


  //----------------------------------
  'pergunta_187':'Havendo vários titulares à pensão, o valor será distribuído:',
  'pergunta_187_alternativa_1':'Em partes iguais entre os beneficiários habilitados, ressalvada hipótese legal específica.',
  'pergunta_187_alternativa_2':'Preferencialmente ao cônjuge, excluindo os demais.',
  'pergunta_187_alternativa_3':'Conforme a ordem de idade.',
  'pergunta_187_alternativa_4':'Metade ao cônjuge e metade aos filhos, sempre.',
  'pergunta_187_resposta_correta':'Em partes iguais entre os beneficiários habilitados, ressalvada hipótese legal específica.',
  'pergunta_187_justificativa':'Art. 9º, §6º',


  //----------------------------------
  'pergunta_188':'Ressalvadas aposentadorias de cargos acumuláveis, a LC 241 veda:',
  'pergunta_188_alternativa_1':'A percepção de mais de uma aposentadoria à conta do RPPS do art. 40 da CF.',
  'pergunta_188_alternativa_2':'A cumulação de pensão com aposentadoria em qualquer hipótese.',
  'pergunta_188_alternativa_3':'A aposentadoria compulsória.',
  'pergunta_188_alternativa_4':'A aposentadoria especial.',
  'pergunta_188_resposta_correta':'A percepção de mais de uma aposentadoria à conta do RPPS do art. 40 da CF.',
  'pergunta_188_justificativa':'Art. 15',


  //----------------------------------
  'pergunta_189':'A inscrição do segurado obrigatório dar-se-á:',
  'pergunta_189_alternativa_1':'Na data de início do exercício do cargo efetivo.',
  'pergunta_189_alternativa_2':'Após o estágio probatório.',
  'pergunta_189_alternativa_3':'Somente após 90 dias.',
  'pergunta_189_alternativa_4':'Mediante requerimento do servidor.',
  'pergunta_189_resposta_correta':'Na data de início do exercício do cargo efetivo.',
  'pergunta_189_justificativa':'Art. 8º',


  //----------------------------------
  'pergunta_190':'A inscrição do dependente será efetuada:',
  'pergunta_190_alternativa_1':'Mediante requerimento do segurado, na forma do regulamento.',
  'pergunta_190_alternativa_2':'De ofício, pela Administração.',
  'pergunta_190_alternativa_3':'Apenas por decisão judicial.',
  'pergunta_190_alternativa_4':'Pelo sindicato.',
  'pergunta_190_resposta_correta':'Mediante requerimento do segurado, na forma do regulamento.',
  'pergunta_190_justificativa':'Art. 12',


  //----------------------------------
  'pergunta_191':'Perde a qualidade de beneficiário quem:',
  'pergunta_191_alternativa_1':'Falecer; cessar a invalidez; ou, sendo filho, casar-se, emancipar-se ou atingir a idade-limite legal.',
  'pergunta_191_alternativa_2':'Apenas por decisão administrativa.',
  'pergunta_191_alternativa_3':'Somente por decisão judicial.',
  'pergunta_191_alternativa_4':'Quando o instituidor se aposentar.',
  'pergunta_191_resposta_correta':'Falecer; cessar a invalidez; ou, sendo filho, casar-se, emancipar-se ou atingir a idade-limite legal.',
  'pergunta_191_justificativa':'Art. 13',


  //----------------------------------
  'pergunta_192':'A perícia biopsicossocial é composta por:',
  'pergunta_192_alternativa_1':'Profissionais de saúde necessários, incluindo médicos, psicólogos e assistentes sociais.',
  'pergunta_192_alternativa_2':'Apenas médico perito.',
  'pergunta_192_alternativa_3':'Médico e advogado.',
  'pergunta_192_alternativa_4':'Somente assistente social.',
  'pergunta_192_resposta_correta':'Profissionais de saúde necessários, incluindo médicos, psicólogos e assistentes sociais.',
  'pergunta_192_justificativa':'Art. 20, §4º',


  //----------------------------------
  'pergunta_193':'Para a média de proventos, as remunerações consideradas terão seus valores:',
  'pergunta_193_alternativa_1':'Atualizados mês a mês pelo índice aplicado aos salários de contribuição do RGPS.',
  'pergunta_193_alternativa_2':'Congelados desde 07/1994.',
  'pergunta_193_alternativa_3':'Corrigidos apenas anualmente, sem índice.',
  'pergunta_193_alternativa_4':'Não sofrem atualização.',
  'pergunta_193_resposta_correta':'Atualizados mês a mês pelo índice aplicado aos salários de contribuição do RGPS.',
  'pergunta_193_justificativa':'Art. 3º, §1º',


  //----------------------------------
  'pergunta_194':'A base de cálculo da média inclui a remuneração nas competências a partir de julho de 1994 em que não tenha havido contribuição para o RPPS, quando o servidor estava no cargo efetivo:',
  'pergunta_194_alternativa_1':'Certo.',
  'pergunta_194_alternativa_2':'Errado.',
  'pergunta_194_alternativa_3':'Certo, apenas para comissionados.',
  'pergunta_194_alternativa_4':'Errado, por ser sempre a última remuneração.',
  'pergunta_194_resposta_correta':'Certo.',
  'pergunta_194_justificativa':'Art. 3º, §2º',


  //----------------------------------
  'pergunta_195':'A comprovação das remunerações para cálculo do benefício pode ocorrer por:',
  'pergunta_195_alternativa_1':'Documento do regime ao qual esteve vinculado ou, na falta, outro documento público, passível de confirmação.',
  'pergunta_195_alternativa_2':'Declaração verbal do servidor.',
  'pergunta_195_alternativa_3':'Somente contracheques dos últimos 12 meses.',
  'pergunta_195_alternativa_4':'Qualquer documento particular, sem confirmação.',
  'pergunta_195_resposta_correta':'Documento do regime ao qual esteve vinculado ou, na falta, outro documento público, passível de confirmação.',
  'pergunta_195_justificativa':'Art. 3º, §3º',


  //----------------------------------
  'pergunta_196':'Integram as exclusões do salário-de-contribuição, conforme a LC 241:',
  'pergunta_196_alternativa_1':'Auxílio por diferença de caixa; adicional noturno; gratificações de insalubridade, penosidade e periculosidade; função gratificada ou cargo em comissão.',
  'pergunta_196_alternativa_2':'Vencimento básico e gratificação natalina.',
  'pergunta_196_alternativa_3':'Abono de permanência e vencimento básico.',
  'pergunta_196_alternativa_4':'Horas extras e vencimento básico.',
  'pergunta_196_resposta_correta':'Auxílio por diferença de caixa; adicional noturno; gratificações de insalubridade, penosidade e periculosidade; função gratificada ou cargo em comissão.',
  'pergunta_196_justificativa':'Art. 4º, VII',


  //----------------------------------
  'pergunta_197':'A pensão ao cônjuge divorciado, separado judicialmente ou de fato depende de:',
  'pergunta_197_alternativa_1':'Percepção de pensão alimentícia estabelecida judicialmente.',
  'pergunta_197_alternativa_2':'Apenas comprovação de vínculo anterior, sem alimentos.',
  'pergunta_197_alternativa_3':'União estável após o divórcio.',
  'pergunta_197_alternativa_4':'Declaração do instituidor sem decisão judicial.',
  'pergunta_197_resposta_correta':'Percepção de pensão alimentícia estabelecida judicialmente.',
  'pergunta_197_justificativa':'Art. 9º, II',


  //----------------------------------
  'pergunta_198':'A distribuição do valor da pensão entre dependentes será:',
  'pergunta_198_alternativa_1':'Em partes iguais, ressalvada a hipótese de pensão alimentícia judicial.',
  'pergunta_198_alternativa_2':'Preferencial ao beneficiário mais idoso.',
  'pergunta_198_alternativa_3':'Majoritária ao cônjuge (70%).',
  'pergunta_198_alternativa_4':'Definida discricionariamente pelo gestor.',
  'pergunta_198_resposta_correta':'Em partes iguais, ressalvada a hipótese de pensão alimentícia judicial.',
  'pergunta_198_justificativa':'Art. 9º, §6º e Art. 28, parágrafo único',


  //----------------------------------
  'pergunta_199':'A existência de dependentes de uma classe exclui do direito à pensão os dependentes das classes seguintes.',
  'pergunta_199_alternativa_1':'Certo.',
  'pergunta_199_alternativa_2':'Errado.',
  'pergunta_199_alternativa_3':'Certo, apenas para filhos.',
  'pergunta_199_alternativa_4':'Errado, pois sempre há cumulação.',
  'pergunta_199_resposta_correta':'Certo.',
  'pergunta_199_justificativa':'Art. 10',


  //----------------------------------
  'pergunta_200':'É instituído o Fundo de Aposentadoria e Pensão do Servidor – FAPS –, cuja administração compete:',
  'pergunta_200_alternativa_1':'Ao IPAM de Caxias do Sul, como órgão gestor do regime próprio.',
  'pergunta_200_alternativa_2':'À Secretaria Municipal da Fazenda.',
  'pergunta_200_alternativa_3':'À Câmara Municipal, em gestão compartilhada com o Executivo.',
  'pergunta_200_alternativa_4':'Ao Tesouro Nacional.',
  'pergunta_200_resposta_correta':'Ao IPAM de Caxias do Sul, como órgão gestor do regime próprio.',
  'pergunta_200_justificativa':'Art. 5º'

    
}

