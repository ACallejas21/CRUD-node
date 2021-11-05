import express from 'express'
import { consultaUsuario  } from '../controllers/prueba.js'

const router = express.Router()

// rutas para las vistas
// router.get('/', consultaUsuario , (req, res) => { 
//     res.render('hola', {user: req.user})
// })

router.get('/' , consultaUsuario)

// router.get('/' ,(req, res) => { 
//     res.render('index')
// })

export default router