import { Router } from "express"
const router = Router()

//Enrutamiento
router.get('/', (req, res) => res.render('index', { title: 'My portafolio - Inicio'}))
router.get('/about', (req, res) => res.render('about', { title: 'Sobremi'}))
router.get('/portafolio', (req, res) => res.render('portafolio', { title: 'Portafolio'}))
router.get('/contact', (req, res) => res.render('contact', { title: 'Contacto'}))

export default router 