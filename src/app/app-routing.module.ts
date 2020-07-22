import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaOnibusComponent } from './lista-onibus/lista-onibus.component';
import { ItinerarioOnibusComponent } from './itinerario-onibus/itinerario-onibus.component';

const routes: Routes = [
  { path: '', redirectTo : 'onibus', pathMatch: 'full' },
  { path: 'onibus', component: ListaOnibusComponent },
  { path: 'onibus/:id', component: ItinerarioOnibusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
