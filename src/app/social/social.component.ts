import { Component, OnInit } from '@angular/core';
import { RelationService } from '../relation.service';
import { NosterRelation } from '../models/noster-relation';
import { NosterMessage } from '../models/noster-message';
import { MessageService } from '../message.service';
import { NosterService, Search } from '../noster.service';
import { Noster } from '../models/noster';


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private nosterRelationService: RelationService,
              private nosterMessageService: MessageService,
              private nosterService: NosterService) { }

  ngOnInit() {

    this.onGetMyFriends();

  }

  search = '';
  selectedFriend; //This having a value should trigger the Messages with pane
  mode = 'Friends';

  //Get this from a service, this will basically be each freind card
  relations: NosterRelation[] = [];
  nosters: Noster[] = [];
  
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
    this.onGetMyFriends();
  }

  onClickPendingMode() {
    this.mode = 'Pending';
    this.onGetMyPending();
  }

  onClickNetworkMode() {
    this.mode = 'Network';
    //onGetNetwork()
  }

  onGetMyFriends() {
    this.nosterRelationService.getMyFriends().subscribe(
      data =>  {
        this.relations = data;
        console.log(data);
      }
    );
  }

  onGetMyPending() {
    //this.nosterRelationService.getMyPending()
    //set my pending property to the data returned
    this.nosterRelationService.getMyPending().subscribe(
      data => {
        this.nosters = data;
        console.log(data);
      }
    )
  }

  onGetNetwork() {
    //probably on each key stroke (and maybe after a second pause???) send request for
    //display names based on what was filled in?
    //and set this.network = data... if blank just top whatever?
    let mySearch = new Search(this.search);

    this.nosterService.getMyNetwork(mySearch).subscribe(
      data => {
        this.nosters = data;
        console.log(data);
      }
    )
  }

  onSendFriendReq(nosterRel: NosterRelation) {
    console.log(nosterRel);
    this.nosterRelationService.sendFriendReq(nosterRel).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log("error on sendFriendReq");
        console.log(error);
      }
    )
  }

  onConfirm(noster: Noster) {
    console.log(noster);
    this.nosterRelationService.confirmFriendReq(noster).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log("error on confirm friend");
        console.log(error);
      }
    )
  }

  onDeny(noster: Noster) {
    this.nosterRelationService.denyFriendReq(noster).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log("error on onDeny() Friend");
        console.log(error);
      }
    )
  }

  onGetMessages() {
    // this.nosterMessageService.getThisConvo(this.selectedFriend)
    //set messages = data
  }

  routeSearch() {
    if (this.mode == 'Friends') {
      //make a call and then we we should filter friends
    }
    if (this.mode == 'Pending') {
      //make a call and then filter pending
    }
    if (this.mode == 'Network') {
      this.onGetNetwork();
    }
  }
  
}
