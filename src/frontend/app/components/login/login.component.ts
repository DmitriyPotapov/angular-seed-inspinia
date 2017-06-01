import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, SharedServices } from '../../services/index';
import { Component, OnInit } from '@angular/core';

interface LoginFormData {
  username: string;
  password: string;
}

@Component({
  moduleId: module.id,
  selector: 'login-selector',
  templateUrl: 'login.template.html',
})

export class LoginComponent implements OnInit {

  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private shared: SharedServices) {
  }
  ngOnInit() {
    // reset login status
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLogin(postData: LoginFormData) {
    console.log(postData);
    this.auth.login(postData.username, postData.password).subscribe(
      result => {
        console.debug(this.returnUrl);
        console.debug(result);
        this.router.navigate([this.returnUrl]);
      },
      error => {
        let errorMessage = '';
        let errorTitle = this.shared.translate.instant('ERRORS.SWW');
        if (error.status === 0)
          errorMessage += 'No response from OAuth server.';
        this.shared.toastr.error(errorMessage, errorTitle);
      });
  }
}
