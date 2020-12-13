import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  appID: String = '76d1b43ba3695cfae59aa9f7dc9b4877';

  constructor(private http: HttpClient) { }

  getWeather(country: String): any {
    let baseURL: string = `http://api.openweathermap.org/data/2.5/find?q=${country}&units=metric&appid=${this.appID}`;
    let weather;

    try {
      return this.http.get(baseURL);
    } catch (err) {
      console.log("Não foi possível concluir a sua requisição", err.name);
    }

    return weather;
  }

  getWeatherbyID(id: Number): any {
    let baseURL = `http://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${this.appID}`;

    try {
      return this.http.get(baseURL);
    } catch (err) {
      console.log("Não foi possível concluir a sua requisição", err.name);
    }
  }

  getWeekWeather(name: String): any {
    let baseURL = `http://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=76d1b43ba3695cfae59aa9f7dc9b4877`;

    try {
      return this.http.get(baseURL);
    } catch (err) {
      console.log("Não foi possível concluir a sua requisição", err.name);
    }
  }
}
