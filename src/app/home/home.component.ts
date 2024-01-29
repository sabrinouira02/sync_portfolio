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
  projects2: any;
  allCategories: any;
  id!: string;
  errorMessage: any;

  constructor(private projectService: ProjectsService) {}

  /* The `@HostListener('window:scroll', [])` decorator is used to listen for the scroll event on the
  window object. When the scroll event is triggered, the `onWindowScroll()` method is called. */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    // Mettez à jour isHeaderScrolled en fonction de votre logique
    this.isHeaderScrolled = scrollY > 100; // ajustez le seuil selon vos besoins
  }

  ngOnInit(): void {
    this.getProjects();
    this.getCategory();
  }

  time: boolean = false;

  getProjects() {
    this.projectService.getProjects().subscribe(
      (data) => {
        this.time = true;
        this.projects = data;
        this.projects2 = data;
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
      }
    );
  }

  /**
   * The function `getCategory()` retrieves categories from a service and filters out the category with
   * id 1.
   */
  getCategory() {
    this.projectService.getCategory().subscribe(
      (data) => {
        this.allCategories = data;
        this.allCategories = this.allCategories.filter((a: any) => a.id != 1);
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
      }
    );
  }

  /**
   * The function filters a category based on its ID and returns its name.
   * @param {any} idCategory - The `idCategory` parameter is of type `any`, which means it can accept
   * any data type.
   * @returns The name of the category that matches the given idCategory.
   */
  filterCategory(idCategory: any) {
    for (let i = 0; i < this.allCategories?.length; i++) {
      if (idCategory.includes(this.allCategories[i].id)) {
        return this.allCategories[i].name;
      }
    }
  }

  /* The `liChange(val: string)` method is used to filter the `projects` array based on the selected
  category. */
  iChange(val: string) {
    this.projects2 = this.projects.filter((projet: any) => {
      return projet.categories.includes(val);
    });
  }
}
