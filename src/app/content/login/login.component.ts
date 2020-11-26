import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
  ) {
  }

  ngOnInit(): void {
    // console.log(this.router.config);
    // const config = this.router.config;
    // const signupRoute = {
    //   path: 'signup',
    //   component: SignupComponent
    // };
    // config.splice(config.length - 1, 0, signupRoute);
    // this.router.resetConfig(config);

  }

}
