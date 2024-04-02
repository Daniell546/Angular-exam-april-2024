import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../core/interfaces/User';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

const USER_KEY = 'auth';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    // private cookieService: CookieService,
    // private toastrService: ToastrService
  ) {}

  registerUser(userData: User): Observable<any> {
    const { appUrl } = environment;
    return this.http.post<User>(`${appUrl}/user/register`, userData).pipe(
      tap({
        next: (data) => {
          console.log(data);
          
        }
      })
    )
  }
}
