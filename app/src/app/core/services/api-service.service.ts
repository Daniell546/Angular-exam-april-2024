import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Perfume } from '../interfaces/Perfume';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getPerfumes() {
    const {appUrl} = environment;
    return this.http.get<Perfume[]>(`${appUrl}/home`)
  }

  createPerfume(perfumeData: Perfume) {
    const {appUrl} = environment;
    return this.http.post<Perfume>(`${appUrl}/perfumes/create`, {
      perfumeData
    })
  }
}
