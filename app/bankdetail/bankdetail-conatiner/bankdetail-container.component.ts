import { Component, OnInit } from '@angular/core';
import { BankdetailService } from '../bankdetail.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bankdetail-container',
  templateUrl: './bankdetail-container.component.html',
  styleUrls: ['./bankdetail-container.component.css']
})
export class BankdetailContainerComponent implements OnInit {

  constructor(private bankdetailService: BankdetailService) { }

  ngOnInit(): void {
  }
  
  public onUser(BankForm: FormGroup) {
    console.log('onUser($event) executed in container');
    debugger
    this.bankdetailService.creatuser(BankForm);

}
}
