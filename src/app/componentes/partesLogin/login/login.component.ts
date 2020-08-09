import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../servicios/autenticacion/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  msg: string;
  display: boolean = false;

  constructor(public authService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.email,this.password);
    let user = this.authService.login(this.email,this.password);
    user.
    then(value => {
      this.msg = value;
      console.log(value);
      this.display = true;
    })
    .catch(err => {
      console.log('Algo fue mal:',err.message);
      this.msg = err.message;
      this.router.navigate(['/clientes']);
    });
    this.email = '';
    this.password = '';

    if(!this.display){
      this.router.navigate(['/clientes']);
    }
  }

  irRegistar(){
    this.router.navigate(['/register']);
  }

}
