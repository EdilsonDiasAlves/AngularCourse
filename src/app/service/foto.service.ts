import { FotoComponent } from './../foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const base_url = 'http://localhost:3000/';

@Injectable({
    providedIn: 'root'
})
export class FotoService {

    private url = `${base_url}v1/fotos`;
    private header = {
        headers: new HttpHeaders({'Content-Type':'application/json' })
    }

    constructor(private conexaoApi: HttpClient) { }

    listar(): Observable<FotoComponent[]> {
        return this.conexaoApi.get<FotoComponent[]>(this.url, this.header)
    }

    cadastrar(foto: FotoComponent): Observable<Object> {
        return this.conexaoApi.post(this.url, foto, this.header)
    }

    deletar(id: string):Observable<Object> { 
        console.log(`${this.url}/${id}`);
        return this.conexaoApi.delete(`${this.url}/${id}`)
    }

    pesquisar(id: string): Observable<FotoComponent> { 
        return this.conexaoApi.get<FotoComponent>(this.url+'/'+id);
    }

    alterar(foto: FotoComponent) :Observable<Object>{
        return this.conexaoApi.put(this.url+'/'+foto._id, foto);
     }
}