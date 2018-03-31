import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database'
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';
import { HistoryService } from "../services/history.service";
import { AngularFireAuth } from 'angularfire2/auth';
import { MaterialModule } from '../material.module';

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

  today = Date.now()
  fixedTimezone = '2015-06-15T09:03:01+0900';

  displayedColumns = ['description', 'location', 'title', 'uid', 'verify'];
  data: any;
  dataSource: any;



  issues: any;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  
    constructor(private router: Router, private db: AngularFireDatabase, private history: HistoryService, private af: AngularFireAuth) {
      this.data = this.db.list('issues/0').snapshotChanges()
  
     }

  ngAfterViewInit() {
    this.data.subscribe(snapshotChanges => {
      let data = [];
      if (snapshotChanges.length > 0) {
        snapshotChanges.forEach(x => {
          console.log(x);
          let y = x.payload.val();
          y['key'] = x.key;
          data.push(y);
        });
        this.issues = data;
      }
    })
  }

  ngOnInit() {
  }

  nav(){
    this.router.navigate(['/ticketdetail'])
  }

  verify(uid, tid, location){
    let note = 'Verified the issue.'
    this.history.create(tid, uid, note, 'verified');
    this.history.save();
    this.history.alert(tid, uid, Date.now(), location);
  }

  increament() {

    this.db.database.ref('users/' + this.af.auth.currentUser.uid + '/').once('value', data => {
      let counter = data.val().counter + 1;
      this.db.object('users/' + this.af.auth.currentUser.uid + '/').update({ counter: counter });

      this.db.list('SMSQueue').push({
        contact: data.val().contact,
        message: "Your submitted issue has been reported spam. You have (" + (5 - counter) + "/5) chances remaining, after which you will be banned from posting any further issues."
      })
    })

    
    
  //  this.db.database.ref('users/' + this.af.auth.currentUser.uid + '/counter').once('value', data => {
      
  //     let num = data.val() + 1
  //     this.db.object('users/' + this.af.auth.currentUser.uid + '/counter').set(num);
     
    
  //     if (num > 3) {
  //       this.db.database.ref('issues/' + this.af.auth.currentUser.uid + '/verified').set('false');
  //     }
  //   })

  }
  
  gen() {
    this.db.database.ref('users' + this.af.auth.currentUser.uid + '/contact').once('value', data => {
      console.log(data)
    })
    // this.db.database.ref('smsQueue').set('value', data => {

    //   })
  }

  resolve() {
    
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
