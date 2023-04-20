import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IdataCard} from "../../../shared/interface/IdataCard";

const timeout = 500;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() item: IdataCard

  @Input() toggleCardId: number | null = null

  @Output() toggleCardEvent = new EventEmitter<number>();

  @Output() deleteCardEvent = new EventEmitter<IdataCard>();

  timeout = false;

  toggleCard() {
    this.timeout = true
    this.toggleCardEvent.emit(this.item.id)
    setTimeout(() => this.timeout = false, timeout)
  }

  handleDeleteCard() {
    this.deleteCardEvent.emit(this.item)
  }
}
