import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  features : any = [];
  correctAnswer : string = ""
  constructor() { 
    this.callQuestion();
    // fetch('https://opentdb.com/api.php?amount=1&encode=url3986').then(res => res.json())
    // .then(data => {
    //   for (let i = 0; i < data.results.length; i++) {
    //     let f = {
    //       question : decodeURIComponent(data.results[i].question),
    //       choices : data.results[i].incorrect_answers,
    //       answer : decodeURIComponent(data.results[i].correct_answer),
    //     }
    //     f.choices = this.decodeArray(f.choices);
    //     f.choices.splice(Math.floor(Math.random() * 4), 0, f.answer);
    //     this.features.push(f);
    //     this.correctAnswer = f.answer;
    //   }
    // })
  }

  callQuestion() : void
  {
    fetch('https://opentdb.com/api.php?amount=1&encode=url3986').then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.results.length; i++) {
        let f = {
          question : decodeURIComponent(data.results[i].question),
          choices : data.results[i].incorrect_answers,
          answer : decodeURIComponent(data.results[i].correct_answer),
        }
        f.choices = this.decodeArray(f.choices);
        f.choices.splice(Math.floor(Math.random() * 4), 0, f.answer);
        this.features.push(f);
        this.correctAnswer = f.answer;
      }
    })
  }

  decodeArray(array : any) : any {
    for (let i = 0; i < array.length; i++) {
      array[i] = decodeURIComponent(array[i]);
    }
    return array;
  }
}
