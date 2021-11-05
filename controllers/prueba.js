import con from '../database/connection.js'

var user

export const consultaUsuario = async (req, res) => {
    const idCliente = 1;

    // consultas preparadas
    con.query('SELECT nombreCliente FROM cliente WHERE idcliente = ?', [idCliente], async (err, result) => {
        
        user = result[0]

    })

    res.render('clientes', {usuario: user})
}
