import { Component, OnInit } from '@angular/core';
import { OrderFormModel } from '../../../core/models/order-form.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {
  cities: Array<string> = [
    'Lviv',
    'Kiyv'
  ];

  orderForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  onSave() {
    // Form model
    console.log(this.orderForm);
    // Form value w/o disabled controls
    console.log(`Saved: ${JSON.stringify(this.orderForm.value)}`);
    // Form value w/ disabled controls
    console.log(`Saved: ${JSON.stringify(this.orderForm.getRawValue())}`);
}

  private createForm() {
    this.orderForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendProducts: new FormControl(true)
    });
  }
}
