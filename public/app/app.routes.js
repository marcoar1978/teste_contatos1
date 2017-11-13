"use strict";
var router_1 = require('@angular/router');
var pag1_component_1 = require('./pag1/pag1.component');
var inc_contato_component_1 = require('./inclusao/inc_contato.component');
var lista_contatos_component_1 = require('./lista_contatos/lista_contatos.component');
var contatos_detalhes_component_1 = require('./contatos_detalhes/contatos_detalhes.component');
var contatos_remove_component_1 = require('./contatos_remove/contatos_remove.component');
var contatos_cons_nome_component_1 = require('./contatos_cons_nome/contatos_cons_nome.component');
var appRoutes = [
    { path: '', component: pag1_component_1.Pag1Component },
    { path: 'inc_contato', component: inc_contato_component_1.IncContatoComponent },
    { path: 'lista_contato', component: lista_contatos_component_1.ListaContatosComponent },
    { path: 'lista_contato/:remocao', component: lista_contatos_component_1.ListaContatosComponent },
    { path: 'det_contato/:id', component: contatos_detalhes_component_1.ContatosDetalhesComponent },
    { path: 'remove_contato/:id', component: contatos_remove_component_1.ContatosRemoveComponent },
    { path: 'contatos_cons_nome', component: contatos_cons_nome_component_1.ContatosConsNomeComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map