import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.scss']
})
export class Lesson2Component implements OnInit {
  abc:boolean = true;
  score:number = 0;

  constructor() { }

  ngOnInit() {
  }

  change(){
    //相反
    this.abc = !this.abc
  }
}
