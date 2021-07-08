const users = localStorage.getItem('users')
const articles = localStorage.getItem('articles')

const db = {
    users: [{
        name: "Cris",
        email: "cris@gmail.com",
        password: "12345Cr!ss",
        favoritiesArticles: [],
        user_type: "normal"
    },
    {
        name: "admin",
        email: "admin@admin.com",
        password: "12345Admin!",
        favoritiesArticles: [],
        user_type: "admin"
    }],

    articles: [{
        id: '1',
        author: "fulano",
        data: "01/02/2021",
        title: "O que é acessibilidade?",
        category: "categoria1",
        content: `Na era digital e no período em que a humanidade atinge o ápice do compartilhamento de\
        informações e da democratização do conhecimento, incluir-se no meio e estar atento às\
        notícias é tão fundamental como nunca antes foi. Nessa situação, é imprescindível que o\
        acesso a ferramentas que possibilitam tal democratização seja igualitário - ou, com todos os\
        esforços necessários, o mais transparente possível.\
        Dessa forma, entra em voga o conceito de acessibilidade digital, nos remetendo a ideia de\
        oferecer meios para que pessoas, principalmente com algum tipo de deficiência, tenham\
        autonomia para realizar atividades do dia a dia e não sejam esquecidas, abandonadas às\
        margens do progresso.\
        Formalmente, por definição, acessibilidade é a condição para que um indivíduo possa ter\
        segurança e autonomia total para utilizar um artefato (2021, UNOESC). No campo da Web,\
        foco do WWA, acessibilidade na Web significa tornar acessível a interação do indivíduo com\
        a rede e os websites, entrando em muitos conceitos de User Experience (UX) e User\
        Interface (UI).\
        Uma pesquisa realizada pela plataforma de dados Big Data Corp em conjunto com o\
        movimento web para todos revelou que menos de 1% dos sites brasileiros possuem alguma\
        ferramenta de acessibilidade (2020, Revista Galileu). Em contrapartida, cerca de 6,5\
        milhões de brasileiros possuem determinado tipo de deficiência visual (IBGE).\
        Ainda no Brasil, 31% dos usuários ainda navegam a uma velocidade lenta de internet, de\
        até 512 Kbps, segundo um estudo da The Nielsen Company, sobre o uso e qualidade das\
        conexões de banda larga. Para utilizar a internet, 40% da população brasileira utiliza\
        smartphones, segundo estudo da IAB Brasil.\
        Assim é explicitado que viver sem a internet, hoje em dia, é uma tarefa difícil, fazendo-se\
        necessários esforços de todas as áreas e setores para propagar a inclusão digital, desde\
        ações do próprio Estado até desenvolvedores e designers em seus projetos.\
        Em uma conversa com o YouTuber e jornalista Marcos Lima (do canal Histórias de Cego),\
        entre vários tópicos abordados, um em especial foi pontuado: ‘A acessibilidade não deve\
        ser uma solução, mas parte do processo de desenvolvimento do projeto’. Com isso, quer se\
        dizer que práticas que almejam a inclusão digital devem ser arquitetadas e pensadas\
        enquanto o projeto não é mais do que apenas uma visão, não sendo tratadas como uma\
        necessidade postergada, deixada de lado até que o momento seja oportuno para sua\
        implementação, vista apenas de um ponto de vista comercial.\
        Em adição à pauta, a W3C, World Wide Web Consortium, que desenvolve padrões\
        regulamentados para a Web e sua livre navegação, criou cláusulas que integram a WCAG\
        (Web Content Accessibility Guidelines) para guiar como projetos web devem ser\
        desenvolvidos a fim de garantir a acessibilidade digital. Esses critérios estão disponíveis no\
        próximo artigo do módulo.`
    },
    {
        id: '1234',
        author: 'Fulaninho',
        data: '26/07/2021',
        title: 'Como tornar seu site acessível',
        category: 'categoria1',
        content: `As Diretrizes de Acessibilidade de Conteúdo da Web (WCAG) são desenvolvidas por meio\
        da W3E em cooperação com indivíduos e organizações em todo o mundo, com o objetivo\
        de fornecer um único padrão compartilhado para acessibilidade de conteúdo da Web que\
        atenda às necessidades de indivíduos, organizações e governos internacionalmente’’.\
        Tais princípios têm como foco tornar a web e seu conteúdo mais acessível para,\
        principalmente, pessoas com algum tipo de deficiência (PCDs). O conteúdo, por si só, se\
        designa a qualquer tipo de informação contido numa página web, tais como:\
        ● informações naturais, como texto, imagens e sons\
        ● código ou marcação que define estrutura dos dados, apresentação, etc.\
        A última versão do WCAG é datada de maio de 2021, podendo ser conferida através do\
        link: https://www.w3.org/TR/WCAG22/.\
        O público alvo do projeto são:\
        ● Desenvolvedores de conteúdo da Web (autores de páginas, designers de sites, etc.)\
        ● Desenvolvedores de ferramentas de autoria da web\
        ● Desenvolvedores de ferramentas de avaliação de acessibilidade da web\
        ● Outros que desejam ou precisam de um padrão para acessibilidade na web,\
        incluindo acessibilidade móvel\
        Em resumo, para tornar um site acessível, alguns requerimentos são necessários, tais\
        como:\
        ➢ Todo o conteúdo que não seja considerado textual (imagens, áudios, vídeos, gifs,\
            etc) deve apresentar uma alternativa de texto ou semelhante, servindo ao mesmo\
            propósito, exceto em situações de controles e entrada de dados, captchas, mídias\
            baseadas em tempo, testes/provas ou experiências sensoriais.\
        Alternativas possíveis para vídeos:\
        ● Utilizar descrição por áudio (solução extremamente efetiva para pessoas com\
        algum tipo de deficiência visual)\
        ● Utilizar legendas\
        ● Utilizar linguagem de sinais\
        Restrições quanto a textos:\
        ● A apresentação visual de texto e imagens de texto devem ter uma relação de\
        contraste de pelo menos 4,5: 1, exceto para logotipos, textos grandes ou\
        texto ou imagens de texto que fazem parte de um componente inativo da\
        interface do usuário\
        ● Exceto para legendas e imagens de texto , o texto pode ser redimensionado\
        sem tecnologia de assistência em até 200 por cento sem perda de conteúdo\
        ou funcionalidade.\
        ● Imagens de texto são usadas apenas para decoração pura ou onde uma\
        apresentação particular do texto é essencial para a informação que está\
        sendo transmitida.\
        ➢ Os componentes da interface do usuário (UI) e a navegação devem estar\
        operacionais, com as funcionalidades operando perfeitamente, configurando a\
        operacionalidade. Assim:\
        ● Toda a funcionalidade do conteúdo deve ser operada por meio de uma\
        interface de teclado sem requisitar um tempo mínimo para o processamento\
        de uma operação ou funcionalidade, exceto em situações que o caminho do\
        site depende disso.\
        ● Caso o site exigir mais do que setas/cursores não modificados ou teclas de\
        tab, o usuário deve ser avisado sobre o método para afastar o foco da tela.\
        ● Permitir o ajuste de tempo necessário para que o usuário consiga executar\
        uma funcionalidade.\
        ● Evitar imagens ‘pop-up’ ou que piscam frequentemente, com grande\
        saturação.\
        ➢ Torne o conteúdo do texto legível e compreensível, dando ênfase no que é\
        importante sem desvirtuar a atenção do usuário.\
        ➢ O conteúdo deve ser robusto o suficiente para que possa ser interpretado por uma\
        ampla variedade de agentes de usuário, incluindo tecnologias de assistência (como\
        leitores de tela).\
        ➢ Conformidade com as normas do WCAG descritas.`
    },
    {
        id: '564u989',
        author: 'João',
        data: '26/07/2021',
        title: 'Visibilidade no Google',
        category: 'categoria3',
        content:`Como forma de classificar a navegabilidade do site e fazer valer os princípios da\
        heurística, os buscadores, como o Google, em geral dão preferência para sites que\
        apresentam traços acessíveis para todos. Dessa forma, a maneira como o seu site é\
        disposto em código, utilizando-se das marcações de maneira correta, disposição de mídias,\
        se imagens e vídeos apresentam texto alternativo, tudo isso tem impacto na probabilidade\
        do site em questão ser recomendado para mais pessoas, angariando mais cliques. ‘’Possuir\
        um site acessível aos internautas, significa que o mesmo tem relevância para o buscador’’.\
        A seguir, segue um exemplo do uso de marcadores corretos usando HTML:`
    },
    {
        id: '564ukd0sa',
        author: 'João',
        data: '26/07/2021',
        title: 'A tag alt',
        category: 'categoria3',
        content:`Algumas alternativas para tornar seu site acessível já se encontram na própria área de\
        trabalho ou na tecnologia vanilla, de origem. Uma delas é a tag HTML ‘alt’, que referencia\
        um texto alternativo para, por exemplo, uma imagem que não pode ser mostrada na tela,\
        seja por motivos de UX ou pessoais do próprio usuário.\
        O padrão da sintaxe é o seguinte:\
        <img src= (caminho da imagem) alt = ‘Descrição da imagem’>\
        Para que o propósito da tag seja cumprido, é importante que o desenvolvedor se atente que\
        o atributo pode também ser usado em outras tags HTML, como a <a>. Dessa forma,\
        O texto deve explicar para onde o link vai se a imagem estiver dentro de um elemento <a>.\
        Segue um exemplo:\
        Utilizando-se dessa ferramenta, o usuário com algum tipo de dificuldade, que o\
        impossibilitaria de conseguir ter proveito de todo o site por uma gama de razões, pode usar,\
        por exemplo, leitores de tela que considerarão o conteúdo da tag alt.`
    },
    {
        id: '564uo000',
        author: 'João',
        data: '26/07/2021',
        title: 'Leitores de tela',
        category: 'categoria3',
        content:`Um leitor de tela, instrumento utilizado para que usuários com algum tipo de obstáculo\
        consigam se integrar na web e em outros ambientes digitais, é uma ferramenta que interage\
        com o sistema operacional do dispositivo, interpreta todas as informações que contenham\
        texto e transforma-as em uma resposta por áudio, voz, utilizando um sintetizador embutido.\
        Existem vários leitores de tela disponíveis no mercado, pagos e grátis, como o Virtual\
        Vision.\
        Assim, é importante que o desenvolvedor tenha conhecimento dessa alternativa na hora\
        de implementar funcionalidades em seu site, utilizando-se de outras ferramentas para\
        proporcionar a melhor experiência de usuário possível.\
        Os leitores de tela, ou também chamados leitores de ecrã, são enquadrados em um tipo\
        de tecnologia assistiva (tecnologias que podem permitir assistência e reabilitação e\
        melhorar a qualidade de vida de pessoas com deficiência).\
        Alguns sistemas operacionais já disponibilizam tais leitores, como: o Microsoft Windows\
        tem o Microsoft Narrator, a Samsung possui o Samsung Text-to-Speech, os sistemas\
        operacionais Mac OS X, iOS, e tvOS incluem o leitor de tela VoiceOver, enquanto o Google\
        Android inclui o Google Text-to-Speech.\
        Além desses, há algumas outras alternativas disponíveis no Brasil: o DOSVOX (sistema\
        open-source mais usado no Brasil), o Orca, o NVDA (que tem suporte para vários idiomas),\
        JAWS, etc.`
    },
    {
        id: '989',
        author: 'João',
        data: '26/07/2021',
        title: 'Pensando no conteúdo',
        category: 'categoria3',
        content:`O código e os mecanismos de outras tecnologias não são os únicos fatores essenciais para\
        facilitar a acessibilidade. O conteúdo e a maneira como ele é apresentado é igualmente\
        importante, e há algumas coisas que escritores e desenvolvedores podem fazer para tornar\
        o site mais escalável:\
        Saiba estruturar de maneira concisa seu texto e dê um título que tenha impacto e que\
        apresente, ao mesmo tempo, em integra, a essência do conteúdo. Além de ajudar nos\
        mecanismos de buscas, facilitará a compreensão de outras pessoas e melhorará a\
        assistência aos leitores de tela! Além de ser uma boa prática na escrita, você também\
        estará ajudando outras pessoas(em paralelo, nas palavras de Arthur Schopenhauer, filósofo\
        alemão, ‘’um bom título é original, carregado de sentido e não de falsos caminhos. Mais do\
        que tudo, um bom título assegura que você irá atingir sua audiência’’).\
        Mantenha a linguagem simples em um nível que acompanhe a maioria da população no\
        quesito de instrução. Se a linguagem necessariamente tem de ser técnica, apresente\
        formas alternativas de outras pessoas entrarem em contato com ela (como glossários ou\
        outros artigos de referência).\
        Nem todos os padrões foram feitos para serem derrubados: alinhe sempre o texto na\
        esquerda!\
        Torne seus links descritivos, evitando referenciá-los como ‘Clique aqui’ ou ‘Mais\
        informações’. Isso também ajudará leitores de tela.\
        Considere também o contraste das cores do seu site. Quanto maior o contraste, mais difícil\
        será a visualização do conteúdo - além de prejudicar, em especial, pessoas com algum tipo\
        de deficiência visual mais branda. Há ferramentas grátis e online na internet que podem\
        auxiliá-lo nessa tarefa, como o WebAim (https://webaim.org/resources/contrastchecker/).\
        Boa escrita!`
    },
    {
        id: '101',
        author: 'João',
        data: '26/07/2021',
        title: 'Como lidar com arquivos',
        category: 'categoria3',
        content:`O nome dos arquivos disponíveis no site (imagens, textos, vídeos, entre outros) também\
        deve ser simples e descrevê-los sucintamente, sendo relacionado com palavras-chave que\
        a página esteja promovendo. Assim, PDFs, arquivos Word, imagens jpeg, png, svgs, vídeos\
        em mp4, avi ou qualquer outro recurso de mídia com um formato, devem ser especificados.\
        A razão para a medida está intimamente relacionada com o auxílio a leitores de tela e ao\
        mecanismo de ranqueamento do Google (já descrito anteriormente).`
    },
    {
        id: '10171',
        author: 'João',
        data: '26/07/2021',
        title: 'O que é Marketing Inclusivo?',
        category: 'categoria3',
        content: `Com o passar do tempo, a cultura do Marketing vem se alterando e, junto com ela, uma\
        pauta delicada ganha mais espaço na área: a inclusão de outros grupos sociais - de alguma\
        forma marginalizados no decorrer da história. Assim, o assunto passou a ser uma\
        ferramenta de comunicação com o grande público por parte de grandes, médias e\
        pequenas empresas e companhias: esse é o chamado marketing inclusivo.\
        Nas palavras do CEO da GhFly, Gustavo Hana, ‘’o Marketing Inclusivo é um conjunto de\
        ações que uma organização pode promover para favorecer a inclusão social’’. No mais, o\
        exercício desse fenômeno auxilia pessoas de diferentes backgrounds a se conectarem com\
        o mercado e exercer o poder de compra, sendo também representadas como protagonistas\
        por mídias veiculadas pelas empresas em diferentes plataformas. Em alguns casos, essa\
        prática é feita indiscriminadamente e é utilizada com o intuito apenas comercial, mas suas\
        propostas não devem ser deixadas de lado em momento algum.\
        Além de acrescentar ao consumidor, acolher pessoas com experiências diferentes auxilia\
        companhias na medida em que torna a pluralidade de ideias uma realidade próxima e\
        acessível. Portanto, é uma via de mão dupla em que todos têm algo a ganhar e nenhum\
        lado a perder. As marcas que apresentam posicionamentos claros e socialmente\
        responsáveis vêm também tendo uma afinidade maior com o público, principalmente com a\
        chamada Geração Z (denominação que compreende pessoas nascidas entre os anos de\
        1990 e 2010) segundo dados do Interactive Advertising Bureau (IAB).\
        A transparência, quando entra na esfera da opinião pública corretamente, agrega também\
        valor aos produtos e serviços em questão.\
        Como referência para se aprofundar mais sobre o tema, segue o artigo de Gustavo Hana sobre o tema:\
        https://www.mundodomarketing.com.br/artigos/gustavo-hana-/39069/mais-que-tendencia-marketing-inclusivo-de\
        ve-ser-prioridade-para-as-organizacoes.html\
        `
    }]
}

if (!users) {
    db.users = JSON.parse(users)
}

if(!articles) {
    console.log(articles)
    db.articles = JSON.parse(articles)
}

export { db }