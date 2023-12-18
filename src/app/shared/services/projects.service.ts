import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private blogUrl = 'https://wp.abay.tn';

  constructor(private http: HttpClient) {}

  getProjects() {
    const url = `${this.blogUrl}/wp-json/wp/v2/posts`;
    return this.http.get(url).pipe(catchError(this.errorHandler));
  }

  getSingleProject(id: any) {
    const url = `${this.blogUrl}/wp-json/wp/v2/posts/${id}`;
    return this.http.get(url).pipe(catchError(this.errorHandler));
  }

  getCategory() {
    const url = `${this.blogUrl}/wp-json/wp/v2/categories`;
    return this.http.get(url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      observer.error(error);
    });
  }
}
