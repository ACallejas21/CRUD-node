import express from 'express'
import { consultaUsuario, guardarCliente, eliminarCliente , consultaCliente, actualizarCliente , consultaMunicipio} from '../controllers/clientesController.js'
import { consultaMunicipios , guardarMunicipios, eliminarMunicipios , consMuni, actualizarMunicipio} from '../controllers/municipiosController.js'

const router = express.Router()

// rutas para las vistas
// router.get('/', consultaUsuario , (req, res) => { 
//     res.render('hola', {user: req.user})
// })

router.get('/' ,(req, res) => { 
    res.render('index')
})



//Rutas para clientes
router.get('/clientes' , consultaUsuario)
router.get('/agregarCliente', consultaMunicipio)
router.get('/editarCliente/:id', consultaCliente )

router.post('/guardarCliente', guardarCliente )
router.post('/eliminarCliente/:id', eliminarCliente)
router.post('/actualizarCliente/:id', actualizarCliente)

//Rutas para Municipios
router.get('/municipios' , consultaMunicipios)
router.get('/agregarMunicipio', (req, res) => {
    res.render('agregarMunicipio')
})
router.get('/editarMunicipio/:id', consMuni )

router.post('/guardarMunicipio', guardarMunicipios)
router.post('/EliminarMunicipio/:id', eliminarMunicipios)
router.post('/actualizarMunicipio/:id', actualizarMunicipio)


export default router