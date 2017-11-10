import {Component, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Contato} from "../entidades/contato.service";
import {ContatoDAO} from "../entidades/contatoDAO.service";

@Component({
    moduleId: module.id,
    selector: 'contatos_detalhes',
    templateUrl : './contatos_detalhes.component.html';

})

export class ContatosDetalhesComponent{
     route: ActivatedRoute;
     contato:Contato[] = [];
     contatoDAO:ContatoDAO;
     id:string;
     num:Number;

     constructor(_router: ActivatedRoute, contatoDAO:ContatoDAO ){
        this.route = _router;
        this.contatoDAO = contatoDAO;

        this.route.params
        .subscribe(params => {  this.id = params['id'];   });
        
         this.contatoDAO.buscaPorId(this.id).subscribe(result => {this.contato = result}, erros => {console.log(erros)} );
         //this.contatoDAO.buscaPorId("teste ok");


       // this.num = this.contato.length; 
        }



}