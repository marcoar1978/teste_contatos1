import {Component, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Contato} from "../entidades/contato.service";
import {ContatoDAO} from "../entidades/contatoDAO.service";

@Component({
    moduleId: module.id,
    selector: 'contatos_remove',
    templateUrl : './contatos_remove.component.html';

})

export class ContatosRemoveComponent{
     route: ActivatedRoute;
     router:Router;
     contato:Contato[] = [];
     contatoDAO:ContatoDAO;
     id:string;
     num:Number;
     remocaoOk:string = 'ok';

     constructor(_route: ActivatedRoute, contatoDAO:ContatoDAO, _router: Router ){
        this.route = _route;
        this.router = _router;
        this.contatoDAO = contatoDAO;

        this.route.params
        .subscribe(params => {  this.id = params['id'];   });
        

        //this.contatoDAO.buscaPorId(this.id).subscribe(result => {this.contato = result}, erros => {console.log(erros)} );
         
        this.router.navigate(['/lista_contato',this.remocaoOk]);
         //this.contatoDAO.buscaPorId("teste ok");


       // this.num = this.contato.length; 
        }



}