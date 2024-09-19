import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../../../services/category/category.moodel';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css',
})
export class CategoryDetailsComponent implements OnInit {
  category: Category | undefined;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.categoryService.getCategoryById(id).subscribe(
      (category) => {
        this.category = category;
      },
      (error) => {
        this.toastr.error('Error loading category details');
      }
    );
  }

  // Method to go back to the previous route
  goBack(): void {
    this.location.back();
  }
}
