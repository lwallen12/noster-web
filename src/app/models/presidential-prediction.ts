import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class PresidentialPrediction {
    constructor() {}

public id: number;
public createdBy: string;
public nosterId: string;
public candidate1: string;
public candidate1Party: string;
public candidate1VP: string;
public candidate1FaithlessElectors: number;
public candidate2: string;
public candidate2Party: string;
public candidate2VP: string;
public candidate2FaithlessElectors: number;
public popularVoteWinner: string;
public electoralVoteWinner: string;
public electionWinner: string;
public description: string;
public why: string;
public snapStartDate: Date;
public snapEndDate: Date;
public scored: boolean;
public active: boolean;
public valid: boolean;
public alVote: string;
public akVote: string;
public azVote: string;
public arVote: string;
public caVote: string;
public coVote: string;
public ctVote: string;
public deVote: string;
public flVote: string;
public gaVote: string;
public hiVote: string;
public idVote: string;
public ilVote: string;
public inVote: string;
public iaVote: string;
public ksVote: string;
public kyVote: string;
public laVote: string;
public meVote: string;
public mdVote: string;
public maVote: string;
public miVote: string;
public mnVote: string;
public msVote: string;
public moVote: string;
public mtVote: string;
public neVote: string;
public nvVote: string;
public nhVote: string;
public njVote: string;
public nmVote: string;
public nyVote: string;
public ncVote: string;
public ndVote: string;
public ohVote: string;
public okVote: string;
public orVote: string;
public paVote: string;
public riVote: string;
public scVote: string;
public sdVote: string;
public tnVote: string;
public txVote: string;
public utVote: string;
public vtVote: string;
public vaVote: string;
public waVote: string;
public wvVote: string;
public wiVote: string;
public wyVote: string;

}