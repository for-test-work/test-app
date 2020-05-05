import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import { Observable } from 'rxjs';
import { filter, distinctUntilKeyChanged } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ProfileState } from '../../core/app-store/profile/profile.reducer';
import { BaseComponent } from '../../core/base-component';
import { Profile } from '../../core/interfaces/profile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent extends BaseComponent implements OnInit {
  public user: Profile;
  private user$: Observable<Profile> = this.store.select(state => state.profile);

  constructor(private profileService: ProfileService,
              private profileStore: Store<ProfileState>,
              private store: Store<ProfileState>) {
    super();
  }

  ngOnInit() {
    this.subs = this.user$.
      pipe(
      filter((data: Profile) => Boolean(data)),
      distinctUntilKeyChanged('firstName')
    )
      .subscribe((data: Profile) => this.user = data);
  }

}
