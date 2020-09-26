import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { formattedError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,ReactiveFormsModule, Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService,NgxSpinnerModule } from "ngx-spinner";  
@Component({
  selector: 'app-catalog-control',
  templateUrl: './catalog-control.component.html',
  styleUrls: ['./catalog-control.component.scss']
})
export class CatalogControlComponent implements OnInit {
public productForm : FormGroup
public submitted : boolean = false
public img : any

  constructor(
    private fb: FormBuilder,
    private http : HttpClient,
    private route : Router,
    private ToastrService : ToastrService,
    private SpinnerService: NgxSpinnerService,
  ) {
    this.productForm = this.fb.group({
      "partNumber": ['',Validators.required],
      "dimensions" :[''],
      "weight":[''],
      "typeOfProd":[''],
      "description":[''],
      "image":[''],
    })
   }

   get f()
   {
     return this.productForm.controls
   }

  ngOnInit() {

  }

  uploadDocument(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e:any) => {
        this.productForm.get('image').setValue(event.target.files[0]);
        this.img = e.target.result
        console.log(this.img,"r5t67y89u0");
        
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  onSubmit()
  {
    this.submitted = true
    if(this.productForm.valid)
    {
      const uploadData = new FormData();
      uploadData.append('partNumber', this.productForm.get('partNumber').value);
      uploadData.append('dimensions', this.productForm.get('dimensions').value);
      uploadData.append('weight', this.productForm.get('weight').value);
      uploadData.append('typeOfProd', this.productForm.get('typeOfProd').value);
      uploadData.append('description', this.productForm.get('description').value);
      uploadData.append('image', this.productForm.get('image').value);
      this.SpinnerService.show()
      this.http.post("https://innove-polymers.herokuapp.com/admin/registerProd",uploadData).subscribe(data=>{
        console.log(data,"data4657890");
        this.SpinnerService.hide()
        this.ToastrService.success('','Product Added Successfully', {
          timeOut: 200000
        });
        this.route.navigateByUrl("Product")
      },err=>{
        this.SpinnerService.hide()
      })
    }
  }

}
