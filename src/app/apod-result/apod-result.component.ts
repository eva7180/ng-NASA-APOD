import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apod-result',
  templateUrl: './apod-result.component.html',
  styleUrls: ['./apod-result.component.css']
})
export class ApodResultComponent implements OnInit {
  @Input() displayApod;

  constructor() { }

  ngOnInit() {
  }

}
