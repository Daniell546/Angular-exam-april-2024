import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { PerfumesRoutingModule } from './perfumes-routing.module';
import { FormsModule } from '@angular/forms';
import { CurrPerfumeComponent } from './curr-perfume/curr-perfume.component';
import { CartComponent } from './cart/cart.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    CreateComponent,
    CurrPerfumeComponent,
    CartComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PerfumesRoutingModule,
    FormsModule
  ],
  exports: [
    CreateComponent,
  ]
})
export class PerfumesModule { }
