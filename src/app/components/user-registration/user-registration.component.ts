import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MustMatch } from '../../must-match.validator';
import { User } from '../../models/user';
import { NavService } from '../../services/nav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


//import { AuthService } from 'src/app/shared/services/auth.service';
//import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
//import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public userForm;
  users;
  errorMsg;
  uf;
  navcheck: boolean;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, public authService:AuthService,public navService:NavService) { }

  //constructor(private authService: AuthService, public progressBar: ProgressBarService,
  //  private alertService: AlertService) { }
  opened = true;
  
  @ViewChild('sidenav',  { static: true }) sidenav: MatSidenav;
  ngOnInit(): void {
     this.navService.hide();
     this.userForm = this.fb.group({
       //id: ['', [Validators.required, Validators.minLength(1)]],
      name: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(3)]],
      confirmpass: ['', Validators.required]
    },{
      validator: MustMatch('password', 'confirmpass')
  });
  }
  onSubmit(userForm){

    console.log(this.userForm.value);
    this.uf = this.fb.group({
      name:[this.userForm.value.name],
      email:[this.userForm.value.email],
      password:[this.userForm.value.password]
    })
    console.log(this.uf.value);
    this.userService.postUser(this.uf.value).subscribe(
      (data) => {
        this.users = data; 
        console.log(this.users);
        this.userService.getUsers().subscribe(
          (data) => this.users = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(['/userlogin']);
    this.userForm.reset();
  }
  



  get id() {
    return this.userForm.get('id');
  }

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get confirmpass() {
    return this.userForm.get('confirmpass');
  }

}
