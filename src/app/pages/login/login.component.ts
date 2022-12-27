import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookiesService } from 'src/app/service/cookies.service';
import { UserLoginService } from 'src/app/service/user-login.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorEmail: string;
  errorPassword: string;
  placeholderEmail: string = 'Email';
  placeholderPass: string = 'PW';
  outline = 'outline';
  user: any;
  users: any = [];

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  constructor(
    private userLogin: UserLoginService,
    private router: Router,
    private cookies: CookiesService,
    private notification: NzNotificationService
  ) {}
  addUserForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    if (
      this.addUserForm.value.email != null &&
      this.addUserForm.value.password != null
    ) {
      this.user = this.addUserForm.value;
      this.userLogin.addUser(this.user).subscribe((response: any) => {
        if (response.status == 200) {
          this.router.navigate(['/dashboard']);
          this.cookies.setCookie({ name: 'token', value: response[0].token });
          this.createNotification('success', 'Login success');
        } else {
          this.createNotification(
            'Failure',
            "Password or user name not't correct please login again"
          );
          this.cookies.deleteCookie('token');
        }

        this.users.push({ name: response.name, job: response.job });
      });
    }
  }

  createNotification(
    type: string,
    message: string,
    messageDetail: string = ''
  ): void {
    this.notification.create(type, message, messageDetail);
  }
}
