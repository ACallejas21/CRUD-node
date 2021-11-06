import con from '../database/connection.js'

let datosMunicipios
con.query(`SELECT idMunicipio, nombreMunicipio, codigoMunicipio
FROM municipio`, (err, result) => {
    datosMunicipios = result
})


export const consultaUsuario = async (req, res) => {

    // consultas preparadas
    con.query(`SELECT cliente.idCliente , cliente.nombreCliente , cliente.apellidoCliente , cliente.telefonoCliente , cliente.correoCliente , municipio.nombreMunicipio 
    FROM cliente
    INNER JOIN municipio ON cliente.Municipio=municipio.idMunicipio ORDER BY idCliente asc`, async (err, result) => {
        res.render('clientes', {clientes: result})
    })

    
}

export const guardarCliente = (req, res,) => {

    const { nombre, apellido, telefono, correo, municipio} = req.body

     // construir la data que será insertada
     const data = {
        nombreCliente: nombre,
        apellidoCliente: apellido,
        telefonoCliente: telefono,
        correoCliente: correo,
        Municipio : municipio
    }
    
    con.query('INSERT INTO cliente SET ?',data, (error, resultado) => {
        if (error) {
            console.log(error)
            return
        }
        res.redirect('/clientes')
       
    })

    //res.send(req.body)
    
}

export const eliminarCliente = async (req, res) => {


    //console.log(req.params.id);
    // consultas preparadas
    con.query('DELETE FROM cliente WHERE idCliente= ?',[req.params.id], async (err, result) => {
        res.redirect('/clientes')
    })

    
}


export const consultaCliente = async (req, res) => {

    // consultas preparadas
    con.query(`SELECT cliente.idCliente , cliente.nombreCliente , cliente.apellidoCliente , cliente.telefonoCliente , cliente.correoCliente ,municipio.idMunicipio, municipio.nombreMunicipio 
    FROM cliente
    INNER JOIN municipio ON cliente.Municipio=municipio.idMunicipio WHERE cliente.idCliente=?`,[req.params.id] , async (err, result) => {
        res.render('editarCliente', {clientes: result, municipios: datosMunicipios})
    })

}

export const actualizarCliente = async (req, res) => {

    const { nombre, apellido, telefono, correo, municipio} = req.body



    // consultas preparadas
    con.query('UPDATE cliente SET nombreCliente=?, apellidoCliente=?, telefonoCliente=?, correoCliente=?, Municipio=?  WHERE idCliente = ?',[nombre,apellido,telefono,correo,municipio,req.params.id] , async (err, result) => {
        if(err){
            console.log(err);
        }
        res.redirect('/clientes')
    })
}


export const consultaMunicipio = async (req, res) => {

    // consultas preparadas
    con.query(`SELECT idMunicipio, nombreMunicipio, codigoMunicipio
    FROM municipio`, async (err, result) => {
        res.render('agregarCliente', {municipios: result})
    })

}