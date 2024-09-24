
let express = require('express');
let router = express.Router();
 
const catedratico = require('../controllers/controller.js');

router.post('/api/catedratico/create', catedratico.createCatedratico);
router.get('/api/catedratico/all', catedratico.retrieveAllCatedraticos);
router.delete('/api/catedratico/delete/:id', catedratico.deleteCatedraticoById);

module.exports = router;