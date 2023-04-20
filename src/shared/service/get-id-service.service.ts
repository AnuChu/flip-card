import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetIdServiceService {

  id!: number

  constructor() {
    this.id = 3
  }

  getId() {
    this.id += 1
    return this.id
  }
}
