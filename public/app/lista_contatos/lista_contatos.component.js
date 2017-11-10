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
var ListaContatosComponent = (function () {
    function ListaContatosComponent(contatoDAO) {
        var _this = this;
        this.contatos = [];
        this.contatoDAO = contatoDAO;
        this.contatoDAO.lista().subscribe(function (result) { _this.contatos = result; }, function (erro) { console.log(erro); });
    }
    ListaContatosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lista_contatos',
            templateUrl: './lista_contatos.component.html'
        }), 
        __metadata('design:paramtypes', [contatoDAO_service_1.ContatoDAO])
    ], ListaContatosComponent);
    return ListaContatosComponent;
}());
exports.ListaContatosComponent = ListaContatosComponent;
//# sourceMappingURL=lista_contatos.component.js.map