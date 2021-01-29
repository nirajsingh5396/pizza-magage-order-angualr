import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserProfileMenuItems } from 'src/app/shared/models/userProfileMenuItems.mode';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userProfileMenuItems$: Observable<IUserProfileMenuItems[]>

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.userProfileMenuItems$ = this.sharedService.getUserProfileMenuItems();
  }

}
