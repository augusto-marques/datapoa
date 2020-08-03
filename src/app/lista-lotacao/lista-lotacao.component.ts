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
  p: number = 1;
  carregando = true;

  constructor(private linhaService: LinhaService) { }

  ngOnInit(): void {
    this.palavraChave = "";
    this.getLinhas();
  }

  // chama a funcao getLInhas do linhaService espera a resposta e adiciona o valor a linhas
  getLinhas() : void {
    this.linhaService.getLinhasLotacao()
      .subscribe(linhas => {this.linhas = linhas;
                            this.linhasFormatada = linhas;
                            this.carregando = false;});
  }

  // recebe o evento quando uma tecla e precionada no searchbox e atualiza linhasFormatada
  onKey(event: any) {
    this.palavraChave = event.target.value.toUpperCase();
    this.linhasFormatada = this.linhas.filter(linha => linha.nome.includes(this.palavraChave))
  }
}
