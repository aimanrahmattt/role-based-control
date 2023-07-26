import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessControlService {
  private userRoles: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['User A'])
  public userRolesObs$ = this.userRoles.asObservable();

  constructor() { }

  setUserRole(roles: string[]) {
    this.userRoles.next(roles);
  }

  hasRole(role: string): boolean {
    return this.userRoles.value.includes(role);
  }

  get userRole() {
    return this.userRoles.value;
  }

  hasAllPermission() {
    return this.userRoles.value.includes('All');
  }
}
