import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  name: string = '';
  lastname: string = '';
  cardNumber: string = '';

  constructor(
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.personalFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
    });
    this.paymentFormGroup = this._formBuilder.group({
      cardNumber: ['', Validators.pattern('[0-9]*')],
    });
  }

  cardChange() {
    if (this.paymentFormGroup.invalid && this.cardNumber.length === 12) {
      this.snackBar.open('❌ Invalid Card information! ❌', undefined, {
        duration: 3000,
      });
    }
  }
}
