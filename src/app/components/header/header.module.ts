import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { HeaderComponent } from './header.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
