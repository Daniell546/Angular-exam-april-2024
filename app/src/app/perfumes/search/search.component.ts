import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Perfume } from 'src/app/core/interfaces/Perfume';
import { ApiService } from 'src/app/core/services/api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  perfumesList: Perfume[] = []

  constructor(private apiService: ApiService){}
  search(form: NgForm) {
    if(form.invalid) return;

    this.apiService.search(form.value.brand).subscribe((perfumes) => {
      console.log(perfumes);
      this.perfumesList = perfumes
    });

  }

}
