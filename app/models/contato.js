var mongoose = require('mongoose');

var schema = mongoose.Schema({

	nome: {
		type: String,
		required: true
	},
	telefone: {
		type: String,
		
	},
	email: {
		type: String,
		
	}
});

mongoose.model('Contato', schema);