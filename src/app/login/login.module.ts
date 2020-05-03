import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

import { LoginComponent } from './root/login.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginModule {
}
