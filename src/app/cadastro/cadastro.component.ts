import { MensagemComponent } from './../mensagem/mensagem.component';
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent();
  mensagem = new MensagemComponent();

  constructor(private conexaoApi: HttpClient) { 
  }

  ngOnInit() {
  }

  salvar(){
    this.conexaoApi.post(
        'http://localhost:3000/v1/fotos', 
        this.foto)
        .subscribe(
          resposta => {
            this.mensagem.texto = `Foto ${this.foto.titulo} cadastrada com sucesso`,
            this.mensagem.tipo = 'success'
          },
          erro => {
            this.mensagem.texto = `Erro ao cadastra a foto ${this.foto.titulo}`,
            this.mensagem.tipo = 'danger'
          }
        )
  }

}
