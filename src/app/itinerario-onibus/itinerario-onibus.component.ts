import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinhaService } from '../linha.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-itinerario-onibus',
  templateUrl: './itinerario-onibus.component.html',
  styleUrls: ['./itinerario-onibus.component.css']
})
export class ItinerarioOnibusComponent implements OnInit {
  private url = "https://www.google.com/maps/?q=";
  public itinerario = [];
  public carregando = true;
  p: number = 1;

  constructor(
    private rota: ActivatedRoute,
    private linhaService: LinhaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getItinerario();
  }

  // Chama a funcao getItinerario do linhaService com o id passado pela rota e preenche a lista de itinerarios
  getItinerario(): void {
    const id = +this.rota.snapshot.paramMap.get('id');
    this.linhaService.getItinerario(id)
      .subscribe(itinerario=> {this.itinerario = Object.values(itinerario);
      this.carregando = false});
  }

  // Usa o componente location para voltar para a pagina anterior
  voltar(): void {
    this.location.back();
  }

  // Abre a pagina do google maps com a latitude e longitiude do itinerario
  verMapa(lat, lng): void {
    window.open(this.url + `${lat}, ${lng}`, "_blank");
  }

}