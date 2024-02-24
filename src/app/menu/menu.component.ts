import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



    navigate(id: any) {
      this.router.navigate(['/template1']);
    }

  constructor(private router: Router,private service:DetailsService) { }
  Data:any;
  ngOnInit(): void {
    this.Data = this.service.influencerDetails;
  }

}
