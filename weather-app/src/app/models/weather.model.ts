export interface weatherData {
  address: string;
  alerts: any;
  currentConditions: CurrentConditions;
  distance: number;
  id: string;
  index: number;
  latitude: number;
  longitude: number;
  name: string;
  stationContributions: any;
  time: number;
  tz: string;
  values: any;
}

export interface CurrentConditions {
  cloudcover: any;
  datetime: string;
  dew: number;
  heatindex: any;
  humidity: number;
  icon: string;
  moonphase: Number;
  precip: any;
  sealevelpressure: number;
  snowdepth: any;
  stations: string;
  sunrise: string;
  sunset: string;
  temp: number;
  visibility: number;
  wdir: number;
  wgust: any;
  windchill: any;
  wspd: number;
}
