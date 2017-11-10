import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Contato} from "../entidades/contato.service";

import {ContatoDAO} from "../entidades/contatoDAO.service";

@Component({
    moduleId: module.id,
    selector: 'lista_contatos',
    templateUrl : './lista_contatos.component.html';

})

export class ListaContatosComponent{
     route: ActivatedRoute;
     router:Router;
    contatos:Contato[] = [];
    contatoDAO:ContatoDAO;
    divHiddenRemocao:boolean = true;
    
    constructor(_route: ActivatedRoute, contatoDAO:ContatoDAO, _router: Router ){
        this.route = _route;
        this.router = _router;
        this.contatoDAO = contatoDAO;
       
        this.route.params
        .subscribe(params => {
            if(params['remocao'] == 'ok'){
                this.divHiddenRemocao = false;
                }

        });


        this.contatoDAO.lista().subscribe(result => {this.contatos = result}, erro => {console.log(erro)});
        
        
        }

}