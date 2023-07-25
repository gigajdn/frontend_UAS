import { Component, OnInit } from '@angular/core';
import { BuyService } from './buy.service';
import { AuthService } from 'src/app/dashboard/auth.guard';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss'],
})
export class BuyComponent implements OnInit {
  products: any[] = [];
  id: string | null = null; // Track the edited product's ID
  quantity: number = 0;

  constructor(private buyService: BuyService, private authService: AuthService) {}

  ngOnInit() {
    this.getProducts();
    this.authService.authUser();
  }

  getProducts() {
    this.buyService.getProducts().subscribe(
      (response: any) => {
        this.products = response.products;
      },
      (error) => {
        console.log('Error getting products:', error);
      }
    );
  }

  editProduct(product: any) {
    this.id = product._id; // Set the edited product's ID
    console.log(product._id);
    this.buyService.getProductById(this.id).subscribe(
      (response: any) => {        
        this.quantity = response.product.quantity;
        console.log('Available quantity:', this.quantity);
      },
      (error) => {
        console.log('Error getting products:', error);
      }
    );
  }

  cancelBuy() {
    this.id = null; // Clear the editedProduct variable to cancel editing
  }

  buyProduct(product: any) {
    const amount = parseInt(product.amount, 10); // Convert the input amount from string to integer

    console.log('Input amount:', amount); // Log the input amount for debugging
    console.log('Available quantity:', this.quantity); // Log the available quantity for debugging

    // Ensure the amount is valid and greater than zero
    if (!isNaN(amount) && amount > 0 && amount <= this.quantity) {
      product.quantity -= amount; // Reduce the product's quantity by the input amount

      this.buyService.updateProduct(this.id, product).subscribe(
        (updatedProduct) => {
          // Find the edited product in the products array and update its data
          const index = this.products.findIndex(
            (p) => p._id === updatedProduct._id
          );
          if (index !== -1) {
            this.products[index] = updatedProduct;
            console.log('Product updated:', updatedProduct);
          }
          this.id = null; // Clear the editedProduct variable after saving
        },
        (error) => {
          console.log('Error updating product:', error);
        }
      );
    } else {
      console.log('Invalid amount:', amount); // Log the invalid amount for debugging
    }
  }
}
