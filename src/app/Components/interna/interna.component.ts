import { Component, OnInit } from '@angular/core';
import { WeatherByIDRootObject } from 'src/app/Models/weather-by-id.model';
import { List } from 'src/app/Models/weather.model';
import { WeekWeatherRootObject } from 'src/app/Models/week-weather.model';

import { WeatherService } from '../../Services/weather.service';


@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.css']
})
export class InternaComponent implements OnInit {
  weather!: List;
  weatherById!: WeatherByIDRootObject;
  weekWeather!: WeekWeatherRootObject;

  constructor(private WeatherService: WeatherService) { }

  ngOnInit(): void {
    this.weather = history.state.data;
    this.getWeatherbyID(this.weather?.id);
    this.getWeekWeather(this.weather?.name);
  }

  getWeatherbyID(id: number) {
    this.weatherById = this.WeatherService.getWeatherbyID(id).subscribe((data: WeatherByIDRootObject) => { this.weatherById = data });
  }

  getWeekWeather(name: String) {
    this.weekWeather = this.WeatherService.getWeekWeather(name).subscribe((data: WeekWeatherRootObject) => { this.weekWeather = data });
  }

  setIconURL(id: String): String {
    return `https://openweathermap.org/img/w/${id}.png`;
  }

  convertUnixtoLocale(): String[] {
    const sunrise = this.weatherById?.sys?.sunrise;
    const sunset = this.weatherById?.sys?.sunset;
    const presentTime = this.weatherById?.dt;

    const dateSunrise = new Date(sunrise*1000);
    const dateSunset = new Date(sunset*1000);
    const datePresentTime = new Date(presentTime*1000);

    let mo = new Intl.DateTimeFormat('pt-br', { month: 'short' }).format(datePresentTime).slice(0, 3);
    const da = new Intl.DateTimeFormat('pt-br', { day: '2-digit' }).format(datePresentTime);

    mo = mo.charAt(0).toUpperCase() + mo.slice(1);

    const hours = datePresentTime.toLocaleTimeString().slice(0, 5);

    const formatedDate = `${hours} ${mo} ${da}`;

    const dates = [dateSunrise.toLocaleTimeString().slice(0, 5), dateSunset.toLocaleTimeString().slice(0, 5), formatedDate];

    return dates;
    
  } 

  convertWeekUnixtoLocale(unixTimeStamp: number): String[] {
    const time = new Date(unixTimeStamp*1000);

    let weekDay = new Intl.DateTimeFormat('pt-br', { weekday: 'short' }).format(time).slice(0, 3);
    const day = new Intl.DateTimeFormat('pt-br', { day: '2-digit' }).format(time);
    let month = new Intl.DateTimeFormat('pt-br', { month: 'short' }).format(time).slice(0, 3);

    const hours = time.toLocaleTimeString().slice(0, 5);

    weekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);

    month = month.charAt(0).toUpperCase() + month.slice(1);

    const formatedDate = `${weekDay} ${day} ${month}`;

    const formatedTime = `${hours}`;

    const formatedDateTime = [formatedDate, formatedTime];

    return formatedDateTime;
  }
}
