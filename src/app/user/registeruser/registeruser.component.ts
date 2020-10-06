import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { NgxSpinnerService,NgxSpinnerModule } from "ngx-spinner";  

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: "app-registeruser",
  templateUrl: "./registeruser.component.html",
  styleUrls: ["./registeruser.component.scss"]
})
export class RegisteruserComponent implements OnInit {
  public image : any = []
  public listProducts : any = []
  public objListWithProduct : any  = []
  public newObj : any = {}
  public imageCar : any = ['../../../assets/images/bg-01.jpg','../../../assets/images/bg_img.jpg']
  public typeOfProdArray : any = []
  public partNumber : any
  public selectTypeOfProd : any
  constructor(

    private http: HttpClient,
    private SpinnerService: NgxSpinnerService,
    private ToastrService : ToastrService

  ) {
  }
 
  ngOnInit() {
    this.getProd()
    this.getTypeOfProd()
    // setTimeout(() => {
    //   this.plusDivs('right')
    // },3000); 
  }

  getTypeOfProd()
  {
    this.SpinnerService.show();  
    this.http.get<any>("https://innove-polymers.herokuapp.com/admin/typeOfProd").subscribe(data=>{
    console.log(data,"type of prod for dropdown");
    this.SpinnerService.hide()
    this.typeOfProdArray = [...new Set(data.map(item => item.typeOfProd))]; // [ 'A', 'B']
    console.log( this.typeOfProdArray,"distinct array" );

    },err=>{
      console.log(err,"Error");
      this.SpinnerService.hide()
      
    })
  }
  getProd()
  {
    this.SpinnerService.show();  
    this.http.get<any>("https://innove-polymers.herokuapp.com/admin/getProductList").subscribe(data=>{
      console.log(data,"Data");
      this.objListWithProduct = []
      this.partNumber = ''
      this.listProducts = data.docs
      // console.log(obj,"4e5r6t7y8");
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

  searchPartNumber()
  {
    console.log(this.partNumber,"part number");
    let payload = {
      partNumber : this.partNumber
    }
    this.SpinnerService.show()
    this.http.post("https://innove-polymers.herokuapp.com/admin/searchPartNumber",payload).subscribe(data=>{
      console.log(data,"data from post service");
      this.objListWithProduct = []
      this.listProducts = data
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
      this.SpinnerService.hide()
      
    },err=>{
      console.log(err);
      this.SpinnerService.hide()
      
    }
  )
}

  typeOfProdDrop()
  {
    console.log(this.selectTypeOfProd,"select type of prod");
    let payload = {
      typeOfProd : this.selectTypeOfProd
    }
    this.SpinnerService.show()
    this.http.post("https://innove-polymers.herokuapp.com/admin/searchTypeOfProd",payload).subscribe(data=>{
      console.log(data,"data from post service");
      this.objListWithProduct = []
      this.listProducts = data
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
      this.SpinnerService.hide()
      
    },err=>{
      console.log(err);
      this.SpinnerService.hide()
      
    }
  )
    
  }


}
