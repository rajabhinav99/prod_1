import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})

export class EditproductComponent implements OnInit {

  editForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private productService: ProductService) { }

  ngOnInit() {
    let productId = sessionStorage.getItem("EditProductId");
    this.editForm = this.formBuilder.group({
      id: [],
      pid: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
    this.productService.getProductById(+productId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    this.productService.updateProduct(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          alert('Product Updated.');
          this.router.navigate(['/homepage']);
        },
        error => {
          alert(error);
        });
  }
}
