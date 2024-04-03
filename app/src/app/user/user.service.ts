import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../core/interfaces/User';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

const USER_KEY = 'auth';
@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);

  user$ = this.user$$.asObservable();
  user: User | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    })
  }

  registerUser(
    email: string,
    phonenumber: number,
    password: string,
    rePass: string
  ) {
    
    return this.http
      .post<User>(`/api/user/register`, {
        email,
        phonenumber,
        password,
        rePass
      })
      .pipe(
        tap({
          next: (user) => {
            this.user$$.next(user);
            this.toastrService.success(
              `Welcome ${user.email}!`,
              'Register successful'
            );
          },
          error: (errorResponse) => {
            this.toastrService.error(errorResponse.error, 'Register error');
          },
        })
      );
  }

  loginUser(email: string, password: string) {
    return this.http
      .post<User>(`/api/user/login`, {
        email,
        password,
      })
      .pipe(
        tap({
          next: (user) => {
            this.user$$.next(user);
            console.log(this.user$$.value);
            
            this.toastrService.success(
              `Welcome ${user.email}!`,
              'Log in Successful'
            );
          },
          error: (errorResponse) => {
            this.toastrService.error(errorResponse.error, 'Log in error');
          },
        })
      );
  }

  logOutUser() {
    return this.http.post(`/api/user/logout`, {}).pipe(
      tap({
        next: () => {
          this.user$$.next(undefined);
          this.toastrService.success(`Log out successful!`);
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Log out error');
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
