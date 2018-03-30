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


  users: Observable<any[]>;  

  constructor(private af: AngularFireAuth, private db: AngularFireDatabase) {
  
    db.list('users/' + af.auth.currentUser.uid, ref=> ref).valueChanges().subscribe(data => {
      console.log(data)
    })


  }

  ngOnInit() {
  }

}
