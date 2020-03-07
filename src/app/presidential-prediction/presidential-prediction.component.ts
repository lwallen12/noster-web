import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { PresidentialPredictionService } from '../services/presidential-prediction.service';
import { PresidentialPrediction } from '../models/presidential-prediction';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-presidential-prediction',
  templateUrl: './presidential-prediction.component.html',
  styleUrls: ['./presidential-prediction.component.css']
})
export class PresidentialPredictionComponent implements OnInit {

  isUpdate: boolean = false;
  r = 'Republican';
  d = 'Democrat';
  

  nowPredicting = false;

  myvar: string;

  presPrediction: PresidentialPrediction = new PresidentialPrediction();

  can1Active: boolean = true;
  can2Active: boolean = false;
  generalActive: boolean = false;
  swingActive: boolean = false;
  stateActive: boolean = false;

  private currentActivePredSubject: BehaviorSubject<PresidentialPrediction>;
  public currentActivePrediction: Observable<PresidentialPrediction>;

  constructor(
    private fb: FormBuilder, 
    private presPredService: PresidentialPredictionService) { 
      this.currentActivePredSubject = new BehaviorSubject<any>(this.presPredService.getCurrentActive());
      this.currentActivePrediction = this.currentActivePredSubject.asObservable();
      
  }

  ngOnInit() {
    this.presPredService.getCurrentActive().subscribe(
      data => {
        this.presPrediction = data;
        console.log(this.presPrediction);
      }
    )
  }
  
  
  activateCan1() {this.can1Active=true;this.can2Active=false;this.generalActive=false;this.swingActive=false;this.stateActive=false;}
  activateCan2() {this.can1Active=false;this.can2Active=true;this.generalActive=false;this.swingActive=false;this.stateActive=false;}
  activateGeneral() {this.can1Active=false;this.can2Active=false;this.generalActive=true;this.swingActive=false;this.stateActive=false;}
  activateSwing() {this.can1Active=false;this.can2Active=false;this.generalActive=false;this.swingActive=true;this.stateActive=false;}
  activateState() {this.can1Active=false;this.can2Active=false;this.generalActive=false;this.swingActive=false;this.stateActive=true;}

updatePrediction() {

  this.nowPredicting = true;

  if (this.presPrediction) { 
    this.predictionForm.patchValue({
      candidate1Info: {
        candidate1: this.presPrediction.candidate1,
        candidate1Party: this.presPrediction.candidate1Party,
        candidate1VP: this.presPrediction.candidate1VP,
        candidate1Faithless: this.presPrediction.candidate1FaithlessElectors
      },
      candidate2Info: {
        candidate2: this.presPrediction.candidate2,
        candidate2Party: this.presPrediction.candidate2Party,
        candidate2VP: this.presPrediction.candidate2VP,
        candidate2Faithless: this.presPrediction.candidate2FaithlessElectors
      },
      generalInfo: {
        popularVoteWinner: this.presPrediction.popularVoteWinner,
        electoralVoteWinner: this.presPrediction.electoralVoteWinner,
        electionWinner: this.presPrediction.electionWinner,
        description: this.presPrediction.description,
        why: this.presPrediction.why,
      },
      stateInfo: {
        ALVote: this.presPrediction.alVote,
        AKVote: this.presPrediction.akVote,
        AZVote: this.presPrediction.azVote,
        ARVote: this.presPrediction.arVote,
        CAVote: this.presPrediction.caVote,
        COVote: this.presPrediction.coVote,
        CTVote: this.presPrediction.ctVote,
        DEVote: this.presPrediction.deVote,
        GAVote: this.presPrediction.gaVote,
        HIVote: this.presPrediction.hiVote,
        IDVote: this.presPrediction.idVote,
        ILVote: this.presPrediction.ilVote,
        INVote: this.presPrediction.inVote,
        KSVote: this.presPrediction.ksVote,
        KYVote: this.presPrediction.kyVote,
        LAVote: this.presPrediction.laVote,
        MEVote: this.presPrediction.meVote,
        MDVote: this.presPrediction.mdVote,
        MAVote: this.presPrediction.maVote,
        MIVote: this.presPrediction.miVote,
        MNVote: this.presPrediction.mnVote,
        MSVote: this.presPrediction.msVote,
        MOVote: this.presPrediction.moVote,
        MTVote: this.presPrediction.mtVote,
        NEVote: this.presPrediction.neVote,
        NVVote: this.presPrediction.nvVote,
        NJVote: this.presPrediction.njVote,
        NMVote: this.presPrediction.nmVote,
        NYVote: this.presPrediction.nyVote,
        NCVote: this.presPrediction.ncVote,
        NDVote: this.presPrediction.ndVote,
        OKVote: this.presPrediction.okVote,
        ORVote: this.presPrediction.orVote,
        RIVote: this.presPrediction.riVote,
        SCVote: this.presPrediction.scVote,
        SDVote: this.presPrediction.sdVote,
        TNVote: this.presPrediction.tnVote,
        TXVote: this.presPrediction.txVote,
        UTVote: this.presPrediction.utVote,
        VTVote: this.presPrediction.vtVote,
        WAVote: this.presPrediction.waVote,
        WVVote: this.presPrediction.wvVote,
        WYVote: this.presPrediction.wyVote
      },
      swingStateInfo: {
        OHVote: this.presPrediction.ohVote,
        WIVote: this.presPrediction.wiVote,
        VAVote: this.presPrediction.vaVote,
        PAVote: this.presPrediction.paVote,
        NHVote: this.presPrediction.nhVote,
        IAVote: this.presPrediction.iaVote,
        FLVote: this.presPrediction.flVote
      }
    });
  }
}

onSubmit() {
  console.log(this.predictionForm.value);
  console.log(this.predictionForm.value.candidate1Info);
  console.log(this.predictionForm.value.candidate1Info.candidate1);
  //console.log(this.predictionForm.value.candidate1Info.candidate1Faithless);
  //console.log(this.predictionForm.value.candidate1Info.candidate1Party);

  var x = this.predictionForm.value.candidate1Info.candidate1;

//this.presPrediction.candidate1 = 'Joe';

this.presPrediction = new PresidentialPrediction();

this.presPrediction.candidate1 = this.predictionForm.value.candidate1Info.candidate1;

console.log('Our entire object prop: ')
console.log(this.presPrediction);
console.log('Here is value on objectprop.can1: ' + this.presPrediction.candidate1);

this.presPrediction.candidate1Party = this.predictionForm.value.candidate1Info.candidate1Party;
this.presPrediction.candidate1VP = this.predictionForm.value.candidate1Info.candidate1VP;
this.presPrediction.candidate1FaithlessElectors = this.predictionForm.value.candidate1Info.candidate1Faithless;
this.presPrediction.candidate2 = this.predictionForm.value.candidate2Info.candidate2;
this.presPrediction.candidate2Party = this.predictionForm.value.candidate2Info.candidate2Party;
this.presPrediction.candidate2VP = this.predictionForm.value.candidate2Info.candidate2VP;
this.presPrediction.candidate2FaithlessElectors = this.predictionForm.value.candidate2Info.candidate2Faithless;
this.presPrediction.popularVoteWinner = this.predictionForm.value.generalInfo.popularVoteWinner;
this.presPrediction.electoralVoteWinner = this.predictionForm.value.generalInfo.electoralVoteWinner;
this.presPrediction.electionWinner = this.predictionForm.value.generalInfo.electionWinner;
this.presPrediction.description = this.predictionForm.value.generalInfo.description;
this.presPrediction.why = this.predictionForm.value.generalInfo.why;
this.presPrediction.alVote = this.predictionForm.value.stateInfo.ALVote;
this.presPrediction.akVote = this.predictionForm.value.stateInfo.AKVote;
this.presPrediction.azVote = this.predictionForm.value.stateInfo.AKVote;
this.presPrediction.arVote = this.predictionForm.value.stateInfo.ARVote;
this.presPrediction.caVote = this.predictionForm.value.stateInfo.CAVote;
this.presPrediction.coVote = this.predictionForm.value.stateInfo.COVote;
this.presPrediction.ctVote = this.predictionForm.value.stateInfo.CTVote;
this.presPrediction.deVote = this.predictionForm.value.stateInfo.DEVote;
this.presPrediction.flVote = this.predictionForm.value.swingStateInfo.FLVote;
this.presPrediction.gaVote = this.predictionForm.value.stateInfo.GAVote;
this.presPrediction.hiVote = this.predictionForm.value.stateInfo.HIVote;
this.presPrediction.idVote = this.predictionForm.value.stateInfo.IDVote;
this.presPrediction.ilVote = this.predictionForm.value.stateInfo.ILVote;
this.presPrediction.inVote = this.predictionForm.value.stateInfo.INVote;
this.presPrediction.iaVote = this.predictionForm.value.swingStateInfo.IAVote;
this.presPrediction.ksVote = this.predictionForm.value.stateInfo.KSVote;
this.presPrediction.kyVote = this.predictionForm.value.stateInfo.KYVote;
this.presPrediction.laVote = this.predictionForm.value.stateInfo.LAVote;
this.presPrediction.meVote = this.predictionForm.value.stateInfo.MEVote;
this.presPrediction.mdVote = this.predictionForm.value.stateInfo.MDVote;
this.presPrediction.maVote = this.predictionForm.value.stateInfo.MAVote;
this.presPrediction.miVote = this.predictionForm.value.stateInfo.MIVote;
this.presPrediction.mnVote = this.predictionForm.value.stateInfo.MNVote;
this.presPrediction.msVote = this.predictionForm.value.stateInfo.MSVote;
this.presPrediction.moVote = this.predictionForm.value.stateInfo.MOVote;
this.presPrediction.mtVote = this.predictionForm.value.stateInfo.MTVote;
this.presPrediction.neVote = this.predictionForm.value.stateInfo.NEVote;
this.presPrediction.nvVote = this.predictionForm.value.stateInfo.NVVote;
this.presPrediction.nhVote = this.predictionForm.value.swingStateInfo.NHVote;
this.presPrediction.njVote = this.predictionForm.value.stateInfo.NJVote;
this.presPrediction.nmVote = this.predictionForm.value.stateInfo.NMVote;
this.presPrediction.nyVote = this.predictionForm.value.stateInfo.NYVote;
this.presPrediction.ncVote = this.predictionForm.value.stateInfo.NCVote;
this.presPrediction.ndVote = this.predictionForm.value.stateInfo.NDVote;
this.presPrediction.ohVote = this.predictionForm.value.swingStateInfo.OHVote;
this.presPrediction.okVote = this.predictionForm.value.stateInfo.OKVote;
this.presPrediction.orVote = this.predictionForm.value.stateInfo.ORVote;
this.presPrediction.paVote = this.predictionForm.value.swingStateInfo.PAVote;
this.presPrediction.riVote = this.predictionForm.value.stateInfo.RIVote;
this.presPrediction.scVote = this.predictionForm.value.stateInfo.SCVote;
this.presPrediction.sdVote = this.predictionForm.value.stateInfo.SDVote;
this.presPrediction.tnVote = this.predictionForm.value.stateInfo.TNVote;
this.presPrediction.txVote = this.predictionForm.value.stateInfo.TXVote;
this.presPrediction.utVote = this.predictionForm.value.stateInfo.UTVote;
this.presPrediction.vtVote = this.predictionForm.value.stateInfo.VTVote;
this.presPrediction.vaVote = this.predictionForm.value.swingStateInfo.VAVote;
this.presPrediction.waVote = this.predictionForm.value.stateInfo.WAVote;
this.presPrediction.wvVote = this.predictionForm.value.stateInfo.WVVote;
this.presPrediction.wiVote = this.predictionForm.value.swingStateInfo.WIVote;
this.presPrediction.wyVote = this.predictionForm.value.stateInfo.WYVote;

console.log(this.predictionForm.value.stateInfo.WYVote);

  //this.presPrediction = this.predictionForm.value;
  //this.presPrediction.candidate1 = this.predictionForm.value.candidate1Info.candidate1;

  this.presPredService.postPrediction(this.presPrediction).subscribe(
    (res) => {
      //console.log('HEre is our prediction: ' + res);
      this.nowPredicting = false;
    }
  )
}

  cans: string[] = ['Donald Trump', 'Mike Pence', 'Zorp the Surveyor', 'Other'];
  canOneParties: string[] = ['Republican', 'Democrat', 'Independent', 'Other'];
  canOneVPs: string[] = ['Mike Pence', 'Other', 'Herb Scaifer'];

  canTwos: string[] = ['Bernie', 'Buhda Judge', 'Liz Warren'];
  canTwoParties: string[] = ['Democrat', 'Independent', 'Coomunist', 'Tea Party', 'Anarchist', 'Polar Regions', 'Republican'];
  canTwoVPs: string[] = ['Steve Martin', 'Beto', 'AOC'];


  electionWinners: string[] = ['Donald Trump','Pete Buttigieg','Bernie Sanders','Elizabeth Warren','Amy Klobuchar',
  'Joe Biden','Andrew Yang','Michael Bloomberg','Kamala Harris','Hillary Clinton', 'Mike Pence', 'Herb Scaifer', 'Zeke Schrute', 'Zorp the Surveyor '];

  parties: string[] = ['Democrat', 'Independent', 'Coomunist', 'Tea Party', 'Anarchist', 'Polar Regions', 'Republican'];


  allParties: string[] = ['Democrat', 'Republican', 'Independent or Minor Party', 'The Reasonabilists']
  opCandidates: string[] = ['Pete Buttigieg','Bernie Sanders','Elizabeth Warren','Amy Klobuchar',
    'Joe Biden','Andrew Yang','Michael Bloomberg','Kamala Harris','Hillary Clinton', 'Zeke Schrute']

  predictionForm = this.fb.group({
    candidate1Info: this.fb.group({
      candidate1: new FormControl({value: 'Donald Trump', disabled: false}),
      candidate1Party: new FormControl({value: 'Republican', disabled: false}),
      candidate1VP: new FormControl({value: 'Mike Pence', disabled: false}),
      candidate1Faithless: new FormControl({value: 0}),
    }),
    candidate2Info: this.fb.group({
      candidate2: [''],
      candidate2Party: new FormControl({value: this.myvar, disabled: false}),
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
      ALVote: new FormControl({value: this.r, disabled: false}),
      AKVote: new FormControl({value: this.r, disabled: false}),
      AZVote: new FormControl({value: this.r, disabled: false}),
      ARVote: new FormControl({value: this.r, disabled: false}),
      CAVote: new FormControl({value: this.d, disabled: false}),
      COVote: new FormControl({value: this.d, disabled: false}),
      CTVote: new FormControl({value: this.d, disabled: false}),
      DEVote: new FormControl({value: this.d, disabled: false}),
      GAVote: new FormControl({value: this.r, disabled: false}),
      HIVote: new FormControl({value: this.d, disabled: false}),
      IDVote: new FormControl({value: this.r, disabled: false}),
      ILVote: new FormControl({value: this.d, disabled: false}),
      INVote: new FormControl({value: this.r, disabled: false}),
      KSVote: new FormControl({value: this.r, disabled: false}),
      KYVote: new FormControl({value: this.r, disabled: false}),
      LAVote: new FormControl({value: this.r, disabled: false}),
      MEVote: new FormControl({value: this.d, disabled: false}),
      MDVote: new FormControl({value: this.d, disabled: false}),
      MAVote: new FormControl({value: this.d, disabled: false}),
      MIVote: new FormControl({value: this.r, disabled: false}),
      MNVote: new FormControl({value: this.d, disabled: false}),
      MSVote: new FormControl({value: this.r, disabled: false}),
      MOVote: new FormControl({value: this.r, disabled: false}),
      MTVote: new FormControl({value: this.r, disabled: false}),
      NEVote: new FormControl({value: this.r, disabled: false}),
      NVVote: new FormControl({value: this.d, disabled: false}),
      NJVote: new FormControl({value: this.d, disabled: false}),
      NMVote: new FormControl({value: this.d, disabled: false}),
      NYVote: new FormControl({value: this.d, disabled: false}),
      NCVote: new FormControl({value: this.r, disabled: false}),
      NDVote: new FormControl({value: this.r, disabled: false}),
      OKVote: new FormControl({value: this.r, disabled: false}),
      ORVote: new FormControl({value: this.r, disabled: false}),
      RIVote: new FormControl({value: this.d, disabled: false}),
      SCVote: new FormControl({value: this.r, disabled: false}),
      SDVote: new FormControl({value: this.r, disabled: false}),
      TNVote: new FormControl({value: this.r, disabled: false}),
      TXVote: new FormControl({value: this.r, disabled: false}),
      UTVote: new FormControl({value: this.r, disabled: false}),
      VTVote: new FormControl({value: this.r, disabled: false}),
      WAVote: new FormControl({value: this.d, disabled: false}),
      WVVote: new FormControl({value: this.d, disabled: false}),
      WYVote: new FormControl({value: this.r, disabled: false})
    }),
    swingStateInfo: this.fb.group({
      OHVote: new FormControl({value: this.r, disabled: false}),
      WIVote: new FormControl({value: this.r, disabled: false}),
      VAVote: new FormControl({value: this.r, disabled: false}),
      PAVote: new FormControl({value: this.r, disabled: false}),
      NHVote: new FormControl({value: this.d, disabled: false}),
      IAVote: new FormControl({value: this.r, disabled: false}),
      FLVote: new FormControl({value: this.r, disabled: false})
    })
  });
}
