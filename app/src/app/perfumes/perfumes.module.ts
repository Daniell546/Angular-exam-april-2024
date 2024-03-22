import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { PerfumesRoutingModule } from './perfumes-routing.module';



@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PerfumesRoutingModule
  ],
  exports: [
    CreateComponent,
  ]
})
export class PerfumesModule { }
