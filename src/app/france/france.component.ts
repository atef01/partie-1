import { Component } from '@angular/core';

@Component({
  selector: 'app-france',
  templateUrl: './france.component.html',
  styleUrls: ['./france.component.css']
})
export class FranceComponent {
  villes:Array<string>=['Paris', 'Marseille', 'Toulouse', 'Nantes','Monaco']
}
