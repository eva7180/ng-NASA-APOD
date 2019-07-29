import { Component, OnInit } from '@angular/core';
import { ApodService } from '../apod.service';
import { IApod } from '../apod';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css'],
  providers: [ ApodService ]
})
export class ApodComponent implements OnInit {
  APIresponse;

  constructor(private ApodService: ApodService) { }

  ngOnInit() {
  }

  getAPOD = () => {
    this.ApodService.getAPOD().then( (response) => {
      this.APIresponse = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    });
  }

  prevDay = () => {
    let previous = new Date(Date.parse(this.APIresponse.date) - 8.64e+7).toISOString().split('T')[0];
    this.ApodService.getByDate(previous).then( (response) => {
      this.APIresponse = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    });
  }

}
