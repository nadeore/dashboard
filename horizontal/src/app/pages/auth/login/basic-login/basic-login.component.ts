import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../authentication.service';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUser) {
    //   this.router.navigate(['/auth/login']);
    // }
  }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit(formdata: any): void {
    // alert("OK");
    // console.log(this.loginForm.value);
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.authenticationService.loginUser(this.loginForm.value)
        .subscribe(data => {
          // console.log(data.status);
          if (data.status === false) {
            alert('Error');
            // this.toastr.error(data.json().message);
          } else {
            // this.toastr.success('Login successful.');
            alert('Login Successfully');
            this.router.navigate(['/dashboard']);
          }
          this.loginForm.reset();
        });
    }
  }
}
