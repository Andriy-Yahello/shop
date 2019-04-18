import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class FeedbackListService {
  isDisplayed = false;

  private feedbackList: string[] = [];

  addFeedback(feedback: string): void {
    const currentDate = new Date();
    this.feedbackList.unshift(`${feedback} at ${currentDate.toLocaleString()}`);
  }

  getFeedbackList(): Array<string> {
    return this.feedbackList;
  }
}
