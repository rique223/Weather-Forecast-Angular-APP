import { Component } from '@angular/core';
import { WeatherService } from '../../Services/weather.service';
import { Router, ActivatedRoute } from '@angular/router';

import { WeatherRootObject } from '../../Models/weather.model';
import { map } from 'rxjs/operators';

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
    this.loading = true;

    setTimeout(() => {
      this.weather = this.WeatherService.getWeather(country).subscribe((data: WeatherRootObject)=> { this.weather = data; this.city = data.list[0].name; this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { q: this.city },
        queryParamsHandling: 'merge',
        skipLocationChange: true
      });});
      
      this.loading = false;
    }, 1000);

    this.hiddenFlag = true;
  }

  setIconURL(id: String): String {
    return `https://openweathermap.org/img/w/${id}.png`;
  }

  setFlagIconURL(country: String): String {
    return `https://openweathermap.org/images/flags/${country.toLowerCase()}.png`;
  }

}
