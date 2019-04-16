import { Component, OnInit } from '@angular/core';
import { FeedBackModel } from '../../models/feedback.model';
import { ProductArrayService } from '../../services/product-array.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  //selector: 'app-product-feedback-list',
  templateUrl: './product-feedback-list.component.html',
  styleUrls: ['./product-feedback-list.component.css']
})
export class ProductFeedbackListComponent implements OnInit {
  feedbacList: Array<FeedBackModel>;

  constructor(
    private productArrayService: ProductArrayService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.feedbacList = [];

    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.productArrayService.getProduct(+params.get('productId'))))
      .subscribe(
        product => 
          this.feedbacList = {...product}.feedbackList,
        err => console.log(err)
    );

    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/home']);
  }
}
