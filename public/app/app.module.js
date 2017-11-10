"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var pag1_component_1 = require('./pag1/pag1.component');
//import { Pag2Component } from './pag2/pag2.component';
var cabecalho_component_1 = require('./cabecalho/cabecalho.component');
var inc_contato_component_1 = require('./inclusao/inc_contato.component');
var lista_contatos_component_1 = require('./lista_contatos/lista_contatos.component');
var contatos_detalhes_component_1 = require('./contatos_detalhes/contatos_detalhes.component');
var contatos_remove_component_1 = require('./contatos_remove/contatos_remove.component');
var contato_service_1 = require('./entidades/contato.service');
var contatoDAO_service_1 = require('./entidades/contatoDAO.service');
require('rxjs/add/operator/map');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routes_1.routing],
            declarations: [app_component_1.AppComponent,
                pag1_component_1.Pag1Component,
                cabecalho_component_1.CabecalhoComponent,
                inc_contato_component_1.IncContatoComponent,
                lista_contatos_component_1.ListaContatosComponent,
                contatos_detalhes_component_1.ContatosDetalhesComponent,
                contatos_remove_component_1.ContatosRemoveComponent],
            providers: [contato_service_1.Contato, contatoDAO_service_1.ContatoDAO],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map