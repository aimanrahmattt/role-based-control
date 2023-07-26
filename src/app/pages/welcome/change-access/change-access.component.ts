import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccessControlService } from 'src/app/services/access-control/access-control.service';

@Component({
  selector: 'app-change-access',
  templateUrl: './change-access.component.html',
  styleUrls: ['./change-access.component.scss']
})
export class ChangeAccessComponent implements OnInit, OnDestroy {
  currentUserAccess: string[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private accessService: AccessControlService
  ) { }

  ngOnInit() {
    this.getCurrentUserAccess();
  }

  getCurrentUserAccess() {
    const accessSubs = this.accessService.userRolesObs$.subscribe(x => this.currentUserAccess = x);
    this.subscriptions.push(accessSubs);
  }

  setAccess(access: string[]) {
    this.accessService.setUserRole(access);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
