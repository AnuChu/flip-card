import { Component } from '@angular/core';
import {IdataCard} from "../../shared/interface/IdataCard";
import {dataCard} from "../../shared/data/dataCard";

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.less']
})
export class FlipCardComponent {

  data: IdataCard[] = dataCard

  addCard(idataCard: IdataCard) {
    this.data.push(idataCard)
  }

  deleteCard(idataCard: IdataCard) {
    console.log(idataCard)
    this.data.splice(this.data.findIndex(function(i){
      return i.id === idataCard.id;
    }), 1);
  }
}
