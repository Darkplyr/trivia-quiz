import { Component, OnInit, Input} from '@angular/core';
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
    var button = document.getElementById(choice);
    var submittedAnswer = button?.innerHTML;
    console.log(submittedAnswer);

    //button.style.backgroundColor='#000000';

    //this.button.style.backgroundColor = "rgb(255,0,0)";
    
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
