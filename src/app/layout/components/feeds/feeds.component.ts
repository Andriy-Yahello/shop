import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackListService } from 'src/app/core';


@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  feed = '';

  constructor(
    public feedbackListService: FeedbackListService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('FeedsComponent')
  }

  onClose() {
    this.router.navigate([{ outlets: { feeds: null } }]);
    this.feedbackListService.isDisplayed = false;
  }

  onSend() {
    console.log('feed'+this.feed)
    if (this.feed) {
      this.feedbackListService.addFeedback(this.feed);
      this.feed = '';
    }
  }
}
