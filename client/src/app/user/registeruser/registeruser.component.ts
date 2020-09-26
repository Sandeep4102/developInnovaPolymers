import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { NgxSpinnerService,NgxSpinnerModule } from "ngx-spinner";  

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: "app-registeruser",
  templateUrl: "./registeruser.component.html",
  styleUrls: ["./registeruser.component.css"]
})
export class RegisteruserComponent implements OnInit {
  public image : any = []
  public listProducts : any = []
  public objListWithProduct : any  = []
  public newObj : any = {}
  public imageCar : any = ['../../../assets/images/bg-01.jpg','../../../assets/images/bg_img.jpg']
  constructor(

    private http: HttpClient,
    private SpinnerService: NgxSpinnerService,
    private ToastrService : ToastrService

  ) {
  }
 
  ngOnInit() {
    this.getProd()
    // setTimeout(() => {
    //   this.plusDivs('right')
    // },3000);

    
  }
  getProd()
  {
    this.SpinnerService.show();  
    this.http.get<any>("https://innove-polymers.herokuapp.com/admin/getProductList").subscribe(data=>{
      console.log(data,"Data");
      let obj = []
      this.listProducts = data.docs
      console.log(obj,"4e5r6t7y8");
      this.listProducts.forEach(element => {
        console.log("came here");
        if(element.img)
        {
          this.http.get("https://innove-polymers.herokuapp.com/admin/image/"+element.img).subscribe(data=>{
            console.log(data,"image");
            // this.image = data[0]
          },err=>{
            console.log(err.url)
         
            this.newObj = {
              ...element,
              url : err.url
            }
            this.objListWithProduct.push(this.newObj)
          })
        }
        else{
          this.newObj = {
            ...element,
            url : undefined
          }
          this.objListWithProduct.push(this.newObj)
        }
      });
     console.log(this.objListWithProduct,"cfghvbjknlm");
     this.SpinnerService.hide();  
    })
  }


  plusDivs(val)
  {
  
    if(val === 'right')
    {
      console.log(val,"vall");
           
        this.imageCar[0]=this.imageCar[1]

    }

    if(val === 'left')
    {
      console.log(val,'vall');
      
        this.imageCar[1]=this.imageCar[0]

    }

    
  }

  delete(val)
  {
    this.SpinnerService.show()
console.log(val,"e45r6t7y8");
this.http.delete("https://innove-polymers.herokuapp.com/admin/delete/"+val._id).subscribe(data=>{
  console.log(data,"54r6t7y8u");
  this.SpinnerService.hide()
  this.ToastrService.success('','Product Deleted Successfully', {
    timeOut: 200000
  });
  this.getProd()
   this.image  = []
   this.listProducts  = []
   this.objListWithProduct   = []
   this.newObj  = {}
},err=>{
  console.log(err);
  this.SpinnerService.hide()
  
})

  }


}
