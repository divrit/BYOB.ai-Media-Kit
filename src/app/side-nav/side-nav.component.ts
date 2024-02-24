import { Component, OnInit } from '@angular/core';
import { MonthNavigation } from '../models/models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  navigationList: MonthNavigation[];

  constructor() {
    this.navigationList = [
      {"monthNumber": "01", "monthYear": "2024"},
      {"monthNumber": "02", "monthYear": "2024"},
      {"monthNumber": "03", "monthYear": "2024"},
      {"monthNumber": "04", "monthYear": "2024"},
      {"monthNumber": "05", "monthYear": "2023"},
      {"monthNumber": "06", "monthYear": "2023"},
      {"monthNumber": "07", "monthYear": "2023"},
      {"monthNumber": "08", "monthYear": "2022"},
      {"monthNumber": "09", "monthYear": "2022"},
      {"monthNumber": "10", "monthYear": "2022"}
  ]
  ;
  }

  ngOnInit(): void {
   
  }

  newMonthNavigationClicked(event: any) {
    let monthNavigation: MonthNavigation = {
      monthYear: event.monthYear,
      monthNumber: event.monthNumber,
    };
  }
}
