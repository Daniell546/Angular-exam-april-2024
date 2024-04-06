import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api-service.service';
import { Perfume } from '../core/interfaces/Perfume';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  isEmpty: boolean = false;
  perfumesList: Perfume[] = [];
  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.apiService.getPerfumes().subscribe({
      next: (perfumes) => {
        this.perfumesList = perfumes;
        if (this.perfumesList.length > 0) {
          this.isLoading = false;
        } else {
          this.isEmpty = true;
        }
      },
      error: (err) => {
        // this.isLoading = false;
        this.isEmpty = true;

        console.error(`Error occured: ${err.message}`);
      },
    });
  }
}
