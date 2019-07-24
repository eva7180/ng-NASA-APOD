import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodResultComponent } from './apod-result.component';

describe('ApodResultComponent', () => {
  let component: ApodResultComponent;
  let fixture: ComponentFixture<ApodResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApodResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
