import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

export class BaseComponent implements OnDestroy {
  private subscriptions = new Subscription();

  constructor() {
    const originalOnDestroy = this.ngOnDestroy;
    this.ngOnDestroy = () => {
      this.onDestroy();
      originalOnDestroy.apply(this);
    };
  }

  protected set subs(sub: Subscription) {
    this.subscriptions.add(sub);
  }

  public ngOnDestroy(): void {
  }

  private onDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
