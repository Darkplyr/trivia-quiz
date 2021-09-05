import { Component, OnInit, Input, ElementRef} from '@angular/core';
import { AppComponent } from "../app.component"

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit { 
  @Input() question : string = 'question';
  @Input() answer : string = 'answer';
  @Input() choices : any = [];
  constructor(private apC : AppComponent) {
  }

  ngOnInit(): void {
    var nextButton = document.getElementById("nxtBtn");
    nextButton?.setAttribute("disabled", "true");
  }

  checkAnswer(choice : string, answer : string) : void {
    var answerBtn = document.getElementById(choice);
    if(choice === answer)
    {
      console.log("Correct");
      answerBtn?.setAttribute("style", "background-color: #00FF00");
      this.createElement("#00FF00");
    }
    else
    {
      console.log("Wrong");
      answerBtn?.setAttribute("style", "background-color: #FF0000");
      this.createElement("#FF0000");
    }

    for (let i = 0; i < this.choices.length; i++) {
      var choiceBtn = document.getElementById(this.choices[i]);
      choiceBtn?.setAttribute("disabled", "true")
    }

    var nextButton = document.getElementById("nxtBtn");
    nextButton?.removeAttribute("disabled");
  }

  nextQuestion() : void{
    var mainDiv = document.getElementById("mainDiv");
    this.removeElement("mainDiv");
    this.apC.callQuestion();
  }
  
  removeElement(elementId : any) : void {
    var element = document.getElementById(elementId);
    element?.parentNode?.removeChild(element);
    }

  createElement(choice : string) : void {
    var element = document.createElement("button");
    var asnwerBtn = document.getElementById(choice);
    element?.setAttribute("disabled", "true");
    element?.setAttribute("class", "btn-progBar");
    element?.setAttribute("style", "width: 10px; background-color: " + choice)
    console.log("Done!");
    var body = document.getElementById("progBar");
    body?.appendChild(element);
    element.addEventListener ("click", function() {
      alert("did something");
    });
  }
}
