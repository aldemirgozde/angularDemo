
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProviderService } from '../../services/provider.service';
import { MustMatch } from '../../must-match.validator';
import { Provider } from '../../models/provider';
import { NavService } from '../../services/nav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-provider-registration',
  templateUrl: './provider-registration.component.html',
  styleUrls: ['./provider-registration.component.css']
})
export class ProviderRegistrationComponent implements OnInit {
  public userForm;
  users;
  errorMsg;
  uf;
  navcheck: boolean;
  constructor(private fb: FormBuilder, private proService: ProviderService, private router: Router, public authService:AuthService,public navService:NavService) { }



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
    this.proService.postProvider(this.uf.value).subscribe(
      (data) => {
        this.users = data; 
        console.log(this.users);
        this.proService.getProviders().subscribe(
          (data) => this.users = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(['/addmenu']);
    this.userForm.reset();
  }
}
