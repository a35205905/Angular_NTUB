import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss']
})
export class Lesson1Component implements OnInit {
  title:string = 'this is title';
  num:number = 300;
  link:string = 'https://www.google.com'
  
  money:number = 100;

  // 建構元
  constructor() { }

  //載入完成後第一個執行的Function
  ngOnInit() {
  }

  test(){
    console.log('RPESS!!' + this.num);
  }

}
