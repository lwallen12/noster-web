import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-presidential-prediction',
  templateUrl: './presidential-prediction.component.html',
  styleUrls: ['./presidential-prediction.component.css']
})
export class PresidentialPredictionComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }


  //Can this be made into a function that takes a form group so it is reusable?  
  checkOther() {
    this.predictionForm.controls.candidate1Info.valueChanges.subscribe(value => {
      console.log(value.candidate1);

      if (value.candidate1 == 'Other:') {
        this.showOther = true;
        //this.predictionForm.controls.candidate1Info.value.candidate1 = this.predictionForm.controls.candidate1Info.value.c1Other;
        let x = this.predictionForm.controls.candidate1Info.value.c1Other;
        console.log(x); //can we now pass x as this value instead? if c1Other is not null pass it instead?
        //console.log(this.predictionForm.controls.candidate1Info.value.candidate1);
      } else {
        this.showOther = false;
      }

    })
  }

  cans: string[] = ['Donald Trump', 'Mike Pence', 'Other:'];
  showOther: boolean = false;
  canOneParties: string[] = ['Republican', 'Democrat', 'Independent', 'Other'];
  canOneVPs: string[] = ['Mike Pence', 'Other'];

  canTwos: string[] = ['Bernie', 'Buhda Judge', 'Liz Warren'];
  canTwoParties: string[] = ['Democrat', 'Independent', 'Coomunist', 'Tea Party', 'Anarchist', 'Polar Regions'];
  canTwoVPs: string[] = ['Steve Martin', 'Beto', 'AOC'];

  popularVoteWinners: string[] = ['Steve', 'Erwin'];
  electoralVoteWinners: string[] = ['Jooee','Smiiiith']
  electionWinners: string[] = ['Jose', 'Al', 'Breg', 'inger'];

  parties: string[] = ['Democrat', 'Independent', 'Coomunist', 'Tea Party', 'Anarchist', 'Polar Regions'];


  predictionForm = this.fb.group({
    candidate1Info: this.fb.group({
      candidate1: [''],
      c1Other: [''],
      candidate1Party: new FormControl({value: 'Republican', disabled: true}),
      candidate1VP: [''],
      candidate1Faithless: [''],
    }),
    candidate2Info: this.fb.group({
      candidate2: [''],
      candidate2Party: [''],
      candidate2VP: [''],
      candidate2Faithless: [''],
    }),
    generalInfo: this.fb.group({
      popularVoteWinner: [''],
      electoralVoteWinner: [''],
      electionWinner: [''],
      description: [''],
      why: [''],
    }),
    stateInfo: this.fb.group({
      ALVote: [''],
      AKVote: [''],
      AZVote: [''],
      ARVote: [''],
      CAVote: [''],
      COVote: [''],
      CTVote: [''],
      DEVote: [''],
      GAVote: [''],
      HIVote: [''],
      IDVote: [''],
      ILVote: [''],
      INVote: [''],
      KSVote: [''],
      KYVote: [''],
      LAVote: [''],
      MEVote: [''],
      MDVote: [''],
      MAVote: [''],
      MIVote: [''],
      MNVote: [''],
      MSVote: [''],
      MOVote: [''],
      MTVote: [''],
      NEVote: [''],
      NVVote: [''],
      NJVote: [''],
      NMVote: [''],
      NYVote: [''],
      NCVote: [''],
      NDVote: [''],
      OKVote: [''],
      ORVote: [''],
      RIVote: [''],
      SCVote: [''],
      SDVote: [''],
      TNVote: [''],
      TXVote: [''],
      UTVote: [''],
      VTVote: [''],
      WAVote: [''],
      WVVote: [''],
      WYVote: ['']
    }),
    swingStateInfo: this.fb.group({
      OHVote: [''],
      WIVote: [''],
      VAVote: [''],
      PAVote: [''],
      NHVote: [''],
      IAVote: [''],
      FLVote: [''],
    })
  });
}
