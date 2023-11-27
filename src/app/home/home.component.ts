import { Component, HostListener, OnInit } from '@angular/core';
import { Portfolio } from '../shared/interfaces/portfolio';
import { PORTFOLIOS } from '../shared/portfolio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  isHeaderScrolled = false;
  portfolios: Portfolio[] = PORTFOLIOS;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Logique pour déterminer si le défilement a atteint un certain seuil
    const scrollY = window.scrollY;

    // Mettez à jour isHeaderScrolled en fonction de votre logique
    this.isHeaderScrolled = scrollY > 100; // ajustez le seuil selon vos besoins
  }

  ngOnInit(): void {
    // console.log("this.portfolio",this.portfolios);
  }
}
