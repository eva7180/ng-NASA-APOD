import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIkey } from './api-keys';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  constructor(private http: HttpClient) { }

  getAPOD = () => {
    return this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}`).toPromise()
  }

  getByDate = (datestring) => {
    return this. http.get(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}&date=${datestring}`).toPromise()
  }
}
