import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { QuoteComponent } from './quote/quote.component';
import { MatFormFieldModule } from '@angular/material/form-field';// 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar'


@NgModule({
  declarations: [
    WrapperComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatProgressBarModule
  ]
})
export class AdminModule { }
