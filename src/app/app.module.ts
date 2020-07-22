import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaOnibusComponent } from './lista-onibus/lista-onibus.component';
import { ItinerarioOnibusComponent } from './itinerario-onibus/itinerario-onibus.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaOnibusComponent,
    ItinerarioOnibusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
