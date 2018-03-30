import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {

  user: any;

  constructor(private router: Router, private af:AngularFireAuth) { 

    // firebase.database().ref('users').once('value', (snapshot) => {
    //   let snap = snapshot.val();
    //   snap.orderByKey().on("child_added", function (data) {
    //     console.log(data.key);
    //   })
    // })
  }

  ngOnInit() {
    this.user = this.af.auth.currentUser;
  }
  
  // editPost() {
  //   if(this.auth.canEdit(this.user)) {
  //     this.postRef.update({ title: 'Edited Title!'})
  //   } 
  //   else {
  //     console.error('you are not allowed to do that!')
  //   }
  
  // }

}


