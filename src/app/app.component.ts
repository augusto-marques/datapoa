import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Encontre seu Transporte';

  paceOptions = {
    elements: {
      selectors: ['.linhasFormatada', '.table-responsive']
    }
  }
}
