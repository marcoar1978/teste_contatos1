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
    function ContatosRemoveComponent(_route, _contatoDAO, _router) {
        var _this = this;
        this.contato = [];
        this.remocaoOk = 'off';
        this.route = _route;
        this.router = _router;
        this.contatoDAO = _contatoDAO;
        this.route.params
            .subscribe(function (params) { _this.id = params['id']; _this.ret = params['ret']; });
        var conf = confirm("Deseja efetuar a remoção?");
        if (conf) {
            this.contatoDAO.removePorId(this.id).subscribe(function (result) { _this.contato = result; }, function (erros) { console.log(erros); });
            this.remocaoOk = "ok";
        }
        this.router.navigate(["/" + this.ret, this.remocaoOk]);
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