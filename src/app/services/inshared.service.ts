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

  getWeatherService(cityName): Observable<any> {
    return Observable.create(observer => {
      let headers = new Headers();
      // headers.append('Content-Type', 'application/json');
      this.http.get('https://query.yahooapis.com/v1/public/yql?q='+ cityName +'&format=json',
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
      this.http.get('http://api.fixer.io/latest?base='+cur,
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
