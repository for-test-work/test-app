import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { BaseComponent } from '../../../core/base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  public isAuthorized: boolean;

  constructor(private router: Router,
              private auth: AuthService) {
    super();
  }

  ngOnInit() {
    this.isAuthorized = JSON.parse(localStorage.getItem('isAuthorized'));
    this.subs = this.auth.isAuthorized$.subscribe((data: boolean) => {
      this.isAuthorized = data;
    });
  }

  public logout() {
    this.auth.logout();
    setTimeout(() => this.router.navigate(['/']));
  }

}
