import con from '../database/connection.js'

export const consultaMunicipios = async (req, res) => {

    // consultas preparadas
    con.query(`SELECT idMunicipio, nombreMunicipio, codigoMunicipio
    FROM municipio`, async (err, result) => {
        res.render('municipios', {municipios: result})
    })
}

export const guardarMunicipios =  (req, res) => {
    const {nombre, codigo} = req.body

    // consultas preparadas
    con.query(`INSERT INTO municipio
    (nombreMunicipio, codigoMunicipio)
    VALUES(?, ?)`,[nombre, codigo],  (err, result) => {
        res.redirect('/municipios')
    })
}

export const eliminarMunicipios = async (req, res) => {

    // consultas preparadas
    con.query('DELETE FROM municipio WHERE idMunicipio= ?',[req.params.id], async (err, result) => {
        res.redirect('/municipios')
    })

    
}

export const consMuni = async (req, res) => {

    // consultas preparadas
    con.query(`SELECT idMunicipio, nombreMunicipio, codigoMunicipio
    FROM municipio WHERE idMunicipio = ?`,[req.params.id] , async (err, result) => {
        res.render('editarMunicipio', {municipio: result})
    })

}

export const actualizarMunicipio = async (req, res) => {

    const { nombre, codigo} = req.body

    // consultas preparadas
    con.query('UPDATE municipio SET nombreMunicipio=?, codigoMunicipio=? WHERE idMunicipio = ?',[nombre,codigo,req.params.id] , async (err, result) => {
        if(err){
            console.log(err);
        }
        res.redirect('/municipios')
    })
}

