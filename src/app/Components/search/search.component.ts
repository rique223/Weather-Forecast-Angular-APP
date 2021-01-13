import { Component } from '@angular/core';
import { WeatherService } from '../../Services/weather.service';
import { Router, ActivatedRoute } from '@angular/router';

import { WeatherRootObject } from '../../Models/weather.model';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  constructor(private WeatherService: WeatherService, private _route: ActivatedRoute, private _router: Router) {}

  weather!: WeatherRootObject;
  city!: String;
  hiddenFlag: boolean = false;
  loading: boolean = false;

  getWeather(country: String): void {
    this.hiddenFlag = true;
    this.loading = true;

    this.WeatherService.getWeather(country).subscribe(
      (data: WeatherRootObject)=> { 
        this.weather = data; 
        this.city = data.list[0].name; 
        this.loading = false;
      },
      (err: HttpErrorResponse) => {
        this.loading = false;
        console.log(err);
      }
    )
  }

  setIconURL(id: String): String {
    return `https://openweathermap.org/img/w/${id}.png`;
  }

  setFlagIconURL(country: String): String {
    return `https://openweathermap.org/images/flags/${country.toLowerCase()}.png`;
  }

}
