import { Component, OnInit } from '@angular/core';
import { ProductInputService } from './product-input.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup.component';
import { AuthService } from 'src/app/dashboard/auth.guard';

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.scss'],
})
export class ProductInputComponent implements OnInit{
  product: Product = new Product();

  constructor(
    private productService: ProductInputService,
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.authAdmin();
  }

  reloadPage() {
    window.location.reload();
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('quantity', this.product.quantity.toString());
    formData.append('price', this.product.price.toString());
    if (this.product.image) {
      formData.append('productImage', this.product.image);
    }

    this.productService.createProduct(formData).subscribe(
      (response: any) => {
        console.log('Product submitted successfully');
        // Reset the form or perform any other actions after successful submission
        this.openPopup();
      },
      (error) => {
        console.log('Error submitting product:', error);
        // Handle error scenarios
      }
    );
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    this.product.image = file;
  }

  openPopup() {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '300px',
      data: { name: this.product.name }, // Pass the name as data to the pop-up dialog
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Popup closed', result);
      this.reloadPage();
    });
  }
}
