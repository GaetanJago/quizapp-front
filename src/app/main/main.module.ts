import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementPanelModule } from './management-panel/management-panel.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ManagementPanelModule,
    SharedModule
  ],
  exports:[
  ]
})
export class MainModule { }
