import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IdataCard} from "../../../shared/interface/IdataCard";

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html'
})
export class ListCardsComponent {
  @Input() data: IdataCard[];

  @Output() deleteCardEvent = new EventEmitter<IdataCard>();

  toggleCardId: number | null = null;

  toggleCard(cardId: number) {
    this.toggleCardId = this.toggleCardId === cardId ? null : cardId;
  }

  deleteCard(idataCard: IdataCard) {
    this.deleteCardEvent.emit(idataCard)
  }
}
