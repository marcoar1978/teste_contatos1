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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var ContatoDAO = (function () {
    function ContatoDAO(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    ContatoDAO.prototype.cadastra = function (contato) {
        return this.http.post("/contatos", JSON.stringify(contato), { headers: this.headers });
    };
    ContatoDAO.prototype.lista = function () {
        return this.http.get("/contatos").map(function (res) { return res.json(); });
    };
    ContatoDAO.prototype.buscaPorId = function (id) {
        return this.http.get("/contatos/" + id).map(function (res) { return res.json(); });
        //alert(id);
    };
    ContatoDAO = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContatoDAO);
    return ContatoDAO;
}());
exports.ContatoDAO = ContatoDAO;
//# sourceMappingURL=contatoDAO.service.js.map