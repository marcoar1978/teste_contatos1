module.exports = function(app) {
	
	var api = app.api.contatos;

	app.route('/contatos')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/contatos/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId)
		.put(api.atualiza);

	app.route('/contatosPorNome/:nome')
		.get(api.buscaPorNome)		
};