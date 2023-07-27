import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccessControlService } from 'src/app/services/access-control/access-control.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {
  currentUserAccess: string[] = [];
  subscriptions: Subscription[] = [];
  usersList: string[] = ['User A', 'User B', 'User C', 'All']

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
