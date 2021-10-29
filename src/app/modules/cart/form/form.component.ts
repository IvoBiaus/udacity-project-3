import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'cart-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class FormComponent implements OnInit {
  personalFormGroup!: FormGroup;
  paymentFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.personalFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
    });
    this.paymentFormGroup = this._formBuilder.group({
      cardNumber: ['', Validators.pattern('[0-9]*')],
    });
  }
}
