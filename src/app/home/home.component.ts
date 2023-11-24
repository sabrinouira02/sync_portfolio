import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isHeaderScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Logique pour déterminer si le défilement a atteint un certain seuil
    const scrollY = window.scrollY;

    // Mettez à jour isHeaderScrolled en fonction de votre logique
    this.isHeaderScrolled = scrollY > 100; // ajustez le seuil selon vos besoins
  }
}
