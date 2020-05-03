import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './root/login.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class LoginModule {
}
