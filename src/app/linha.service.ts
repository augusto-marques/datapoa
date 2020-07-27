import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Linha } from './linha';

@Injectable({
  providedIn: 'root'
})
export class LinhaService {

  constructor(private http: HttpClient) { }

  private url = "http://www.poatransporte.com.br/php/facades/process.php"


  private parametros = new HttpParams()
  .set('a', 'nc')
  .set('p', '%')
  .set('t', "o");

  private parametrosLotacao = new HttpParams()
  .set('a', 'nc')
  .set('p', '%')
  .set('t', "l");


  getLinhas(): Observable<Linha[]> {
    let resposta = this.http.get<Linha[]>(this.url, { params: this.parametros });
    return resposta;
  }

  getLinhasLotacao(): Observable<Linha[]> {
    let resposta = this.http.get<Linha[]>(this.url, { params: this.parametrosLotacao });
    return resposta;
  }

  getItinerario(id: number): Observable<{}> {
    let resposta = this.http.get<{}>(this.url, { params: {a : 'il', p : `${id}`}})
    return resposta;
  }

}
