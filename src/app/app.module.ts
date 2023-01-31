import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TunisieComponent } from './tunisie/tunisie.component';
import { FranceComponent } from './france/france.component';
import { UsaComponent } from './usa/usa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TunisieComponent,
    FranceComponent,
    UsaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
