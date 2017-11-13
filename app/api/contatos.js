var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('Contato');

    api.adiciona = function(req, res) {
        console.log(req.body); 
        model.create(req.body).then(function(contato) {
			res.json(contato);
		}, function(error) {
			console.log('Não foi possível efetuar o cadastramento');
			console.log(error);
			res.sendStatus(500);
		});

    };


    api.lista = function(req, res) {
        model.find()
		.then(function(contatos) {
			res.json(contatos);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});


    };

    api.buscaPorId = function(req, res) {
		console.log("Id: "+req.params.id)
        model.findById(req.params.id)
		.then(function(contato) {
			if (!contato) throw new Error('Foto não encontrada');
			res.json(contato);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
        




        };

    api.removePorId = function(req, res) {
		model.remove({'_id' : req.params.id})
		.then(function() {
			res.sendStatus(200);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

    };
 

    api.atualiza = function(req, res) {


    };

return api;

    }