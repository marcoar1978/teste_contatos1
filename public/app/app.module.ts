import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
//import { Pag1Component } from './pag1/pag1.component';
import { Pag2Component } from './pag2/pag2.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ListagemComponent } from './listagem/listagem.component';

import 'rxjs/add/operator/map';

@NgModule({ 
    imports : [BrowserModule, HttpModule ],
    declarations : [AppComponent, Pag2Component, CabecalhoComponent, ListagemComponent],
    bootstrap : [AppComponent]
})


export class AppModule{



}