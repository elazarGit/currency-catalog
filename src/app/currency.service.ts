import { Injectable } from '@angular/core';
import {Observable} from 'rxJs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Jsonp} from '@angular/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CurrencyService {
  private currenciesUrl: string = "https://api.openfintech.io/v1/currencies";
  data: object = {};
  getCurrencies(filter?: object): Observable<any>{
	  let params = new HttpParams();
	  if(typeof(filter) == "object"){
		Object.keys(filter).forEach(key => {
			const value = filter[key];
			value != null && (params = params.append(key, value.toString()));
		});
		}
	  const httpOptions = {
		headers: new HttpHeaders({'Content-Type': 'application/vnd.api+json'}),
		params: params
	  };
	  let query: Observable<any>;
	  query = this.http.get<any[]>(this.currenciesUrl, httpOptions);
		return query;
  }




  getCurrency(id: any): Observable<any>{
    const url = `${this.currenciesUrl}/${id}`;
    return this.http.get<any>(url);

  }

  currencyDetail(id: any) : void{

	this.router.navigate(["currency", `${id}`])
  }
  constructor(private router: Router, private http: HttpClient){}

}
