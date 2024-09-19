import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../shared/user.moodel';
import { UserService } from '../../shared/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  [x: string]: any;
  user: any = User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.reset();
    this.user = {
      UserName: '',
      Password: '',
      ConfirmPassword: '',
      Email: '',
      FirstName: '',
      LastName: '',
    };
  }

  OnSubmit(form: NgForm) {
    console.log('Hi', form.value);
    this.userService.registerUser(form.value).subscribe(
      (data: any) => {
        if (data.succeded) {
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
