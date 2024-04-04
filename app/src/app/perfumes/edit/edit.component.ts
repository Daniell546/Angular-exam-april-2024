import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfume } from 'src/app/core/interfaces/Perfume';
import { ApiService } from 'src/app/core/services/api-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  perfume: Perfume | undefined;
  id: string | undefined;
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchPerfume();
  }

  edit(form: NgForm) {
    if (form.invalid) return;
    this.apiService.editPerfume(this.id, form.value).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  fetchPerfume(): void {
    const id = this.activatedRoute.snapshot.params['perfumeId'];
    this.apiService.getPerfume(id).subscribe((perfume: Perfume) => {
      this.perfume = perfume;
      this.id = perfume._id;
    });
  }
}
