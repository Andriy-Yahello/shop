import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, FormArray, ValidationErrors } from '@angular/forms';
import { CustomValidators } from '../../../validators';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private validationMessagesMap = {
    email: {
      required: 'Please enter your email address.',
      pattern: 'Please enter a valid email address.',
      email: 'Please enter a valid email address.',
      asyncEmailInvalid:
        'This email already exists. Please enter other email address.'
    }
  };
  validationMessage: string;

private setValidationMessage(c: AbstractControl, controlName: string) {
    this.validationMessage = '';

    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessage = Object.keys(c.errors)
        .map(key => this.validationMessagesMap[controlName][key])
        .join(' ');
    }
  }


  cities: Array<string> = [
    'Lviv',
    'Kiyv'
  ];

  orderForm: FormGroup;
  placeholder = {
    email: 'Email (required)',
    confirmEmail: 'Confirm Email (required)',
    phone: 'Phone'
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console
    this.buildForm();
    this.watchValueChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private setNotification(notifyVia: string) {
    const controls = new Map();
    controls.set('phoneControl', this.orderForm.get('phone'));
    controls.set('emailGroup', this.orderForm.get('emailGroup'));
    controls.set('emailControl', this.orderForm.get('emailGroup.email'));
    controls.set(
      'confirmEmailControl',
      this.orderForm.get('emailGroup.confirmEmail')
    );
  
    if (notifyVia === 'text') {
      controls.get('phoneControl').setValidators(Validators.required);
      controls.forEach(
        (control, index) =>
          index !== 'phoneControl' && control.clearValidators()
      );
  
      this.placeholder = {
        phone: 'Phone (required)',
        email: 'Email',
        confirmEmail: 'Confirm Email'
      };
    } else {
      controls
        .get('emailControl')
        .setValidators([
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'),
          Validators.email
        ]);
      controls.get('confirmEmailControl').setValidators([Validators.required]);
      controls.get('emailGroup').setValidators([CustomValidators.emailMatcher]);
      controls.get('phoneControl').clearValidators();
  
      this.placeholder = {
        phone: 'Phone',
        email: 'Email (required)',
        confirmEmail: 'Confirm Email (required)'
      };
    }
    controls.forEach(control => control.updateValueAndValidity());
  }

  get addresses(): FormArray {
    return <FormArray>this.orderForm.get('addresses');
  }

  get phones(): FormArray {
    return <FormArray>this.orderForm.get('phones');
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.orderForm.controls[controlName];
    
     const result = control.invalid && control.touched;
    
     return result;
    }

    showForm(){
      console.log( 'showForm');
      console.log( this.getFormValidationErrors());
    }

  onSave() {
    // Form model
    // console.log(this.orderForm);
    // Form value w/o disabled controls
    // console.log(`Saved: ${JSON.stringify(this.orderForm.value)}`);
    // Form value w/ disabled controls
    // console.log(`Saved: ${JSON.stringify(this.orderForm.getRawValue())}`);
  }

  onBlur() {
    const emailControl = this.orderForm.get('emailGroup.email');
    this.setValidationMessage(emailControl, 'email');
  }

  onAddAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhone());
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
      emailGroup: this.fb.group({
        email: ['',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'),
            Validators.email
          ]
        ],
        confirmEmail: ['', Validators.required],
      },{validator: CustomValidators.emailMatcher}),
      // phone: '',
      phones: this.fb.array([this.buildPhone()]),
      notification: 'email',
      serviceLevel: [''],
      sendProducts: true,
      addresses: this.fb.array([this.buildAddress()])
    });
  }

  private watchValueChanges() {
    this.sub = this.orderForm.get('notification').valueChanges
    .subscribe(value => this.setNotification(value));
    
    const emailControl = this.orderForm.get('emailGroup.email');
    const sub = emailControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(value =>
        this.setValidationMessage(emailControl, 'email')
      );
      this.sub.add(sub);  
  }

  private buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      country: '',
      city: '',
      zip: '',
      street1: '',
      street2: ''
    });
  }

  getFormValidationErrors() {
    Object.keys(this.orderForm.controls).forEach(key => {
  
    const controlErrors: ValidationErrors = this.orderForm.get(key).errors;
    if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
      });
    }

  phonePattern = "^((\\+91-?)|0)?[0-9]{10}$"; 

  private buildPhone(): FormGroup {
    return this.fb.group({
      phone: ['',  [Validators.required, Validators.pattern(this.phonePattern)]]
    });
  }
}
