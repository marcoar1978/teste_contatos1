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
var ContatosDetalhesComponent = (function () {
    function ContatosDetalhesComponent(_router, contatoDAO) {
        var _this = this;
        this.contato = [];
        this.route = _router;
        this.contatoDAO = contatoDAO;
        this.route.params
            .subscribe(function (params) { _this.id = params['id']; });
        this.contatoDAO.buscaPorId(this.id).subscribe(function (result) { _this.contato = result; }, function (erros) { console.log(erros); });
        //this.contatoDAO.buscaPorId("teste ok");
        // this.num = this.contato.length; 
    }
    ContatosDetalhesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contatos_detalhes',
            templateUrl: './contatos_detalhes.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, contatoDAO_service_1.ContatoDAO])
    ], ContatosDetalhesComponent);
    return ContatosDetalhesComponent;
}());
exports.ContatosDetalhesComponent = ContatosDetalhesComponent;
//# sourceMappingURL=contatos_detalhes.component.js.map