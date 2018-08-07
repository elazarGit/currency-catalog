import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CurrencyService} from '../currency.service';
import {tap, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.css']
})
export class CurrencyDetailComponent implements OnInit {
  @Input() currency: any;
  constructor(private route: ActivatedRoute, private currencyService: CurrencyService, private location: Location) {

  }
  getCurrency(): void{
    const id = this.route.snapshot.params['id'];
    this.currencyService.getCurrency(id).subscribe(response => this.currency = response.data.attributes);
  }

  back(): void{
    // this.location.go("");
    this.location.back();
  }
  ngOnInit() {
    this.getCurrency();
  }



}
