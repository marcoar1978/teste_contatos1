import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {routing} from './app.routes';
import { Pag1Component } from './pag1/pag1.component';
//import { Pag2Component } from './pag2/pag2.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { IncContatoComponent } from './inclusao/inc_contato.component';
import { ListaContatosComponent } from './lista_contatos/lista_contatos.component';
import { ContatosDetalhesComponent } from './contatos_detalhes/contatos_detalhes.component';

import {Contato } from './entidades/contato.service';
import {ContatoDAO } from './entidades/contatoDAO.service';

import 'rxjs/add/operator/map';

@NgModule({ 
    imports : [BrowserModule, HttpModule, FormsModule, routing ],
    declarations : [AppComponent, 
                    Pag1Component, 
                    CabecalhoComponent, 
                    IncContatoComponent,
                     ListaContatosComponent, 
                     ContatosDetalhesComponent],
    providers: [Contato, ContatoDAO],
    bootstrap : [AppComponent]
})


export class AppModule{



}