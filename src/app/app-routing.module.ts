import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaOnibusComponent } from './lista-onibus/lista-onibus.component';
import { ListaLotacaoComponent } from './lista-lotacao/lista-lotacao.component';
import { ItinerarioOnibusComponent } from './itinerario-onibus/itinerario-onibus.component';
import { ContatoComponent } from './contato/contato.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'onibus', component: ListaOnibusComponent },
  { path: 'lotacao', component: ListaLotacaoComponent },
  { path: 'lotacao/:id', component: ListaLotacaoComponent },
  { path: 'onibus/:id', component: ItinerarioOnibusComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
