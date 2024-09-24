module.exports = (sequelize, Sequelize) => {
	const Catedratico = sequelize.define('catedratico', {	
	  id_catedratico: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  nombre_completo: {
			type: Sequelize.STRING
	  },
	  fecha_contratacion: {
			type: Sequelize.STRIN
  	},
	  fecha_nacimiento: {
			type: Sequelize.STRING
	  },
	  genero: {
			type: Sequelize.STRING
    },
		titulo: {
			type: Sequelize.STRING
	},
		salario: {
			type: Sequelize.INTEGER
	}

	});
	
	return Catedratico;
}