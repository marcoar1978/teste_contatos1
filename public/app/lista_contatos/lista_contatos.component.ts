import {Component} from '@angular/core';

import {Contato} from "../entidades/contato.service";

import {ContatoDAO} from "../entidades/contatoDAO.service";

@Component({
    moduleId: module.id,
    selector: 'lista_contatos',
    templateUrl : './lista_contatos.component.html';

})

export class ListaContatosComponent{

    contatos:Contato[] = [];
    contatoDAO:ContatoDAO;
    
    constructor(contatoDAO:ContatoDAO ){
         
        this.contatoDAO = contatoDAO;
        this.contatoDAO.lista().subscribe(result => {this.contatos = result}, erro => {console.log(erro)});
        
        
        }

}