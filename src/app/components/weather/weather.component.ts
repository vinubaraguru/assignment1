import { Component, OnInit } from '@angular/core';
import { InsharedService } from '../../services/inshared.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherDetail : any;

  id_city: string = "";
  id_state: string = "";
  op_city: string = "";
  op_region: string = "";
  op_country: string = "";
  op_date: string = "";
  op_text: string = "";
  op_temp: string = "";

  constructor(private weatherService: InsharedService) { }

  ngOnInit() {
  }
  
  SearchWeather(formData) {
    this.weatherService.getWeatherService(formData.searchstring, formData.searchstring1)
      .subscribe(result => {
        this.weatherDetail = result;
        this.op_city = result["query"]["results"]["channel"]["location"]["city"];
        this.op_region = result["query"]["results"]["channel"]["location"]["region"];
        this.op_country = result["query"]["results"]["channel"]["location"]["country"];
        this.op_date = result["query"]["results"]["channel"]["item"]["condition"]["date"];
        this.op_text = result["query"]["results"]["channel"]["item"]["condition"]["text"];
        this.op_temp = result["query"]["results"]["channel"]["item"]["condition"]["temp"];
      })
  }
}
