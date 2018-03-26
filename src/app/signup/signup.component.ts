import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  form: FormGroup;                    
  private formSubmitAttempt: boolean; 

  constructor(private fb: FormBuilder, private authService: AuthService) { 
    this.form = new FormGroup({
      email : new FormControl(),
      password : new FormControl()
   });
  }

  ngOnInit() {
  }

  onSubmit(form : NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signUp(email, password);
  }

  isFieldinvalid(field : string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

}
