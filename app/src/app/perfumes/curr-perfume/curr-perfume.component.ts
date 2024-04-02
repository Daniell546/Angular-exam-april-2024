import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Perfume } from 'src/app/core/interfaces/Perfume';
import { ApiService } from 'src/app/core/services/api-service.service';

@Component({
  selector: 'app-curr-perfume',
  templateUrl: './curr-perfume.component.html',
  styleUrls: ['./curr-perfume.component.css']
})
export class CurrPerfumeComponent implements OnInit{
  perfume: Perfume | undefined;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {};

  ngOnInit(): void {
    this.fetchPerfume()
  }

  fetchPerfume():void {
    const id = this.activatedRoute.snapshot.params['perfumeId'];
    this.apiService.getPerfume(id).subscribe((perfume: Perfume) => {
      this.perfume = perfume;
    });
  }
}
