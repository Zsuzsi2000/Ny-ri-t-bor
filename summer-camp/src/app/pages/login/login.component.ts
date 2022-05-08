import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');
  loading: boolean = false;
  error: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    this.loading = true;
    this.authService.login(this.email.value, this.password.value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/my-data');
      this.loading = false;
      this.error = '';
    }).catch(error => {
      console.error(error);
      this.loading = false;
      this.error = 'A felhasználónév vagy a jelszó helytelen.';
    });
  }

}
