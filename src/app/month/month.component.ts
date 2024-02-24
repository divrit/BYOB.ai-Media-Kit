import { Component, Input, OnInit } from '@angular/core';
import { Month } from '../models/models';
 

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})
export class MonthComponent implements OnInit {
sumUpdated(arg0: string,$event: number) {
throw new Error('Method not implemented.');
}
  @Input() month: Month;

  constructor() {
    this.month = {
      "monthYear": "2024-03", // Current month and year
      "monthNumber": "03", // Current month number
      "tables": [
        {
          "tableName": "earnings",
          "columns": ["date", "source", "amount"],
          "rows": [
            {
              "date": "2024-02-05",
              "name":"TikTok",
              "amount": "3000",
              "isSaved": false
            },
            {
              "date": "2024-02-20",
              "name":"TikTok",
            "amount": "3000",
              "isSaved": false
            }
          ],
          "isSaved": false
        },
        {
          "tableName": "expenditure",
          "columns": ["date", "name", "amount"],
          "rows": [
            {
              "date": "2024-02-10",
              "name":"TikTok",
              "amount": "3000",
              "isSaved": false
            },
            {
              "date": "2024-03-02",
              "name":"Instaaaaaaaaaaaaaaaaaaa",
              "amount": "3000",
              "isSaved": false
            }
          ],
          "isSaved": false
        }
      ],
      
      "calculations": [
        {
          "name": "Total Count",
          "value": "5000",
          "isSaved": false
        },
        {
          "name": "Insta",
          "value": "2000", // This will be calculated based on the data
          "isSaved": false
        },
        {
          "name": "Tiktok",
          "value": "20000", // This will be calculated based on the data
          "isSaved": false
        },
        {
          "name": "Youtube",
          "value": "3", // This will be calculated based on the data
          "isSaved": false
        }
      ],
      "isSaved": false
    };
  }


  ngOnInit(): void {
    // Subscribed to get the value of Previous Savings of this month, 
    // whenever value of Current Savings of Previous Month is Updated, it will send into this.
    // Once got, this will update Previous Savings value
  

    // Subscribed to get the request from next month, whenever it is initialized
    // Once got, this will send the Current Savings data
    // into Previous Savings Observable so that next month can catch it
   

    // This Month will send the request, to get the Current Savings value of Previous Month
 
  }

 



}
