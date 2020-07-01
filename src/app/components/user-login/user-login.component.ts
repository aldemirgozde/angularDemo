import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user=new User();
  msg='';

constructor(private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  
  onSubmit(f: NgForm) {
    this.authService.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received");
        this.router.navigate(['/userhome']);
      },
      error => {
        console.log("exception occured");
        this.msg="please enter valid usernam and password";
      }
    )
  }
}
