import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Perfume } from '../interfaces/Perfume';
import { Observable, tap } from 'rxjs';
import { User } from '../interfaces/User';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private toastrService: ToastrService) {}

  getPerfumes() {
    const { appUrl } = environment;
    return this.http.get<Perfume[]>(`${appUrl}/home`);
  }

  createPerfume(
    brand: string,
    model: string,
    amount: number,
    imageUrl: string,
    price: string,
    description: string,
    owner: User | undefined
  ) {
    const { appUrl } = environment;
    return this.http
      .post<Perfume>(`/api/perfumes/create`, {
        brand,
        model,
        amount,
        imageUrl,
        price,
        description,
        owner,
      })
      .pipe(
        tap({
          next: () => {
            this.toastrService.success(`Create successful!`);
          },
          error: () => {
            this.toastrService.error(`Create error!`);
          },
        })
      );
  }

  getPerfume(id: string) {
    const { appUrl } = environment;
    return this.http.get<Perfume>(`${appUrl}/${id}`);
  }

  editPerfume(id: string | undefined, newData: Perfume) {
    const { appUrl } = environment;

    return this.http
      .put<Perfume>(`${appUrl}/perfumes/${id}/edit`, newData)
      .pipe(
        tap({
          next: () => {
            this.toastrService.success(`Edit successful!`);
          },
          error: () => {
            this.toastrService.error(`Edit error!`);
          },
        })
      );
  }

  deletePerfume(id: string | undefined) {
    const { appUrl } = environment;
    return this.http.delete<Perfume>(`${appUrl}/perfumes/${id}/delete`).pipe(
      tap({
        next: () => {
          this.toastrService.success(`Delete successful!`);
        },
        error: () => {
          this.toastrService.error(`Delete error!`);
        },
      })
    );
  }

  addCart(perfume: Perfume) {}

  getPerfumesByCreator(owner: User | undefined) {
    const { appUrl } = environment;
    return this.http.post<Perfume[]>(`/api/user/profile`, owner);
  }
}
