import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {
  count = 0;
  isLoggedIn = false;

  redirectUrl: string;

  login(): Observable<boolean> {
    this.count++;
    console.log('count '+ this.count);
    return of(true)
      .pipe(
        delay(1000),
        tap(val => {
          if (localStorage.getItem('isLoggedIn') === null)
            localStorage.setItem('isLoggedIn', `${val}`);
          this.isLoggedIn = val;
        })
      );
  }

  logout(): void {
    this.count--;
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }
}
