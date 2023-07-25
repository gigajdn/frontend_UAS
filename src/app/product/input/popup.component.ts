import { Component, Inject } from '@angular/core';
import { ProductInputService } from './product-input.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  products: any[] = [];

  constructor(private productService: ProductInputService, public dialogRef: MatDialogRef<PopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  closePopup() {
    this.dialogRef.close();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response;
      },
      error => {
        console.log('Error getting products:', error);
      }
    );
  }
}
