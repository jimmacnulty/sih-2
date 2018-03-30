import { Component, OnInit } from '@angular/core';

import { MaterialModule } from '../material.module';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';

// import firebase from 'firebase';

const ELEMENT_DATA: any = [];

const arr = []

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  displayedColumns = ['description', 'No', 'Symbol', 'Weight'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    
    
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private db: AngularFireDatabase, private af: AngularFireDatabase) {
    
    this.db.list('issues/0').valueChanges().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
    })
    
    // firebase.database().ref("issues2").once('value', (snapshot) => {
    //   let snap = snapshot.val()
    //   for (let i in snap) {
    //     console.log(snap[i])
    //     ELEMENT_DATA.push(snap[i])
    //     this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    //   }

    // })

    console.log(ELEMENT_DATA);

  

    
   }

  ngOnInit() {
  }


  onclick() {
    let acc = {
      "No": "2",
      "Name": "Aditya",
      "Weight": "45",
      "Symbol": "Yaeh"
    }
    // firebase.database().ref("issues2").push(acc).then(function () {
    //   console.log("added");
    // })
  }

  
  

}
export interface Element {
  description: string;
  position: number;
  weight: number;
  symbol: string;
}





