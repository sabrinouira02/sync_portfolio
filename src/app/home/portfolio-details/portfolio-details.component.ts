import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PORTFOLIOS } from '../../shared/portfolio';
import { Portfolio } from '../../shared/interfaces/portfolio';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit{
  portfolios: Portfolio[] = PORTFOLIOS;
  id : any;
  portfolio!: any;
  portfolioDetails!: any;
constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    
    this.portfolio = this.portfolios.filter((a) => a._id == this.id);
    this.portfolioDetails = this.portfolio[0];
  }
}
