import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FranceComponent } from "src/app/france/france.component";
import { TunisieComponent } from "src/app/tunisie/tunisie.component";
import { UsaComponent } from "src/app/usa/usa.component";
const routes: Routes = [
  {path:"TN", component: TunisieComponent},
  {path:"FR", component: FranceComponent},
  {path:"USA", component: UsaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
