import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankdetailContainerComponent } from './bankdetail-conatiner/bankdetail-container.component';
import { BankdetailComponent } from './bankdetail.component';
import { BanklistContainerComponent } from './banklist-container/banklist-container.component';

//routing ffor userlist and userdetil

const routes: Routes = [
  { 
    path: '', 
    component: BankdetailComponent,
    children: [
     
      {
        path: "userlist",
        component: BanklistContainerComponent
      },
    
        {
          path: "userdetail",
          component: BankdetailContainerComponent
        }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankdetailRoutingModule { }
