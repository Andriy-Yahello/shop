import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeedbackListService } from './core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'shop';
  private sub: Subscription;

  constructor(
    private titleService: Title,
    public feedbackListService: FeedbackListService,
    private router: Router) {}

  onDisplayFeeds(): void {
    console.log("onDisplayFeeds");
    this.router.navigate([{ outlets: { feeds: ['feeds'] } }]);
    this.feedbackListService.isDisplayed = true;
  }

  ngOnInit() {
    this.setPageTitles();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private setPageTitles() {
      this.sub = this.router.events
        .pipe(
          
          filter(event => event instanceof NavigationEnd),
          map(() => this.router.routerState.root),
          map(route => {
            while (route.firstChild) {
              route = route.firstChild;
            }
            return route;
          }),
          filter(route => route.outlet === 'primary'),
          switchMap(route => route.data)
        )
        .subscribe(
          data => this.titleService.setTitle(data['title'])
        );
    }
}
