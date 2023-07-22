import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
  });


onSubmit() {
  console.log(this.loginForm.value);
}

}
