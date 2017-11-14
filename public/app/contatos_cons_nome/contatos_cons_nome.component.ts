import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Contato} from "../entidades/contato.service";
import {ContatoDAO} from "../entidades/contatoDAO.service";

@Component({
    moduleId: module.id,
    selector: 'contatos_cons_nome',
    templateUrl : './contatos_cons_nome.component.html';

})

export class ContatosConsNomeComponent{
 route: ActivatedRoute;
 router:Router;
contatos:Contato[] = [];
numContatos:number = this.contatos.length;
contatoDAO:ContatoDAO;   
nome:string;
mostraConsulta:boolean = true;
divHiddenRemocao:boolean = true;


constructor(_route: ActivatedRoute, _contatoDAO:ContatoDAO, _router: Router){
    this.route = _route;
    this.router = _router;
    this.contatoDAO = _contatoDAO;

     this.route.params
        .subscribe(params => {
            if(params['remocao'] == 'ok'){
                this.divHiddenRemocao = false;
                }

        });

    }

consulta(event){
    event.preventDefault();
   this.contatoDAO.buscaPorNome(this.nome).subscribe(result => {this.contatos = result}, err => {console.log(err)});
   if( this.contatos.length > 0){
        this.mostraConsulta = false;
    }
    else{
        this.mostraConsulta = true;
        }
    }


}