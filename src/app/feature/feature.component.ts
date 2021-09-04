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
    //apC.callQuestion();
  }

  ngOnInit(): void {
    
  }

  checkAnswer(choice : string, answer : string) : void {
    // working 
    //console.log(choice);
    //console.log(answer);
    //var button = document.getElementById("btn");
    //if correct => change color to green else change color to red
    console.log(this.choices);
    var button = document.getElementById(choice);
    console.log(button?.innerText);
    if(choice === answer)
    {
      console.log("Correct");
      button?.setAttribute("style", "background-color: #00FF00");
    }
    else
    {
      console.log("Wrong");
      button?.setAttribute("style", "background-color: #FF0000");
    }

    for (let i = 0; i < this.choices.length; i++) {
      var button1 = document.getElementById(this.choices[i]);
      button1?.setAttribute("disabled", "")
    }
    
  }

  

/*function submitAnswer()
{
    var radios = document.getElementsByTagName("input");
    var value;
    for (var i = 0; i < radios.length; i++)
    {
        if(radios[i].type === 'radio' && radios[i].checked)
        {
            value = radios[i].value;
        }
    }
    if(value == 0)
    {
        alert("Correct Answer");
    }
    else
    {
        alert("Wrong Asnwer");
    }
}*/

}
