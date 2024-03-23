import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/core/services/api-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(private apiService: ApiServiceService, private router: Router) {}

  create(form: NgForm) {
    console.log(form.value);

    if (form.invalid) {
      return;
    }

    this.apiService.createPerfume(form.value).subscribe(() => {
      //! Fix the rotation mistake
      console.log('Successful creation!');
      this.router.navigate(['/home']);
    });
  }
}
