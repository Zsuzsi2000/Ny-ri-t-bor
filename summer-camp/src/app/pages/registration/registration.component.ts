import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AuthService } from "../../shared/services/auth.service";
import { User } from "./User";
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  message: string = '';

  registrationForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    motherName: new FormControl(''),
    childName: new FormControl(''),
    childBirthday: new FormControl(''),
    comment: new FormControl('')
  });

  user: User = {} as User;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.authService.signup(this.registrationForm.get('email')?.value, this.registrationForm.get('password')?.value)
      .then(cred => {
        console.log(cred);
        this.user = {
          id: cred.user?.uid as string,
          email: this.registrationForm.get('email')?.value,
          motherName: this.registrationForm.get('motherName')?.value,
          childName: this.registrationForm.get('childName')?.value,
          childBirthday: this.registrationForm.get('childBirthday')?.value,
          comment: this.registrationForm.get('comment')?.value
        };
        this.userService.create(this.user).then(_ => {
          console.log('User added successfully.');
          this.message = 'A regisztráció sikeresen megtörtént';
        }).catch(error => {
          console.error(error);
          this.message = '';
        })
      }).catch(error => {
      console.error(error);
      this.message = '';
    });
  }

  updateUser() {
    this.user = {
      id: this.user?.id,
      email: this.registrationForm.get('email')?.value,
      motherName: this.registrationForm.get('motherName')?.value,
      childName: this.registrationForm.get('childName')?.value,
      childBirthday: this.registrationForm.get('childBirthday')?.value,
      comment: this.registrationForm.get('comment')?.value
    };
    this.userService.update(this.user).then(_ => {
      this.message = 'A frissítés sikeresen megtörtént.';
    }).catch(error => {
      console.error(error);
      this.message = 'Nem sikerült a frissítés.';
    });
  }
  deleteUser () {
    this.userService.delete(this.user.id).then(_ => {
      this.message = 'A törlés sikeresen megtörtént.';
    }).catch(error => {
      console.error(error);
      this.message = 'Nem sikerült a törlés.';
    });
  }

}
