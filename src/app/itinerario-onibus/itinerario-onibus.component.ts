import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinhaService } from '../linha.service';
import { Linha } from '../linha';

@Component({
  selector: 'app-itinerario-onibus',
  templateUrl: './itinerario-onibus.component.html',
  styleUrls: ['./itinerario-onibus.component.css']
})
export class ItinerarioOnibusComponent implements OnInit {
  public itinerario = [];

  constructor(
    private rota: ActivatedRoute,
    private linhaService: LinhaService
  ) { }

  ngOnInit(): void {
    this.getItinerario()
  }

  getItinerario(): void {
    const id = +this.rota.snapshot.paramMap.get('id');
    this.linhaService.getItinerario(id)
      .subscribe(itinerario=> {this.itinerario = Object.values(itinerario).slice(1,25);
      console.log(this.itinerario)});
  }

}
