import express from 'express'
import { consultaUsuario, guardarCliente, eliminarCliente , consultaCliente, actualizarCliente , consultaMunicipio} from '../controllers/clientesController.js'

const router = express.Router()

// rutas para las vistas
// router.get('/', consultaUsuario , (req, res) => { 
//     res.render('hola', {user: req.user})
// })

router.get('/' ,(req, res) => { 
    res.render('index')
})




router.get('/clientes' , consultaUsuario)

router.get('/agregarCliente', consultaMunicipio)

router.get('/editarCliente/:id', consultaCliente )

router.post('/', guardarCliente )
router.post('/eliminarCliente/:id', eliminarCliente)
router.post('/actualizarCliente/:id', actualizarCliente)


export default router