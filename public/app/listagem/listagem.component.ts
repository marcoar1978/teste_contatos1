import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl : './listagem.component.html';

})

export class ListagemComponent{

    produtos: Object[] = [];

    constructor(http:Http){

      http.get('/produtos').subscribe(res =>{ this.produtos = res.json();});
     
    }

}