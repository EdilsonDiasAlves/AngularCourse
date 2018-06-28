import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  template: `<p class="alert alert-{{tipo}}">{{texto}}</p>`,
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  @Input() tipo = 'primary';
  @Input() texto;

  constructor() { }

  ngOnInit() {
  }

}
