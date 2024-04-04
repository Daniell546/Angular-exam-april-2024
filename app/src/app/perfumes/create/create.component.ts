import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  create(form: NgForm) {
    if (form.invalid) {
      return;
    }
  
    this.apiService.createPerfume(form.value).subscribe(() => {
      this.router.navigate(['/home'])
    });
  }
  
}
