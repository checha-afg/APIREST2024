const db = require('../config/db.config.js');
const Book = db.Book;

exports.create = (req, res) => {
    let book = {};

    try{
        // Building Customer object from upoading request's body
        book.titulo = req.body.titulo; //string
        book.editorial = req.body.editorial;
        book.autor = req.body.autor;
        book.genero = req.body.genero;
        book.pais_autor = req.body.pais_autor;
        book.paginas = req.body.paginas;
        book.anio = req.body.anio;
        book.precio = req.body.precio;

        // Save to MySQL database
        Book.create(book).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Upload Successfully a Book with id = " + result.id,
                book: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

/*exports.retrieveAllSongs = (req, res) => {
    // find all Customer information from 
    Song.findAll()
        .then(songInfos => {
            res.status(200).json({
                message: "Get all Songs' Infos Successfully!",
                song: songInfos
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

exports.getSongById=(req, res)=> {
  // find all Customer information from 
  let songId = req.params.id;
  Song.findByPk(songId)
      .then(song => {
          res.status(200).json({
              message: " Successfully Get a Song with id = " + songId,
              song: song
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
 
exports.updateById= async (req, res) =>{
    try{
        let songId = req.params.id;
        let song = await Song.findByPk(songId);
    
        if(!song){
            // return a response to client
            res.status(404).json({
                message: "Not Found for updating a song with id = " + songId,
                song: "",
                error: "404"
            });
        } else {    
            // update new change to database
            let updatedObject = {
                songname: req.body.songname,
                description: req.body.description,
                artist: req.body.artist,
                lenghtseconds: req.body.lenghtseconds,
                extension: req.body.extension,
                album: req.body.album,
                year: req.body.year,
            }

            let result = await Song.update(updatedObject, {returning: true, where: {id: songId}});
            
            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> Can not update a song with id = " + req.params.id,
                    error: "Can NOT Updated",
                });
            }

            res.status(200).json({
                message: "Update successfully a song with id = " + songId,
                customer: updatedObject,
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Can not update a song with id = " + req.params.id,
            error: error.message
        });
    }
}

exports.deleteById=async(req, res)=> {
    try{
        let songId = req.params.id;
        let song = await Song.findByPk(songId);

        if(!song){
            res.status(404).json({
                message: "Does Not exist a Song with id = " + songId,
                error: "404",
            });
        } else {
            await song.destroy();
            res.status(200).json({
                message: "Delete Successfully a Song with id = " + songId,
                customer: song,
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Can NOT delete a Song with id = " + req.params.id,
            error: error.message,
        });
    }
}*/