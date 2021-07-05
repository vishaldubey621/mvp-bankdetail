import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [    
    { path: 'bankdetail', loadChildren: () => import('./bankdetail/bankdetail.module').then(m => m.BankdetailModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
