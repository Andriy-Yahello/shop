import { Injectable } from '@angular/core';
import * as RouterActions from './../+store/router/router.actions';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../+store';

@Injectable({
  providedIn: CoreModule
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
    // private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('CanActivateGuard is called');
      const { url } = state;
      return this.checkLogin(url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanActivateChild Guard is called');
    const { url } = state;
    return this.checkLogin(url);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  private checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    this.authService.redirectUrl = url;

    // this.router.navigate(['/login']);
    this.store.dispatch(new RouterActions.Go({
      path: ['/login'],
      // extras: navigationExtras
    }));

    return false;
  }
}
