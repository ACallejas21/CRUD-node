//Nos premite configurar las variables de entorno y que no den prblome al utilizar 
//importaciones 
import "./loadEnv.js"
import express from "express";
import router from "./routes/routes.js";
//puerto donde escucha express
const PORT = 11000;
//aplicacion (server) de express
const app = express();

//  definir el sistema de vistas(plantillas) a utilizar 
app.set('view engine', 'ejs')

//definir la ubicación de los archivos publicos
app.use(express.static('public'))

// Configuracion para procesar los formularios
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//routers
app.use('/',router)

//servidor express escuchando
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})