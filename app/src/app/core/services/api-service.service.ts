import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Perfume } from '../interfaces/Perfume';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPerfumes() {
    const { appUrl } = environment;
    return this.http.get<Perfume[]>(`${appUrl}/home`);
  }

  createPerfume(perfumeData: Perfume) {
    const { appUrl } = environment;
    return this.http.post<Perfume>(`${appUrl}/perfumes/create`, {
      perfumeData,
    });
  }

  getPerfume(id: string) {
    const { appUrl } = environment;
    return this.http.get<Perfume>(`${appUrl}/${id}`);
  }
}
