import {Component, ElementRef} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pag1',
    templateUrl : './pag1.component.html';

})

export class Pag1Component{

elemento:ElementRef;

constructor(_elemento:ElementRef){
    this.elemento = _elemento;

   }


desapareceDiv(){
    $(this.elemento.nativeElement).find("#botao").click(function(){
        alert("botão clicado");
    });



    }


}