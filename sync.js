const conn = require('./db/conn')

function sync() {
    conn.sync({force: true}).then(()=> {
        console.log('Banco de dados sincronizado com sucesso!')
    }).catch((error)=> {
        console.error('Erro ao sincronizar o banco de dados:', error)
    }).finally(()=> {
        conn.close()
    })
}

sync()