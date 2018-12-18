import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class InsharedService {

  constructor(private http: Http) { }

  getMovieService(movieName): Observable<any> {
    return Observable.create(observer => {
      let headers = new Headers();
      // headers.append('Content-Type', 'application/json');
      this.http.get('http://www.omdbapi.com/?t='+movieName+'&apikey=8b8b3f2',
        {
          // headers: headers
        })
        .subscribe(response => {
          let result = response.json();
          observer.next(result);
          observer.complete();
        }, (error: any) => {
          observer.error(error);
        })
    })
  }

  getWeatherService(cityName, satateNmae): Observable<any> {
    return Observable.create(observer => {
      let headers = new Headers();
      let weatherURL1 = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22";
      let weatherURL2 = "%2C%20";
      let weatherURL3 = "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
      // headers.append('Content-Type', 'application/json');
      this.http.get(weatherURL1 + cityName + weatherURL2 + satateNmae + weatherURL3,
        {
          // headers: headers
        })
        .subscribe(response => {
          let result = response.json();
          observer.next(result);
          observer.complete();
        }, (error: any) => {
          observer.error(error);
        })
    })
  }

  getCurrenceyService(cur): Observable<any> {
    return Observable.create(observer => {
      let headers = new Headers();
      // headers.append('Content-Type', 'application/json');
      this.http.get('http://data.fixer.io/api/2000-01-03?access_key=8904d6a54c7fddd87b7b81e31ee361d7&symbols='+cur,
        {
          // headers: headers
        })
        .subscribe(response => {
          let result = response.json();
          observer.next(result);
          observer.complete();
        }, (error: any) => {
          observer.error(error);
        })
    })
  }
}
