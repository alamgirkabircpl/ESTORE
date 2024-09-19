import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  categoryForm: FormGroup;
  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null; // For image preview

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private router: Router
  ) {
    // Initialize the form
    this.categoryForm = this.fb.group({
      categoryName: [''], // No validators
      description: [''], // No validators
      image: [null], // No validators
    });
  }

  // Handle file selection and image preview
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedImage = file;

      // Generate preview
      const reader = new FileReader();
      reader.onload = (e) => (this.imagePreview = reader.result);
      reader.readAsDataURL(file);

      // Update form value
      this.categoryForm.patchValue({ image: file });
    }
  }

  // Handle form submission
  onSubmit() {
    const formData = new FormData();
    formData.append(
      'CategoryName',
      this.categoryForm.get('categoryName')?.value
    );
    formData.append('Description', this.categoryForm.get('description')?.value);

    if (this.selectedImage) {
      formData.append('Image', this.selectedImage);
    }

    this.categoryService.addCategory(formData).subscribe(
      (response) => {
        this.toastr.success('Category added successfully!');
        this.categoryForm.reset();
        this.selectedImage = null;
        this.imagePreview = null;
        this.router.navigate(['/admin-dashboard/category']);
      },
      (error) => {
        this.toastr.error('Error adding category. Please try again.');
        console.error('Error adding category', error);
      }
    );
  }
}
