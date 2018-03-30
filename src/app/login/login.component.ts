import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl , NgForm} from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;                    
  private formSubmitAttempt: boolean; 

  constructor(private fb: FormBuilder, private af: AngularFireAuth, private router:Router) {
    
    if (this.af.auth.currentUser != undefined) {
      this.router.navigate(['/add']);
    } else {
      this.router.navigate(['/login']);
    }

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

    this.af.auth.signInWithEmailAndPassword(email, password).then(success => {
      this.router.navigate(['/add'])
    })
      .catch(error => {
        console.log(error.message);
    })  ;
  }

}
