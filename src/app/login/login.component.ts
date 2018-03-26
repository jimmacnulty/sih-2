import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl , NgForm} from '@angular/forms';
import * as firebase from 'firebase';
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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
      email : new FormControl(),
      password : new FormControl()
   });
  
  } 

  isFieldinvalid(field : string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit(form : NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authservice.login(email, password);
  }

}
