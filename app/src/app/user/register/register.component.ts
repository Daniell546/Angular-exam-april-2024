import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  constructor(private userService: UserService, private router: Router) {}


  register(form: NgForm) {

    if(form.invalid) return;
    
    this.userService.registerUser(form.value).subscribe((token) => {
      console.log(token);
      
      this.router.navigate(["/home"])
    })
  }
}
