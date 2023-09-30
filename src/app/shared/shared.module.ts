import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatDividerModule} from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
    SidenavComponent,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
