import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.models';

@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.scss']
})
export class EditModelComponent implements OnInit {

  @Input() item: BudgetItem;


  constructor() { }

  ngOnInit(): void {
  } 

  onSubmitted(updatedItem: BudgetItem)
  {

  }

}
