import { Component, OnInit } from '@angular/core';
import { BankdetailService } from '../bankdetail.service';
import { Observable } from 'rxjs';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-banklist-container',
  templateUrl: './banklist-container.component.html',
  styleUrls: ['./banklist-container.component.css']
})
export class BanklistContainerComponent implements OnInit {

  public customerList$: Observable<any>;

  constructor(private bankDetailService: BankdetailService) { 
    this.customerList$ = this.bankDetailService.getUsers() ;
  }

  ngOnInit(): void {
    this.customerList$ = this.bankDetailService.getUsers()
  }
  public deleteUser(id: number) {
    this.bankDetailService.deleteUser(id)
  }

}
