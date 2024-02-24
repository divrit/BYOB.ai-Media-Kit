import { Component, OnInit } from '@angular/core';
import { Month, MonthNavigation } from '../models/models';



@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css'],
})
export class MonthsComponent implements OnInit {
addNextMonth() {
throw new Error('Method not implemented.');
}
addMonthByName(arg0: string,arg1: string) {
throw new Error('Method not implemented.');
}
deleteMonth(arg0: string,arg1: string) {
throw new Error('Method not implemented.');
}
  months: Month[] =    [ {
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
        "columns": ["date", "name", "Views"],
        "rows": [
          {
            "date": "2024-02-10",
            "name":"TikTok",
            "amount": "3000",
            "isSaved": false
          },
          {
            "date": "2024-02-18",
            "name":"TikTok",
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
        "name": "TikTok",
        "value": "1000", // This will be calculated based on the data
        "isSaved": false
      },
      {
        "name": "Youtube",
        "value": "2000", // This will be calculated based on the data
        "isSaved": false
      },
      {
        "name": "current-expenditure",
        "value": "3000", // This will be calculated based on the data
        "isSaved": false
      }
    ],
    "isSaved": false
  }];

  monthsToDisplay: Month[] = [{
    "monthYear": "2024-02", // Current month and year
    "monthNumber": "02", // Current month number
    "tables": [
      {
        "tableName": "Featured Works",
        "columns": ["date", "source", "Views"],
        "rows": [
          {
            "date": "2024-02-05",
            "name":"Aquaman Movie",
            "amount": "3 Million",
            "isSaved": false
          },
          {
            "date": "2024-02-20",
            "name":"Fast X Movie",
            "amount": "13K",
            "isSaved": false
          }
        ],
        "isSaved": false
      },
      {
        "tableName": "Collaborations with",
        "columns": ["date", "source", "Views"],
        "rows": [
          {
            "date": "2024-02-10",
            "name":"TikTok",
            "amount": "2 Million",
            "isSaved": false
          },
          {
            "date": "2024-02-18",
            "name":"Instagram",
            "amount": "3 Million",
            "isSaved": false
          }
        ],
        "isSaved": false
      }
    ],
    "calculations": [
      {
        "name": "Total Count",
        "value": "7M",
        "isSaved": false
      },
      {
        "name": "Insta",
        "value": "3M", // This will be calculated based on the data
        "isSaved": false
      },
      {
        "name": "Tiktok",
        "value": "1M", // This will be calculated based on the data
        "isSaved": false
      },
      {
        "name": "Youtube",
        "value": "3M", // This will be calculated based on the data
        "isSaved": false
      }
    ],
    "isSaved": false
  },

  // 'bg-secondary': calculation.name === 'Total Count', 
// 'bg-success': calculation.name === 'Insta',
// 'bg-danger': calculation.name === 'Tiktok',
// 'bg-primary': calculation.name === 'Youtube'}">
  {
    "monthYear": "2024-03", // Current month and year
    "monthNumber": "03", // Current month number
    "tables": [
      {
        "tableName": "Featured Works",
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
        "tableName": "Collaborations with",
        "columns": ["date", "source", "amount"],
        "rows": [
          {
            "date": "2024-02-10",
            "name":"TikTok",
            "amount": "3000",
            "isSaved": false
          },
          {
            "date": "2024-02-18",
            "name":"Insttaaaa",
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
        "value": "0", // This will be calculated based on the data
        "isSaved": false
      },
      {
        "name": "Tiktok",
        "value": "0", // This will be calculated based on the data
        "isSaved": false
      },
      {
        "name": "Youtube",
        "value": "0", // This will be calculated based on the data
        "isSaved": false
      }
    ],
    "isSaved": false
  }];
  monthsNavigationList: MonthNavigation[] = [
    {
      "monthNumber": "01",
      "monthYear": "2024"
    },
    {
      "monthNumber": "02",
      "monthYear": "2024"
    },
    {
      "monthNumber": "03",
      "monthYear": "2024"
    },
    {
      "monthNumber": "04",
      "monthYear": "2024"
}];

  constructor() {}

  ngOnInit(): void {
   
  }



  



 
}
