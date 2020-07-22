import { Component, OnInit } from '@angular/core';
import { LinhaService } from '../linha.service';
import { Linha } from '../linha';

@Component({
  selector: 'app-lista-onibus',
  templateUrl: './lista-onibus.component.html',
  styleUrls: ['./lista-onibus.component.css']
})
export class ListaOnibusComponent implements OnInit {
  linhas: Linha[] = [];

  constructor(private linhaService: LinhaService) { }

  ngOnInit(): void {
    this.getLinhas();
  }

  getLinhas() : void {
    this.linhaService.getLinhas()
      .subscribe(linhas => this.linhas = linhas.slice(1, 25));
  }

}
