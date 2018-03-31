import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  lat: number;
  lng: number;

  issues : Observable<any>
  
  constructor(private db: AngularFireDatabase, private af: AngularFireAuth) {
    this.issues = this.db.object('issues/0/-L8qSIST-id8WdlmOdJy/location').valueChanges();
    this.issues.subscribe(data => {
      this.lat = data.lat;
      this.lng = data.lng;
    })
  }

  ngOnInit() {
  }

}
