import { Component, OnInit } from '@angular/core';
import { RelationService } from '../relation.service';
import { NosterRelation } from '../models/noster-relation';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private nosterRelationService: RelationService) { }

  ngOnInit() {

    this.onGetMyFriends();

  }

  motto = "Filler motto";
  scoreTotal = 0;
  mlbScore = 0;
  presScore = 0;
  freindName = "Boblee";

  //Get this from a service, this will basically be each freind card
  freinds: NosterRelation[] = [];

  onGetMyFriends() {
    this.nosterRelationService.getMyFriends().subscribe(
      data =>  {
        this.freinds = data;
        console.log(data);
      }
    );
  }

}
