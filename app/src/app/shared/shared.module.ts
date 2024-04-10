import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEmailDirective } from './validators/app-email.directive';
import { LoaderComponent } from './loader/loader.component';
import { PassMatchValidatorDirective } from './validators/passMatch.validator.directive';



@NgModule({
  declarations: [
    AppEmailDirective,
    LoaderComponent,
    PassMatchValidatorDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent, AppEmailDirective, PassMatchValidatorDirective]
})
export class SharedModule { }
