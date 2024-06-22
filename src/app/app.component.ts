import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';

  // this variable declare for whatever number click on the calculator that is store in this variable
  stringToEvaluate: string = "";
  // calculator input method and pass parameter num
  takeInput(num: string) {
    this.stringToEvaluate = this.stringToEvaluate + num;
    console.log(this.stringToEvaluate);
  }

  evaluateResult() {
    // here we use eval() functuin for the +,-,*,/ like different operation
    // here we write one case if user direct click = button then this give undefined for that here we use condition
    if (this.stringToEvaluate != '') {
      this.stringToEvaluate = eval(this.stringToEvaluate);
    }

  }

  // this method is for AC button for clear the screen
  resetResult() {
    this.stringToEvaluate = "";
  }

}
