import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUserProfileMenuItems } from '../models/userProfileMenuItems.mode';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getUserProfileMenuItems(): Observable<IUserProfileMenuItems[]> {
    /**
     * Might be we'll be getting user menu from backend
     */
    const items: IUserProfileMenuItems[] = [
      { name: 'Manage Orders', icon: 'supervisor_account' }
    ]
    return of(items)
  }
}
