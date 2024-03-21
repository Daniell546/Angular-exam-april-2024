import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../core/services/api-service.service';
import { Perfume } from '../core/interfaces/Perfume';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  perfumesList: Perfume[] = [];
  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.getPerfumes().subscribe((perfumes: Perfume[]) => {
      this.perfumesList = perfumes;
      console.log(perfumes);
    });

    console.log(this.perfumesList);
  }
}
