module.exports = (sequelize, Sequelize) => {
	const Book = sequelize.define('book', {	
	  id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  titulo: {
			type: Sequelize.STRING
	  },
	  editorial: {
			type: Sequelize.STRING
  	},
	  autor: {
			type: Sequelize.STRING
	  },
	  genero: {
			type: Sequelize.STRING
    },
	pais_autor: {
		type: Sequelize.STRING
},
paginas: {
	type: Sequelize.INTEGER
},
anio: {
	type: Sequelize.INTEGER
},
precio: {
	type: Sequelize.DOUBLE
},
    copyrightby: {
      type: Sequelize.STRING,
      defaultValue: 'UMG Antigua'
    }
	});
	
	return Book;
}