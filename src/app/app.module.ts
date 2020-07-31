import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaOnibusComponent } from './lista-onibus/lista-onibus.component';
import { ItinerarioOnibusComponent } from './itinerario-onibus/itinerario-onibus.component';
import { ListaLotacaoComponent } from './lista-lotacao/lista-lotacao.component';
import { ContatoComponent } from './contato/contato.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaOnibusComponent,
    ItinerarioOnibusComponent,
    ListaLotacaoComponent,
    ContatoComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
