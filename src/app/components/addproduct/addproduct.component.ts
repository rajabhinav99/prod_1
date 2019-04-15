import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})

export class AddproductComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean = false;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      pid: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  constructor(private formBuilder: FormBuilder, private router: Router,
    private productService: ProductService) { }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.productService.addProduct(this.addForm.value).subscribe(data => {
      alert('Product added.')
      this.router.navigate(['/homepage']);
    });
  }
}
