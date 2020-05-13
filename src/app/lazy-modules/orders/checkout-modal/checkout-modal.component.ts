import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Order } from 'src/app/models/order/order';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { OrderService } from 'src/app/services/order/order.service';

function validateCustomerCash(min: number): ValidatorFn{

  return (control: FormControl): ValidationErrors | null => {

    if(isNaN(control.value))
      return ['Input must be a valid number.']

    const n: number = Number(control.value);

    if(n < min)
      return [`Input must not be less than P ${min}.`];

    return null;

  }
  
}

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss']
})
export class CheckoutModalComponent implements OnInit, OnChanges {

  @Input() order: Order;

  customer_cash: FormControl;

  constructor(private matDialogRef: MatDialogRef<CheckoutModalComponent>,
              private orderService: OrderService) {

    this.customer_cash = new FormControl('');
  }

  ngOnInit(): void {
    if(this.order)
      this.customer_cash.setValidators([ 
        Validators.required, 
        validateCustomerCash(this.order.total_amount)
      ]);
  }

  ngOnChanges(change: SimpleChanges): void {
    if(change.order)
      this.customer_cash.setValidators([ 
        Validators.required, 
        validateCustomerCash(change.order.currentValue.total_amount)
      ]);
  }

  cancel(): void {
    this.matDialogRef.close(null);
  }

  checkout(): void {

    if(this.customer_cash.valid){

      const order: any = {
        id: this.order.id,
        customer_cash: this.customer_cash.value,
        action: 'checkout'
      };

      this.orderService.update(order).subscribe( order => {
        this.matDialogRef.close(order);
      })
    }

    else
      console.log(this.customer_cash.errors);
      
  }
}
