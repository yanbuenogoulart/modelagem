const conn = require('./db/conn');

const { Compras, Usuarios, Produtos } = require('./model/rel');

async function sync() {
  try {
    await conn.sync({ force: true }); // força recriação da estrutura no banco
    console.log('Banco sincronizado com sucesso!');
  } catch (error) {
    console.error('Erro ao sincronizar banco:', error);
  } finally {
    conn.close();
  }
}

sync();