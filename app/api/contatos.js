var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('Contato');

    api.adiciona = function(req, res) {

    };


    api.lista = function(req, res) {

    };

    api.buscaPorId = function(req, res) {

    };

    api.removePorId = function(req, res) {


    };
 

    api.atualiza = function(req, res) {


    };

return api;

    }