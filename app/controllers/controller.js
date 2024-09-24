const db = require('../config/db.config.js');
const Catedratico = db.Catedratico;

exports.createCatedratico = (req, res) => {
    let catedratico = {};

    try{
        // Building Customer object from upoading request's body
        catedratico.id_catedratico = req.body.id_catedratico; //string
        catedratico.nombre_completo = req.body.nombre_completo;
        catedratico.fecha_contratacion = req.body.fecha_contratacion;
        catedratico.fecha_nacimiento = req.body.fecha_nacimiento;
        catedratico.genero = req.body.genero;
        catedratico.titulo = req.body.titulo;
        catedratico.salario = req.body.salario;

        // Save to MySQL database
        Catedratico.create(catedratico).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Upload Successfully a Catedratico with id = " + result.id,
                catedratico: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.retrieveAllCatedraticos = (req, res) => {
    // find all Customer information from 
    Catedratico.findAll()
        .then(catedraticoInfos => {
            res.status(200).json({
                message: "Get all Cate Infos Successfully!",
                catedratico: catedraticoInfos
            });
        })
        . catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
}

exports.deleteCatedraticoById=async(req, res)=> {
    try{
        let catedraticoId = req.params.id;
        let catedratico = await Catedratico.findByPk(catedraticoId);

        if(!catedratico){
            res.status(404).json({
                message: "Does Not exist a cate with id = " + catedraticoId,
                error: "404",
            });
        } else {
            await catedratico.destroy();
            res.status(200).json({
                message: "Delete Successfully a cate with id = " + catedraticoId,
                customer: catedratico
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Can NOT delete a cate with id = " + req.params.id,
            error: error.message,
        });
    }
}