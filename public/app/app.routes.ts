import {RouterModule, Routes} from '@angular/router';
import { Pag1Component } from './pag1/pag1.component';
import { IncContatoComponent } from './inclusao/inc_contato.component';
import { ListaContatosComponent } from './lista_contatos/lista_contatos.component';
import { ContatosDetalhesComponent } from './contatos_detalhes/contatos_detalhes.component';

const appRoutes:Routes = [
    {path: '', component: Pag1Component},
    {path: 'inc_contato', component: IncContatoComponent},
    {path: 'lista_contato', component: ListaContatosComponent},
    {path: 'det_contato/:id', component: ContatosDetalhesComponent},

];


export const routing = RouterModule.forRoot(appRoutes);