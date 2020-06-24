import { Component, OnInit } from '@angular/core';
import { RelationService } from '../relation.service';
import { NosterRelation } from '../models/noster-relation';
import { NosterMessage } from '../models/noster-message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private nosterRelationService: RelationService,
              private nosterMessageService: MessageService) { }

  ngOnInit() {

    this.onGetMyFriends();

  }

  selectedFriend;

  mode = 'Friends';

  //Get this from a service, this will basically be each freind card
  freinds: NosterRelation[] = [];
  pending: NosterRelation[] = [];
  network: NosterRelation[] = [];
  
  //based on the friend selected... these messages should appear in the freind tab
  messages: NosterMessage[] = [];

  onClickFreindItem(relation: NosterRelation) {
    this.selectedFriend = relation.relatedUserName;
    console.log(relation.relatedUserName);
    this.mode = 'Friends';
    //this.onGetMessages(relation.relatedUserName);
  }

  onClickFreindMode() {
    this.mode = 'Friends';
  }

  onClickPendingMode() {
    this.mode = 'Pending';
  }

  onClickNetworkMode() {
    this.mode = 'Network';
  }

  onGetMyFriends() {
    this.nosterRelationService.getMyFriends().subscribe(
      data =>  {
        this.freinds = data;
        console.log(data);
      }
    );
  }

  onGetMyPending() {
    //this.nosterRelationService.getMyPending()
    //set my pending property to the data returned
  }

  onGetNetwork() {
    //probably on each key stroke (and maybe after a second pause???) send request for
    //display names based on what was filled in?
    //and set this.network = data... if blank just top whatever?
  }

  onGetMessages() {
    // this.nosterMessageService.getThisConvo(this.selectedFriend)
    //set messages = data
  }
  
}
