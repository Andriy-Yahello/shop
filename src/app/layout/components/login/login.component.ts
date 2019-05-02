import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from './../../../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  message: string;
  checkLogin: boolean;
  private unsubscribe: Subject<void> = new Subject();

  ngOnInit(): void {
    this.checkLogin = JSON.parse(localStorage.getItem('isLoggedIn')) === null
      ? false
      : JSON.parse(localStorage.getItem('isLoggedIn'));
    this.setMessage();
  }

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
}

onLogin() {
    this.message = 'Trying to log in ...';
    this.authService
      .login()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
       () => {
         this.setMessage();
         if (this.authService.isLoggedIn ||
            JSON.parse(localStorage.getItem('isLoggedIn')) === true) {
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/admin';
          this.router.navigate([redirect]);
      }
    },
        err => console.log(err),
        () => console.log('[takeUntil] complete')
    );
  }

  onLogout() {
      this.authService.logout();
      this.checkLogin = false;
      this.setMessage();
  }

  private setMessage() {
      this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
}
