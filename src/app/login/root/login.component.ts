import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { BaseComponent } from '../../core/base-component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private snackBar: MatSnackBar,
              private router: Router ) {
    super();
  }

  ngOnInit() {
    this.createForm();
  }

  public onSubmit() {
    this.form.markAllAsTouched();
    this.form.get('userName').updateValueAndValidity();
    this.form.get('password').updateValueAndValidity();

    if (!this.form.valid) {
      return;
    }
    this.subs = this.authService.login(this.form.value).subscribe( {
      next: () => this.router.navigate(['user-profile']),
      error: err => this.snackBar.open(err, null, { duration: 3000 })
    });
  }

  private createForm() {
    this.form = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

}
