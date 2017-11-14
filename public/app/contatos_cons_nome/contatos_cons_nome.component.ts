import {Component} from '@angular/core';
import {Contato} from "../entidades/contato.service";
import {ContatoDAO} from "../entidades/contatoDAO.service";

@Component({
    moduleId: module.id,
    selector: 'contatos_cons_nome',
    templateUrl : './contatos_cons_nome.component.html';

})

export class ContatosConsNomeComponent{

contatos:Contato[] = [];
numContatos:number = this.contatos.length;
contatoDAO:ContatoDAO;   
nome:string;
mostraConsulta:boolean = true;


constructor(_contatoDAO:ContatoDAO){
    this.contatoDAO = _contatoDAO;
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