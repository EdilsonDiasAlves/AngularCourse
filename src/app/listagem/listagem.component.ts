import { FotoService } from './../service/foto.service';
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Observable } from 'rxjs';
import { MensagemComponent } from '../mensagem/mensagem.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = 'Caelumpic';
  listaFotos: FotoComponent[];
  mensagem = new MensagemComponent();

  constructor(private fotoService:FotoService) { 
    this.fotoService.listar().subscribe(
      fotosApi => this.listaFotos = fotosApi,
      err => console.error(err)
    )
  }

  apagar(foto:FotoComponent){
    this.fotoService.deletar(foto._id)
    .subscribe(
      () => {

        this.mensagem.texto = `${foto.titulo} apagada com sucesso`;
        this.mensagem.tipo = 'success';
        
        this.listaFotos = this.listaFotos.filter(
          // fotoDaLista => {
          //   if(fotoDaLista != foto){ 
          //     return fotoDaLista;
          //   }
          // }
          (fotoDaLista => fotoDaLista != foto)
        )
      }
    )
  }

  ngOnInit() {
  }

}
