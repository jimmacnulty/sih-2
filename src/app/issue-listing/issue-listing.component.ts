import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-issue-listing',
  templateUrl: './issue-listing.component.html',
  styleUrls: ['./issue-listing.component.css']
})
export class IssueListingComponent implements OnInit {

  displayedColumns = ['id', 'dept', 'title', 'loc', 'verify'];
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
  verify: boolean;
}

const ELEMENT_DATA: Element[] = [
  { id: 1, dept: 'Hydrogen', title: 'bithchchc', loc: 121.12, verify: true },
  { id: 2, dept: 'Heliem', title: 'skjdnfjsdf', loc: 122.12, verify: false },
  { id: 3, dept: 'Lithium', title: 'xmcvcxm,v', loc: 129.12, verify: false },
  { id: 4, dept: 'Beryllium', title: 'weuiuroqrq', loc: 421.12, verify: true },
  { id: 5, dept: 'Argon', title: 'lnxcjvnkjxc', loc: 151.12, verify: false }
  
];
