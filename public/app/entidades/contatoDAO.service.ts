import { Http, Headers, Response } from '@angular/http';
import { Contato } from './contato.service';
import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';

@Injectable()
export class ContatoDAO {

    http: Http;
    headers: Headers;

    constructor(http: Http) { 
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        }

    cadastra(contato:Contato):Observable<Response>{
        return this.http.post("/contatos", JSON.stringify(contato),{ headers: this.headers });  
         }

    
    lista():Observable<Contato[]>{
        return this.http.get("/contatos").map(res => res.json());  
        }

    buscaPorId(id:string):Observable<Contato>{
        return this.http.get("/contatos/"+id).map(res => res.json());
       //alert(id);
         }

    removePorId(id:string):Observable<Contato>{
        return this.http.delete("/contatos/"+id).map(res => res.json());
    }         

         

}