import { Component } from '@angular/core';
import { multicast } from 'rxjs';

@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.component.html',
  styleUrls: ['./calcu.component.css']
})
export class CalcuComponent {
  num1 : number = 0;
  num2 : number = 0;
  result : number = 0;
  
  calc(op : string){
   switch (op) {
    case "+":
      this.result = this.num1 + this.num2;
      break;
  
    case "-":
      this.result = this.num1 - this.num2;
      break;
  
    case "*":
      this.result = this.num1 * this.num2;
      break;
  
    case "/":
      this.result = this.num1 / this.num2;
      break;
      }
    }
  }