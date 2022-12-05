import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { weatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private snackBar: MatSnackBar
  ) {}

  cityName: string = 'Ballymena';
  weatherData?: weatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
  }

  private getWeatherData(cityName: string) {
    this.cityName = '';
    let cityToPass = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    this.weatherService.getWeatherData(cityToPass).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
      error: (error) => {
        this.openSnackbar(cityToPass);
        console.log(error);
      },
    });
  }

  openSnackbar(city: string) {
    this.snackBar.open(`Unable to get weather data for ${city}`, '', {
      duration: 4000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
