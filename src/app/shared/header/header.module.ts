import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';

import { HeaderComponent } from './root/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
