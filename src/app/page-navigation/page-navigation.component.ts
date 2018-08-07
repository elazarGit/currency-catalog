import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.css']
})
export class PageNavigationComponent implements OnInit {
	@Input() pager: any[];
	@Input() currentPage: number;
	@Input() size: number;
	@Output() pageChanged = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  click(page: number): void{
    if(this.pager && (page > this.pager.length || page == 0))
      return;
	this.pageChanged.emit({num: page});
  }

  change(event: any){
	let size = parseInt(event.target.value);
	this.pageChanged.emit({size: size});
  }


}
