import { FotoService } from './../service/foto.service';
import { MensagemComponent } from './../mensagem/mensagem.component';
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent();
  mensagem = new MensagemComponent();

  constructor(private fotoService: FotoService,
              private rotaAtiva: ActivatedRoute) { 

                let fotoId = this.rotaAtiva.snapshot.params.fotoId;

                console.log(fotoId);

                if(fotoId){
                  this.fotoService
                    .pesquisar(fotoId)
                    .subscribe(
                      fotoApi => this.foto = fotoApi
                    )
                }

                // this.rotaAtiva.params.subscribe(
                //   parametrosRota => {
                //     this.fotoService.pesquisar(parametrosRota.fotoId)
                //     .subscribe(
                //       fotoApi => this.foto = fotoApi
                //     )
                //   }
                // )
              }

  ngOnInit() {
  }

  salvar() {

    if(this.foto._id){
      this.fotoService.alterar(this.foto).subscribe(
        () => {
          this.mensagem.texto = `${this.foto.titulo} alterada com sucesso`,
          this.mensagem.tipo = 'success'
        }
      )
    } else {
    this.fotoService.cadastrar(this.foto)
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

}
