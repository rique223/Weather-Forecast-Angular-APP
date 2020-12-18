import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { WeatherRootObject } from '../Models/weather.model';
import { WeatherByIDRootObject } from '../Models/weather-by-id.model';
import { WeekWeatherRootObject } from '../Models/week-weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  appID: String = '76d1b43ba3695cfae59aa9f7dc9b4877';

  constructor(private http: HttpClient) { }

  getWeather(country: String): any {
    let baseURL: string = `https://api.openweathermap.org/data/2.5/find?q=${country}&units=metric&appid=${this.appID}`;

    try {
      return this.http.get<WeatherRootObject>(baseURL).pipe(map(response => response));
    } catch (err) {
      console.log("Não foi possível concluir a sua requisição", err.name);
    }
  }

  getWeatherbyID(id: Number): any {
    let baseURL = `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${this.appID}`;

    try {
      return this.http.get<WeatherByIDRootObject>(baseURL);
    } catch (err) {
      console.log("Não foi possível concluir a sua requisição", err.name);
    }
  }

  getWeekWeather(name: String): any {
    let baseURL = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=76d1b43ba3695cfae59aa9f7dc9b4877`;

    try {
      return this.http.get<WeekWeatherRootObject>(baseURL);
    } catch (err) {
      console.log("Não foi possível concluir a sua requisição", err.name);
    }
  }
}
