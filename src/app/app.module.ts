import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { CurrencyratesComponent } from './components/currencyrates/currencyrates.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MoviedetailsComponent,
    CurrencyratesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MenuComponent },
      { path: 'weather', component: WeatherComponent },
      { path: 'moviedetails', component: MoviedetailsComponent },
      { path: 'currency', component: CurrencyratesComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
