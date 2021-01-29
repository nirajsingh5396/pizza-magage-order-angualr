import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IUserProfileMenuItems } from '../../models/userProfileMenuItems.mode';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() userProfileMenuItems$: Observable<IUserProfileMenuItems[]>


  constructor() { }

  ngOnInit() {
  }

}
