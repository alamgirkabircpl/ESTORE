import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../../../services/category/category.moodel';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  categories: Category[] = [];
  isLoading = true; // Flag to show loading state

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
        this.isLoading = false; // Hide loading indicator
      },
      (error) => {
        this.toastr.error('Error loading categories. Please try again.');
        console.error('Error loading categories', error);
        this.isLoading = false; // Hide loading indicator even on error
      }
    );
  }

  deleteCategory(id: any): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteCategory(id).subscribe(
        () => {
          this.toastr.success('Category deleted successfully');
          this.loadCategories(); // Reload the list
        },
        (error) => {
          this.toastr.error('Error deleting category');
        }
      );
    }
  }
}
