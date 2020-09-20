import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";

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

  constructor(

    private http: HttpClient,

  ) {
  }
 
  ngOnInit() {
    this.getProd()
  }
  getProd()
  {
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
    })
  }

}
