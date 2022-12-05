import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { weatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<weatherData> {
    return this.http
      .get<weatherData>(environment.weatherApiBaseUrl, {
        params: new HttpParams()
          .set('locations', cityName)
          .set('key', environment.visualCrossingApiKey)
          .set('aggregateHours', 24)
          .set('contentType', 'json')
          .set('unitGroup', 'metric'),
      })
      .pipe(map((x: any) => x?.locations[`${cityName}`]));
  }
}
