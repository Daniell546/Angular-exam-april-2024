import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Injectable({ providedIn: 'root' })
export class LoggedGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  hasUser = true;
  canActivate(): boolean {
    this.userService.getProfile().subscribe({
      next: () => {
        this.hasUser = false;
      },
      error: () => {
        this.hasUser = true;
      },
      complete: () => {
        this.hasUser = false;
      },
    });
    return this.hasUser;
  }
}
