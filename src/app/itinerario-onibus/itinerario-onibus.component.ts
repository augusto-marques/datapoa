import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinhaService } from '../linha.service';
import { Location } from '@angular/common'
import { Linha } from '../linha';

@Component({
  selector: 'app-itinerario-onibus',
  templateUrl: './itinerario-onibus.component.html',
  styleUrls: ['./itinerario-onibus.component.css']
})
export class ItinerarioOnibusComponent implements OnInit {
  private url = "https://www.google.com/maps/?q="
  public itinerario = [];
  public paginaCarregada: Boolean;

  constructor(
    private rota: ActivatedRoute,
    private linhaService: LinhaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.paginaCarregada = false;
    this.getItinerario()
  }

  getItinerario(): void {
    const id = +this.rota.snapshot.paramMap.get('id');
    this.linhaService.getItinerario(id)
      .subscribe(itinerario=> {this.itinerario = Object.values(itinerario).slice(1,25);
      this.paginaCarregada = true});
  }

  voltar(): void {
    this.location.back();
  }

  verMapa(lat, lng): void {
    window.open(this.url + `${lat}, ${lng}`, "_blank");
  }

}
