import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Лабораторная работа № 2';
  fio = 'Выполнила: ';
  firstOperand: number;
  secondOperand: number;
  operator: string;
  result: number;
  errorMessage: string;
  doCalc(){
    if(this.firstOperand != null && this.secondOperand != null && this.operator != null){
      if (this.operator == "&&"){
        if(this.firstOperand > 1){
          this.errorMessage="значение можно вводить только '0' или '1'";
          this.result= null;
        }else{
          this.result=this.firstOperand && this.secondOperand;
          this.errorMessage = "Нет ошибки";
        }
        if(this.secondOperand > 1){
          this.errorMessage="значение можно вводить только '0' или '1'";
          this.result= null;
        }else{
          this.result=this.firstOperand && this.secondOperand;
          this.errorMessage = "Нет ошибки";
        }
      }else if (this.operator == "||"){
          this.result=this.firstOperand || this.secondOperand;
          this.errorMessage = "Нет ошибки";

      }
    }else{
      if(this.firstOperand == null){
        this.errorMessage = "Нет первого значение";
      }else if(this.secondOperand == null){
        this.errorMessage = "Нет второго значение";
      }else if(this.operator == null){
        this.errorMessage = "Нет оператора действия";
      }
    }
  }
}
