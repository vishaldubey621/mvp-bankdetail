import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankdetailRoutingModule } from './bankdetail-routing.module';
import { BankdetailComponent } from './bankdetail.component';
import { BankdetailContainerComponent } from './bankdetail-conatiner/bankdetail-container.component';
import { BankdetailPresentationComponent } from './bankdetail-conatiner/bankdetail-presentation/bankdetail-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BanklistContainerComponent } from './banklist-container/banklist-container.component';
import { BanklistPresentationComponent } from './banklist-container/banklist-presentation/banklist-presentation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BankdetailComponent, BankdetailContainerComponent, BankdetailPresentationComponent, BanklistContainerComponent, BanklistPresentationComponent],
  imports: [
    CommonModule,
    BankdetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class BankdetailModule { }
