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
var contatoDAO_service_1 = require("../entidades/contatoDAO.service");
var ContatosConsNomeComponent = (function () {
    function ContatosConsNomeComponent(_contatoDAO) {
        this.contatos = [];
        this.numContatos = this.contatos.length;
        this.mostraConsulta = true;
        this.contatoDAO = _contatoDAO;
    }
    ContatosConsNomeComponent.prototype.consulta = function (event) {
        var _this = this;
        event.preventDefault();
        this.contatoDAO.buscaPorNome(this.nome).subscribe(function (result) { _this.contatos = result; }, function (err) { console.log(err); });
        if (this.contatos.length > 0) {
            this.mostraConsulta = false;
        }
        else {
            this.mostraConsulta = true;
        }
    };
    ContatosConsNomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contatos_cons_nome',
            templateUrl: './contatos_cons_nome.component.html'
        }), 
        __metadata('design:paramtypes', [contatoDAO_service_1.ContatoDAO])
    ], ContatosConsNomeComponent);
    return ContatosConsNomeComponent;
}());
exports.ContatosConsNomeComponent = ContatosConsNomeComponent;
//# sourceMappingURL=contatos_cons_nome.component.js.map