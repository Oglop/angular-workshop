import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  { 
    path: '', 
    component: WrapperComponent,
    children: [
      { path:'insert-quote', component: QuoteComponent },
      { path: 'update-quote/:id', component: QuoteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
