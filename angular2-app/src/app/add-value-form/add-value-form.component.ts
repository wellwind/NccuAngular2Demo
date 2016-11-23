import { AddValueService } from './../add-value.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-value-form',
  templateUrl: './add-value-form.component.html',
  styleUrls: ['./add-value-form.component.css']
})
export class AddValueFormComponent implements OnInit {

  constructor(private addValService: AddValueService) { }

  ngOnInit() {
  }

  addClick() {
    this.addValService.add10();
  }
}
