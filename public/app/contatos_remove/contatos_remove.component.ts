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
     ret:string;
     remocaoOk:string = 'off';

     constructor(_route: ActivatedRoute, _contatoDAO:ContatoDAO, _router: Router ){
        this.route = _route;
        this.router = _router;
        this.contatoDAO = _contatoDAO;

        this.route.params
        .subscribe(params => {  this.id = params['id']; this.ret = params['ret']; });
        
        


        var conf = confirm("Deseja efetuar a remoção?");
        if(conf){
             this.contatoDAO.removePorId(this.id).subscribe(result => {this.contato = result}, erros => {console.log(erros)} );
            this.remocaoOk = "ok";
            }
       
         
        this.router.navigate(["/"+this.ret ,this.remocaoOk]);
         //this.contatoDAO.buscaPorId("teste ok");


       // this.num = this.contato.length; 
        }



}