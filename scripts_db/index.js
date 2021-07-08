const users = localStorage.getItem('users')
const articles = localStorage.getItem('articles')

const db = {
    users: [{
        name: "Cris",
        email: "cris@gmail.com",
        password: "12345Cr!ss",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quaerat voluptatibus quam? Magnam, repellat! Molestiae, voluptatem rem perspiciatis dolorem eligendi tempore deleniti fugit libero beatae quisquam. Quas, optio. Laudantium, explicabo.\
        Impedit, laudantium cum? Numquam facilis laborum enim tenetur maxime, distinctio maiores ullam commodi adipisci molestiae animi harum repudiandae minima reiciendis voluptas quo nulla nihil! Quia corrupti cumque voluptas necessitatibus quod!",
        favoritiesArticles: ['101', '564u989'],
        user_type: "normal"
    },
    {
        name: "admin",
        email: "admin@admin.com",
        password: "12345Admin!",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quaerat voluptatibus quam? Magnam, repellat! Molestiae, voluptatem rem perspiciatis dolorem eligendi tempore deleniti fugit libero beatae quisquam. Quas, optio. Laudantium, explicabo.\
        Impedit, laudantium cum? Numquam facilis laborum enim tenetur maxime, distinctio maiores ullam commodi adipisci molestiae animi harum repudiandae minima reiciendis voluptas quo nulla nihil! Quia corrupti cumque voluptas necessitatibus quod!",
        favoritiesArticles: [],
        user_type: "admin"
    }],

    articles: [
        {
            id: '101',
            author: 'João',
            data: '26/07/2021',
            title: 'Como lidar com arquivos',
            category: 'categoria3',
            content: `O nome dos arquivos disponíveis no site (imagens, textos, vídeos, entre outros) também\
            deve ser simples e descrevê-los sucintamente, sendo relacionado com palavras-chave que\
            a página esteja promovendo. Assim, PDFs, arquivos Word, imagens jpeg, png, svgs, vídeos\
            em mp4, avi ou qualquer outro recurso de mídia com um formato, devem ser especificados.\
            A razão para a medida está intimamente relacionada com o auxílio a leitores de tela e ao\
            mecanismo de ranqueamento do Google (já descrito anteriormente).`
        },
        {
            id: '564u989',
            author: 'João',
            data: '26/07/2021',
            title: 'Visibilidade no Google',
            category: 'categoria3',
            content: `Como forma de classificar a navegabilidade do site e fazer valer os princípios da\
            heurística, os buscadores, como o Google, em geral dão preferência para sites que\
            apresentam traços acessíveis para todos. Dessa forma, a maneira como o seu site é\
            disposto em código, utilizando-se das marcações de maneira correta, disposição de mídias,\
            se imagens e vídeos apresentam texto alternativo, tudo isso tem impacto na probabilidade\
            do site em questão ser recomendado para mais pessoas, angariando mais cliques. ‘’Possuir\
            um site acessível aos internautas, significa que o mesmo tem relevância para o buscador’’.\
            A seguir, segue um exemplo do uso de marcadores corretos usando HTML:`
        }
    ]
}

if (users) {
    db.users = JSON.parse(users)
    db.articles = JSON.parse(articles)
}

if (articles) {
    db.articles = JSON.parse(articles)
}

export { db }