import { Component, OnInit } from '@angular/core';
import { FeedBackModel } from '../../models/feedback.model';
import { ProductArrayService } from '../../services/product-array.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './product-feedback-list.component.html',
  styleUrls: ['./product-feedback-list.component.css']
})
export class ProductFeedbackListComponent implements OnInit {
  feedbackList: Array<FeedBackModel>;

  constructor(
    private productArrayService: ProductArrayService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.feedbackList = [];

    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.productArrayService.getProduct(+params.get('productId'))))
      .subscribe(
        product => 
          this.feedbackList = {...product}.feedbackList,
        err => console.log(err)
    );

    //this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/home']);
  }
}
