import { Component } from '@angular/core';
import { WeatherService } from '../../Services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  constructor(private WeatherService: WeatherService) {}

  weather: any;

  getWeather(country: String): any {
    this.weather = this.WeatherService.getWeather(country).subscribe((data: any)=> { this.weather = data });
  }

  setIconURL(id: String): String {
    return `http://openweathermap.org/img/w/${id}.png`;
  }

  setFlagIconURL(country: String): String {
    return `http://openweathermap.org/images/flags/${country.toLowerCase()}.png`;
  }

}
