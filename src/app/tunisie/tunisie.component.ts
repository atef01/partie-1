import { Component } from '@angular/core';

@Component({
  selector: 'app-tunisie',
  templateUrl: './tunisie.component.html',
  styleUrls: ['./tunisie.component.css']
})
export class TunisieComponent {
  villes:Array<string>=['Tunis', 'Sfax', 'Sousse', 'Bizerte', 'Tozeur']
}
