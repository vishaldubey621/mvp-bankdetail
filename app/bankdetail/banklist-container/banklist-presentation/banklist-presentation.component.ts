import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banklist-presentation',
  templateUrl: './banklist-presentation.component.html',
  styleUrls: ['./banklist-presentation.component.css']
})
export class BanklistPresentationComponent implements OnInit {
  
  //set customerList data
  @Input() public set customerList(value: any) 
  {
      if(value) {
      this.customerList = value
    }
  console.log("customerList");
  //console.log("data inserted");
  }
  //get CustomerList data
  public get customerList(): any {
  return this.customerList
}
@Output() deleteId: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
