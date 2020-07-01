import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Provider } from 'src/app/models/provider';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-login',
  templateUrl: './provider-login.component.html',
  styleUrls: ['./provider-login.component.css']
})
export class ProviderLoginComponent implements OnInit {
  pro=new Provider();
  msg='';
  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    this.authService.loginProvider(this.pro).subscribe(
      data => {
        console.log("response received");
        this.router.navigate(['/providerhome']);
      },
      error => {
        console.log("exception occured");
        this.msg="please enter valid username and password";
      }
    )
  }

}
