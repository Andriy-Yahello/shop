import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true)
      .pipe(
        delay(1000),
        tap(val => {
          if (localStorage.getItem('isLoggedIn') === null) {
            localStorage.setItem('isLoggedIn', `${val}`);
          }
          this.isLoggedIn = val;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }
}
