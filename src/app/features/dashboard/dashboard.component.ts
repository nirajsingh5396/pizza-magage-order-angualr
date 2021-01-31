import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Order status';
  type = 'PieChart';
  data = [
     ['Firefox', 0.1],
     ['IE', 26.8],
     ['Chrome', 12.8],
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {    
  };
  width = 550;
  height = 400;
  constructor() { }

  ngOnInit() {
  }

  getStatusData(event){
    console.log(event);
  }

}
