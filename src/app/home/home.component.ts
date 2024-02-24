import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: DetailsService) { }
  Data:any;
  ngOnInit(): void {
    this.Data = this.service.influencerDetails;
  }

}
