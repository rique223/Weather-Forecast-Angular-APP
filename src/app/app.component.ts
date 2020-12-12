import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  city: String = 'Moscow';
  appID: String = '76d1b43ba3695cfae59aa9f7dc9b4877';
  title = 'projeto-front-end-action-labs';

  readonly baseURL = `http://api.openweathermap.org/data/2.5/find?q=${this.city}&units=metric&appid=${this.appID}`;
  weatherIcon: any;

  weather: any;

  constructor(private http: HttpClient) {}

  getWeather() {
    this.http.get(this.baseURL)
      .subscribe((data) => { console.log(data); this.weather = data });
  }

  setIconURL(id: String):String {
    return `http://openweathermap.org/img/w/${id}.png`;
  }
}
