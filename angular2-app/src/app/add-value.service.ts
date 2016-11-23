import { Injectable } from '@angular/core';

@Injectable()
export class AddValueService {
  value = 50;
  constructor() { }

  add10() {
    this.value = +this.value + 10;
  }
}
