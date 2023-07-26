import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibleDirective } from './accessible.directive';



@NgModule({
  declarations: [AccessibleDirective],
  imports: [
    CommonModule
  ],
  exports: [AccessibleDirective]
})
export class DirectivesModule { }
