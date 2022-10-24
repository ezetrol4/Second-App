import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FruitModel } from '../models/fruit';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent implements OnInit {

  @Input()   fruits:FruitModel[] = [];
  @Output()  myEvent:EventEmitter<any> = new EventEmitter();




  constructor(
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
  }

  deleteItem(fruit:FruitModel){
    this.myEvent.emit({data: fruit})
    // let index:number = this.fruits.indexOf(fruit);

    // //console.log(fruit);

    // this.fruits.splice(index,index);
    // this.toastrService.info(fruit.name + " is successfully deleted")
  }



}
