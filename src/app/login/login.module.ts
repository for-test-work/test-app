import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './root/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class LoginModule {
}
