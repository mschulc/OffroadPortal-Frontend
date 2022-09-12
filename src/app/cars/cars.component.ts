/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: cars.component.ts                                 //
/////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  swich: number = 1
  
  constructor() { }

  ngOnInit(): void {
  }


  public swichNumber(value: number){
    this.swich = value;
  }
}
