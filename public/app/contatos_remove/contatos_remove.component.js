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
var router_1 = require('@angular/router');
var contatoDAO_service_1 = require("../entidades/contatoDAO.service");
var ContatosRemoveComponent = (function () {
    function ContatosRemoveComponent(_route, contatoDAO, _router) {
        var _this = this;
        this.contato = [];
        this.remocaoOk = 'ok';
        this.route = _route;
        this.router = _router;
        this.contatoDAO = contatoDAO;
        this.route.params
            .subscribe(function (params) { _this.id = params['id']; });
        //this.contatoDAO.buscaPorId(this.id).subscribe(result => {this.contato = result}, erros => {console.log(erros)} );
        this.router.navigate(['/lista_contato', this.remocaoOk]);
        //this.contatoDAO.buscaPorId("teste ok");
        // this.num = this.contato.length; 
    }
    ContatosRemoveComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contatos_remove',
            templateUrl: './contatos_remove.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, contatoDAO_service_1.ContatoDAO, router_1.Router])
    ], ContatosRemoveComponent);
    return ContatosRemoveComponent;
}());
exports.ContatosRemoveComponent = ContatosRemoveComponent;
//# sourceMappingURL=contatos_remove.component.js.map