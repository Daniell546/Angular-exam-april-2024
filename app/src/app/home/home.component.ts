import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../core/services/api-service.service';
import { Perfume } from '../core/interfaces/Perfume';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  perfumesList: Perfume[] = [];
  constructor(
    private apiService: ApiServiceService,
    private activeRoute: ActivatedRoute
  ) {
    // let PerfumeObs: Observable<Perfume[]>;
    // activeRoute.params.subscribe((params) => {
    //   PerfumeObs = this.apiService.getPerfumes();

    //   PerfumeObs.subscribe((params: Perfume[]) => {
    //     this.perfumesList = params;
    //     console.log(this.perfumesList);
    //   })
    // });
  }

  ngOnInit(): void {
    this.apiService.getPerfumes().subscribe({
      next: (perfumes) => {
        this.perfumesList = perfumes;
        console.log(this.perfumesList);
      },
      error: (err) => {
        console.error(`Error occured: ${err.message}`);
      },
    });
  }
}
