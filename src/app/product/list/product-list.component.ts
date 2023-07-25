import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { AuthService } from 'src/app/dashboard/auth.guard';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  id: string | null = null; // Track the edited product's ID


  constructor(private productService: ProductListService, private authService: AuthService) {}

  ngOnInit() {
    this.getProducts();
    this.authService.authAdmin();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (response: any) => {
        this.products = response.products;
      },
      error => {
        console.log('Error getting products:', error);
      }
    );
  }

  editProduct(product: any) {
    this.id = product._id; // Set the edited product's ID
    // console.log(product._id);
  }

  cancelEdit() {
    this.id = null; // Clear the editedProduct variable to cancel editing
  }

  saveProduct(product: any) {
    this.productService.updateProduct(this.id, product).subscribe(
      updatedProduct => {
        // Find the edited product in the products array and update its data
        const index = this.products.findIndex(p => p._id === updatedProduct._id);
        if (index !== -1) {
          this.products[index] = updatedProduct;
          console.log('Product updated:', updatedProduct);
        }
        this.id = null; // Clear the editedProduct variable after saving
      },
      error => {
        console.log('Error updating product:', error);
      }
    );
  }

  deleteProduct(product: any) {
    this.productService.deleteProduct(product._id).subscribe(
      () => {
        // Remove the deleted product from the list
        this.products = this.products.filter(p => p._id !== product._id);
        console.log('Product deleted:', product);
      },
      error => {
        console.log('Error deleting product:', error);
      }
    );
  }
}