import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CurrencyService} from '../currency.service';
import {RouterModule, Routes} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {FormGroup, FormControl} from '@angular/forms';
import {isNumber} from "util";
@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currencies: any;
  show: boolean = false;
  pager: Array<any>[];
  size: number;
	currentPage: number;
	total: number;
	searchStr: any;
	filterCriteria: string;
  constructor(private currencyService: CurrencyService) {
    this.filterCriteria = "id";
  }

  ngOnInit() {
    this.getCurrencies();

  }

  getCurrencies(obj?: any): void{
  this.currentPage = (obj && obj.num) || this.currencyService.data["num"] || 1;
  this.size = (obj && obj.size) || this.currencyService.data["size"] || 20;
  let currentPage;
  if(this.size * this.currentPage > this.total)
      currentPage = Math.ceil(this.total / this.size);

  if(!this.currencyService.data)
    this.currencyService.data = {num: this.currentPage, size: this.size};

    this.currencyService.data['num'] = this.currentPage;
    this.currencyService.data['size'] = this.size;

  this.currencyService.getCurrencies({'page[number]': currentPage || this.currentPage, "page[size]": this.size}).subscribe(obj => {
    this.show = false;
    this.currentPage = currentPage || this.currentPage;
    this.currencyService.data["currencies"] = obj.data;
    this.currencyService.data["filter"] = this.currencyService.data["filter"] || this.filterCriteria;
    this.currencyService.data["search"] = this.currencyService.data["search"] || this.searchStr;
    this.filterCriteria = this.currencyService.data["filter"];
    this.searchStr = this.currencyService.data["search"];
    if(this.filterCriteria && this.searchStr)
      this.currencies = obj.data.filter(x => (x[this.filterCriteria] || x.attributes[this.filterCriteria]) == this.searchStr);
    else
      this.currencies = obj.data;
    this.total = obj.meta.total;
    let arr = new Array<any>(obj.meta.pages);
    arr = (arr.fill(0)).map((x, i) => i+1);
    this.pager = arr;

    });
  }

  getCachedCurrencies(): object[]{
    return this.currencyService.data["currencies"];
  }
  onSelect (event: any, id: any): void {
  this.currencyService.currencyDetail(id);
  }
  click(): void{
    this.show = true;
  }

  change(obj: any): void{
      this.getCurrencies(obj);
  }

  onActivate($event: any): void {
    console.log($event);
  }

  onSearch(val: any): void{
    if(typeof(val) == "object")
      val = val.target.value;
    this.searchStr = (isNumber(val) ? parseInt(val) : val.trim());
    let filter = this.filterCriteria;
    this.currencyService.data["filter"] = filter;
    this.currencyService.data["search"] = val;
    if(!val) {
      this.currencies = this.getCachedCurrencies();
      return;
    }


    this.currencies = this.getCachedCurrencies().filter(x => (x[filter] || (x["attributes"])[filter]) == val);

  }

  onChangeFilter(filter: any): void{
    this.filterCriteria = filter.target.value;
    this.onSearch("");
  }
}
