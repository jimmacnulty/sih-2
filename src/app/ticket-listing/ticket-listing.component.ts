import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'app-ticket-listing',
  templateUrl: './ticket-listing.component.html',
  styleUrls: ['./ticket-listing.component.css']
})
export class TicketListingComponent implements OnInit {


  items: Observable<any>
  role: Observable<any>
  id: Observable<any>
  
  constructor (private af : AngularFireAuth, db : AngularFireDatabase) { 
    db.object('users/' + af.auth.currentUser.uid).valueChanges().subscribe(data => {
      console.log(data);
    })

  }

  ngOnInit() {
  }

}
