import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  APIkey: string = environment.APIkey

  constructor(private http: HttpClient) { }

  getAPOD = () => {
    return this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${this.APIkey}`).toPromise()
  }

  getByDate = (datestring) => {
    return this. http.get(`https://api.nasa.gov/planetary/apod?api_key=${this.APIkey}&date=${datestring}`).toPromise()
  }
}
