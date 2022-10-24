import { Component } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { FruitModel } from './models/fruit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fruit:string = "";
  fruits: FruitModel[] = [];
  addStatus:boolean = true;

  constructor(
    private toastrService:ToastrService
  ){

  }


  addFruit(){
    this.addStatus = true;

    this.fruits.forEach(element => {
      if (element.name == this.fruit) {
        this.addStatus = false;
      }
    });

    if (this.addStatus) {
      let fruit = new FruitModel();
      fruit.name = this.fruit;
      fruit.date = Date();
      this.fruits.push(fruit);
      this.fruit = "";
      this.toastrService.success("Fruit is successfully added","Success");
      //console.log(this.fruits)
    }
  }

  deleteItem(event:any){
    let fruit:FruitModel = event.data;
    let index:number = this.fruits.indexOf(fruit);

    this.fruits.splice(index,1);
    this.toastrService.info("Product succesfully deleted");
  }

}
