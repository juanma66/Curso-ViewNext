import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  subDisplayText = '0';
  mainDisplayText = '0';
  operand1: number=0;
  operand2: number=0;
  operator = '';
  calculationString = '';
  // This string  denotes the operation being performed
  answered = false;
  //  flag to check whether the solution has been processed
  operatorSet = false;

  constructor() { }
  pressKey(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.mainDisplayText[this.mainDisplayText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+') {
        this.operatorSet = true;
      }
      if ((this.operatorSet) || (this.mainDisplayText === '')) {
        return;
      }
      this.operand1 = parseFloat(this.mainDisplayText);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.mainDisplayText.length === 10) {
      return;
    }
    this.mainDisplayText += key;
  }
  allClear() {
    this.mainDisplayText = '';
    this.subDisplayText = '';
    this.operatorSet = false;
  }
  getAnswer() {
    this.calculationString = this.mainDisplayText;
    this.operand2 = parseFloat(this.mainDisplayText.split(this.operator)[1]);
    if (this.operator === '/') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 / this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = this.mainDisplayText.substr(0, 9);
      }
    } else if (this.operator === 'x') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 * this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = 'ERROR';
        this.subDisplayText = 'Range Exceeded';
      }
    } else if (this.operator === '-') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 - this.operand2).toString();
      this.subDisplayText = this.calculationString;
    } else if (this.operator === '+') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 + this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = 'ERROR';
        this.subDisplayText = 'Range Exceeded';
      }
    } else {
      this.subDisplayText = 'ERROR: Invalid Operation';
    }
    this.answered = true;
  }

  ngOnInit(): void {
  }

}
