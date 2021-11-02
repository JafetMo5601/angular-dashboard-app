import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGardService } from './auth-gard.service';

@Injectable({
  providedIn: 'root'
})
export class LooggedInGuard implements CanActivate {
  constructor(
    private authGuardService: AuthGardService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authGuardService.getToken()) {
      this.router.navigateByUrl("/dashboard");
    }
    return !this.authGuardService.getToken();
  }  
}
