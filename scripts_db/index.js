const users = localStorage.getItem('users')

const db = {
    users: [{
        name: "Cris",
        email: "cris@gmail.com",
        password: "12345Cr!ss",
        user_type: "normal"
    },
    {
        name: "admin",
        email: "admin@admin.com",
        password: "12345Admin!",
        user_type: "admin"
    }],

    article: [{
            id : 1,
            author : "fulano",
            data : "01/02/2021",
            title : "Menu acessível",
            category: "categoria1",
            content :   '<p>\
                            <h1>Title</h1>\
                            lorem….\
                            <img src="" />\
                        </p>'
    }]
}

if (users) {
    db.users = JSON.parse(users)
}

export { db }