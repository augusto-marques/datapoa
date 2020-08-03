import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Linha } from './linha';

@Injectable({
  providedIn: 'root'
})
export class LinhaService {
  constructor(private http: HttpClient) { }

  private url = "http://www.poatransporte.com.br/php/facades/process.php";

  private parametros = new HttpParams()
  .set('a', 'nc')
  .set('p', '%')
  .set('t', "o");

  private parametrosLotacao = new HttpParams()
  .set('a', 'nc')
  .set('p', '%')
  .set('t', "l");

  // faz um get com os parametros do onibus e retorna um observable com um array do tipo Linha
  getLinhas(): Observable<Linha[]> {
    let resposta = this.http.get<Linha[]>(this.url, { params: this.parametros });
    return resposta;
  }

  // faz um get com os parametros da lotacao e retorna um observable com um array do tipo Linha
  getLinhasLotacao(): Observable<Linha[]> {
    let resposta = this.http.get<Linha[]>(this.url, { params: this.parametrosLotacao });
    return resposta;
  }
  
  // faz um get com a linha selecionada e retorna um observable com um objeto
  getItinerario(id: number): Observable<{}> {
    let resposta = this.http.get<{}>(this.url, { params: {a : 'il', p : `${id}`}})
    return resposta;
  }
}
