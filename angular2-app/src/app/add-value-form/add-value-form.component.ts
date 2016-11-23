import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-value-form',
  templateUrl: './add-value-form.component.html',
  styleUrls: ['./add-value-form.component.css']
})
export class AddValueFormComponent implements OnInit {

  value = 50;

  constructor() { }

  ngOnInit() {
  }

  addClick() {
    this.value = +this.value + 10;
  }
}
