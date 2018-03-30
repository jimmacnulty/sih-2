import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-issue-listing',
  templateUrl: './issue-listing.component.html',
  styleUrls: ['./issue-listing.component.css'],
  animations: [
    trigger('detailExpand', [
      state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class IssueListingComponent implements OnInit {

  displayedColumns = ['id', 'dept', 'title', 'loc', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  id: any;
  dept: string;
  title: string;
  loc: number;
  symbol: boolean;
}

const ELEMENT_DATA: Element[] = [
  { id: 1, dept: 'Hydrogen', title: 'bithchchc', loc: 121.12, symbol: true },
  { id: 2, dept: 'Heliem', title: 'skjdnfjsdf', loc: 122.12, symbol: false },
  { id: 3, dept: 'Lithium', title: 'xmcvcxm,v', loc: 129.12, symbol: false },
  { id: 4, dept: 'Beryllium', title: 'weuiuroqrq', loc: 421.12, symbol: true },
  { id: 5, dept: 'Argon', title: 'lnxcjvnkjxc', loc: 151.12, symbol: false }
  
];


export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    const rows = [];
    ELEMENT_DATA.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log(rows);
    return Observable.of(rows);
  }

  disconnect() { }
}



