const express = require('express');
const router = express.Router();

const alumnoController = require('../controllers/alumnoController');

router.get('/', alumnoController.list);
router.get('/addAlumno', alumnoController.add);
router.post('/add', alumnoController.save);
router.get('/delete/:leg_alumno', alumnoController.delete);
router.get('/update/:leg_alumno', alumnoController.edit);
router.post('/update/:leg_alumno', alumnoController.update);
router.get('/consulta1',alumnoController.consulta1);
router.get('/consulta2',alumnoController.consulta2);
router.get('/consulta3',alumnoController.consulta3);
router.get('/consulta4',alumnoController.consulta4);
router.get('/consulta5',alumnoController.consulta5);

module.exports = router;