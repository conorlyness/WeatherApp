// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  weatherApiBaseUrl:
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast',

  // In order to get your own key to use this api
  // visit the following link:
  // https://www.visualcrossing.com/weather-api
  // once you have your key, put it within the quotes in the environment var below
  visualCrossingApiKey: '',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
