import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;                    
  private formSubmitAttempt: boolean; 

  constructor(private fb: FormBuilder, private authservice: AuthService) {
    // let usr = {
    //   "username": "omkar",
    //   "password": "admin"
    // }

    // firebase.database().ref("users").push(usr).then(function () {
    //   console.log("new usr added");
    // })
    this.form = new FormGroup({
      userName : new FormControl(),
      password : new FormControl()
   });
  
  } 

  ngOnInit() {
    this.form == this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  isFieldinvalid(field : string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.authservice.login(this.form.value); 
    }
    this.formSubmitAttempt = true;             
  }

}
