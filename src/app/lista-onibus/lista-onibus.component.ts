import { Component, OnInit } from '@angular/core';
import { LinhaService } from '../linha.service';
import { Linha } from '../linha';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-lista-onibus',
  templateUrl: './lista-onibus.component.html',
  styleUrls: ['./lista-onibus.component.css']
})
export class ListaOnibusComponent implements OnInit {
  linhas: Linha[] = [];
  linhasFormatada: Linha[] = [];
  palavraChave: string;
  p: number = 1;
  carregando = true;

  constructor(private linhaService: LinhaService) { }

  ngOnInit(): void {
    this.palavraChave = "";
    this.getLinhas();
  }

  getLinhas() : void {
    this.linhaService.getLinhas()
      .subscribe(linhas => {this.linhas = linhas;
                            this.linhasFormatada = linhas
                            this.carregando = false});
  }

  onKey(event: any) {
    this.palavraChave = event.target.value.toUpperCase();
    // this.linhasFormatada = this.linhas.filter(linha => linha.nome.includes(this.palavraChave))
    this.linhasFormatada = this.linhas.filter(linha => linha.nome.includes(this.palavraChave))
  }

  procurar() : void {
    this.linhasFormatada = this.linhas.filter(linha => linha.nome.includes(this.palavraChave))
  }

}
