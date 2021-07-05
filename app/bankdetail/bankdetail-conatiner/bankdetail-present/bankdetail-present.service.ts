import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankdetailPresentService {
  public studentData: Subject<any> = new Subject();
  public studentData$: Observable<any>;

  constructor() {
    this.studentData$ = this.studentData.asObservable();
  }



  //bind form and validation input
  public bindForm(): FormGroup {
    return new FormGroup({
      acc: new FormControl(Validators.required, Validators.minLength(5)),
      name: new FormControl(Validators.pattern("^[a-zA-Z \-\']+")),
      email: new FormControl(Validators.pattern("/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;")),
      phone: new FormControl(Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")),
      bankname: new FormControl(),
      gender: new FormControl(),
      address: new FormControl(),
      basicamount: new FormControl(Validators.pattern("[0-9]")),
      currancy: new FormControl(),

    })
  }

  public bankdetail(bankForm: FormGroup) {
    this.studentData.next(bankForm.value)
  }
}
