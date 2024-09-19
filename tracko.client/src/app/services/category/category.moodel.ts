export interface Category {
  categoryId?: number; // Optional since it will be auto-generated
  categoryName: string;
  description?: string;
  imageUrl?: string;
  uuid?: any;
  image?: File; // Image will be uploaded as a file
}
