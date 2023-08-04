import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal  from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../styles/auth-shared.scss']
})
export class LoginComponent {
  
  constructor(private authService: AuthService, 
    private router: Router, private fb: FormBuilder) { }

  public formSubmitted = false;

  loginForm = this.fb.group({
    email: ['baironbernal273@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required,]], 
  }, {
    validators: () => {}
  });


  login() {
    this.formSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  
  
    this.authService.login(this.loginForm.value).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/post/my-publications')  
    }, (err) => {

      Swal.fire('Error', err.error.msg, 'error')
    })    
    
    console.log(this.loginForm.value);
  }

}
