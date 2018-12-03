import { Component, OnInit } from '@angular/core';
import { InsharedService } from '../../services/inshared.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherDetail : any;

  constructor(private weatherService: InsharedService) { }

  ngOnInit() {
  }
  
  SearchWeather(formData) {
    this.weatherService.getWeatherService(formData.searchstring)
      .subscribe(result => {
        this.weatherDetail = result;
      })
  }
}
