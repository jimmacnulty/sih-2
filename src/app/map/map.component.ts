import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  lat: number = 21.1794279;
  lng: number = 79.0600918;

  issues: any;
  
  constructor(private db: AngularFireDatabase) {
    this.issues = this.db.list('issues').valueChanges();
    
  }

  ngOnInit() {
  }

}
