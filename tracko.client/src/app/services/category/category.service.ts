import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from './category.moodel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  readonly rootUrl = 'https://localhost:44329/api/Category';
  constructor(private http: HttpClient) {}

  addCategory(category: FormData): Observable<Category> {
    console.log(category);
    return this.http.post<Category>(this.rootUrl, category);
  }

  // Method to fetch all categories
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.rootUrl);
  }

  // Get a single category by ID
  getCategoryById(id: any): Observable<Category> {
    return this.http.get<Category>(`${this.rootUrl}/${id}`);
  }

  // Update a category
  updateCategory(category: FormData): Observable<void> {
    return this.http.put<void>(`${this.rootUrl}/Update`, category);
  }

  // Delete a category
  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.rootUrl}/${id}`);
  }
}
