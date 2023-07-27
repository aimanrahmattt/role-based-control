import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { ChangeAccessComponent } from './change-access/change-access.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzGridModule,
    NzButtonModule,
    DirectivesModule,
    NzIconModule,
    CommonModule
  ],
  declarations: [WelcomeComponent, ChangeAccessComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
