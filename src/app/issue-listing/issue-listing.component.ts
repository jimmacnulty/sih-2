import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database'
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';
import { HistoryService } from "../services/history.service";

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

  displayedColumns = ['description', 'location', 'title', 'uid', 'verify'];
  data: any;
  dataSource: any;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  
    constructor(private router: Router, private db: AngularFireDatabase, private history: HistoryService) {
      this.data = this.db.list('issues/0').snapshotChanges();
  
     }

  ngAfterViewInit() {
    this.data.subscribe(snapshotChanges => {
      let data = [];
      snapshotChanges.forEach(x => {
        let y = x.payload.val();
        y['key'] = x.key;
        data.push(y);
      });
      console.log(data);
      this.dataSource = new MatTableDataSource<Element>(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnInit() {
  }

  nav(){
    this.router.navigate(['/ticketdetail'])
  }

  verify(uid, tid, location){
    // let note = 'Verified the issue.'
    // this.history.create(tid, uid, note, 'verified');
    // this.history.save();
    this.history.alert(tid, uid, Date.now(), location);
  }



}

export interface Element {
  description: any;
  location: {
    lat: any,
    lng: any
  },
  title: any;
  uid: any;
  verify: boolean;
}

// // const ELEMENT_DATA: Element[] = [
// //   { id: 1, dept: 'Hydrogen', title: 'bithchchc', loc: 121.12, verify: true },
// //   { id: 2, dept: 'Heliem', title: 'skjdnfjsdf', loc: 122.12, verify: false },
// //   { id: 3, dept: 'Lithium', title: 'xmcvcxm,v', loc: 129.12, verify: false },
// //   { id: 4, dept: 'Beryllium', title: 'weuiuroqrq', loc: 421.12, verify: true },
// //   { id: 5, dept: 'Argon', title: 'lnxcjvnkjxc', loc: 151.12, verify: false }
  
// ];
