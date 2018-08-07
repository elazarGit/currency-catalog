import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-wrapper',
  templateUrl: './currency-wrapper.component.html',
  styleUrls: ['./currency-wrapper.component.css']
})
export class CurrencyWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onActivate($event: any): void{
    console.log($event);
  }

}
