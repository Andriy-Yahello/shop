import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../../validators';

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
  placeholder = {
    email: 'Email (required)',
    phone: 'Phone'
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.createForm();
    this.buildForm();
  }

  onSave() {
    // Form model
    console.log(this.orderForm);
    // Form value w/o disabled controls
    console.log(`Saved: ${JSON.stringify(this.orderForm.value)}`);
    // Form value w/ disabled controls
    console.log(`Saved: ${JSON.stringify(this.orderForm.getRawValue())}`);
}

  private buildForm() {
    this.orderForm = this.fb.group({
      firstName: this.fb.control(
        '',
        { validators: [Validators.required, Validators.minLength(3)],
          updateOn: 'blur' }),
      lastName: [
        { value: 'New User', disabled: false },
        [Validators.required, Validators.maxLength(50)]
      ],
      email: [
        '',
        [Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'),
          Validators.email]
      ],
      phone: '',
      notification: 'email',
      serviceLevel: [''],
      sendProducts: true
    });
  }

  private createForm() {
    this.orderForm = new FormGroup({
      firstName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
        updateOn: 'blur'
      }),
      lastName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      notification: new FormControl('email'),
      serviceLevel: new FormControl('', {
        validators: [CustomValidators.serviceLevel],
        updateOn: 'blur'
      }),
      sendProducts: new FormControl(true)
    });
  }

  onSetNotification(notifyVia: string) {
    const phoneControl = this.orderForm.get('phone');
    const emailControl = this.orderForm.get('email');

    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
      emailControl.clearValidators();
      this.placeholder.email = 'Email';
      this.placeholder.phone = 'Phone (required)';
    }
    else {
      emailControl.setValidators( [
        Validators.required, 
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), 
        Validators.email
      ]);
      phoneControl.clearValidators();
      this.placeholder.email = 'Email (required)';
      this.placeholder.phone = 'Phone';
    }
    phoneControl.updateValueAndValidity();
    emailControl.updateValueAndValidity();
 } 

}
