import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IdataCard} from "../../../shared/interface/IdataCard";
import {GetIdServiceService} from "../../../shared/service/get-id-service.service";

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html'
})
export class FormAddComponent {

  constructor(private getIdServiceService: GetIdServiceService) {
  }

  @Output() addCard = new EventEmitter<IdataCard>();

  addCardForm = new FormGroup({
    title: new FormControl<string>('', {validators: Validators.required, nonNullable: true}),
    description: new FormControl<string>('', {validators: Validators.required, nonNullable: true}),
  });

  submit(): void {
    const id = this.getIdServiceService.getId()
    let data: IdataCard = {...this.addCardForm.value, id: id}
    this.addCard.emit(data);
    this.addCardForm.reset();
  }
}
