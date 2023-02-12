import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    RouterModule,
    SidenavComponent,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class SharedModule { }
