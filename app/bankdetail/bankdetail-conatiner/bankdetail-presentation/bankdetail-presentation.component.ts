import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form,FormGroup } from '@angular/forms';
import {  FormControl,FormArray, FormBuilder, Validators } from '@angular/forms';
import { BankdetailPresentService } from '../bankdetail-present/bankdetail-present.service';


@Component({
  selector: 'app-bankdetail-presentation',
  templateUrl: './bankdetail-presentation.component.html',
  styleUrls: ['./bankdetail-presentation.component.css'],
  viewProviders: [BankdetailPresentService]
})
export class BankdetailPresentationComponent implements OnInit {

  //store array value
  public currancy = ['USD','INR','EURO','CAD']
  public bank = ['BOB','SBI','HDFC','ICICI']
  
  //Emmit data from presentation => container (child to parent)
  @Output() createUser: EventEmitter<any> = new EventEmitter();
  bankForm: FormGroup;
  constructor(private BankdetailPresentService: BankdetailPresentService) {
    this.bankForm = this.BankdetailPresentService.bindForm();
  }
  
ngOnInit(): void {
  //return observable data
  this.BankdetailPresentService.studentData$.subscribe(
    (userData) => {
      this.createUser.emit(userData)
      console.log(userData);
      console.log("emit user ");
    }
  );
  }

  public onSubmit() {
    //console.log(this.bankForm.value);
    //console.log("form data submited");
    this.BankdetailPresentService.bankdetail(this.bankForm);
  }
}
