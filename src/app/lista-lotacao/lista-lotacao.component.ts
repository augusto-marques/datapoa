import { Component, OnInit } from '@angular/core';
import { LinhaService } from '../linha.service';
import { Linha } from '../linha';

@Component({
  selector: 'app-lista-lotacao',
  templateUrl: './lista-lotacao.component.html',
  styleUrls: ['./lista-lotacao.component.css']
})
export class ListaLotacaoComponent implements OnInit {
  linhas: Linha[] = [];
  linhasFormatada: Linha[] = [];
  palavraChave: string;

  constructor(private linhaService: LinhaService) { }

  ngOnInit(): void {
    this.palavraChave = "";
    this.getLinhas();
  }

  getLinhas() : void {
    this.linhaService.getLinhasLotacao()
      .subscribe(linhas => {this.linhas = linhas;
                            this.linhasFormatada = linhas});
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
