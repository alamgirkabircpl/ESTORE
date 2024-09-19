import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit {
  categoryForm: FormGroup | any;
  uuid: string | null = null;
  selectedImage: File | null = null;
  imageUrl!: string; // Holds the URL of the current image
  imagePreview: string | ArrayBuffer | null = null; // Holds the preview of the new image

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      categoryName: [''],
      categoryId: [''],
      description: [''],
      imageUrl: [''],
      image: [null],
    });
  }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.paramMap.get('id');
    if (this.uuid) {
      this.loadCategory();
    }
  }

  loadCategory(): void {
    this.categoryService.getCategoryById(this.uuid).subscribe(
      (category) => {
        this.categoryForm.patchValue({
          categoryName: category.categoryName,
          categoryId: category.categoryId,
          description: category.description,
          imageUrl: category.imageUrl, // Bind the existing image URL
        });
        this.imageUrl = category.imageUrl ?? ''; // Store the image URL for display
      },
      (error) => {
        this.toastr.error('Error loading category');
      }
    );
  }

  // Handle image selection and show preview
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.categoryForm.patchValue({ image: file });

      // Create an image preview
      const reader = new FileReader();
      reader.onload = (e) => (this.imagePreview = reader.result);
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append(
      'CategoryName',
      this.categoryForm.get('categoryName')?.value
    );
    formData.append('categoryId', this.categoryForm.get('categoryId')?.value);
    formData.append('Description', this.categoryForm.get('description')?.value);

    // Append the new image if one is selected
    if (this.selectedImage) {
      formData.append('Image', this.selectedImage);
    }

    // Call the service to update the category
    this.categoryService.updateCategory(formData).subscribe(
      () => {
        this.toastr.success('Category updated successfully');
        this.router.navigate(['/admin-dashboard/category']);
      },
      (error) => {
        this.toastr.error('Error updating category');
      }
    );
  }
}
