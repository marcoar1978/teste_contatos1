import {Component, ElementRef} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jquery',
    templateUrl : './jquery.component.html';

})

export class JQueryComponent{

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