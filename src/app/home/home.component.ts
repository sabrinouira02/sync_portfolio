import { Component, HostListener, OnInit } from '@angular/core';
import { Portfolio } from '../shared/interfaces/portfolio';
import { PORTFOLIOS } from '../shared/portfolio';
import { ProjectsService } from '../shared/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isHeaderScrolled = false;
  portfolios: Portfolio[] = PORTFOLIOS;
  projects: any;
  allCategories: any;
  id!: string;
  errorMessage: any;

  constructor(private projectService: ProjectsService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Logique pour déterminer si le défilement a atteint un certain seuil
    const scrollY = window.scrollY;

    // Mettez à jour isHeaderScrolled en fonction de votre logique
    this.isHeaderScrolled = scrollY > 100; // ajustez le seuil selon vos besoins
  }

  ngOnInit(): void {
    this.getProjects();
    this.getCategory();
  }

  getProjects() {
    this.projectService.getProjects().subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
      }
    );
  }

  getCategory() {
    this.projectService.getCategory().subscribe(
      (data) => {
        this.allCategories = data;
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
      }
    );
  }

  filterCategory(idCategory: any) {
    for (let i = 0; i < this.allCategories?.length; i++) {
      if (idCategory.includes(this.allCategories[i].id)) {
        return this.allCategories[i].name;
      }
    }
  }
}
