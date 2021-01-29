import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-received-item',
  templateUrl: './received-item.component.html',
  styleUrls: ['./received-item.component.scss']
})
export class ReceivedItemComponent implements OnInit {

  @Input() orderStatus$: Observable<string[]>;

  constructor() { }

  ngOnInit() {
  }

}
