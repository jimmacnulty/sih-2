import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() {
    firebase.database().ref("issues").push({
      "accident": "mulund"
    })
   }

  ngOnInit() {
  }

}
