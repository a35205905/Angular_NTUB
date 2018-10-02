import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit {

  week: string[] = ['星期一', '星期二', '星期三']

  users: object[] = [
    { name: 'lux', sex: '男' },
    { name: 'apple', sex: '女' },
    { name: 'banana', sex: '男' }
  ]

  num: number[] = [10, 20, 30, 40, 50, 60, 70, 80]

  date: any = new Date()

  constructor() { }

  ngOnInit() {
  }

}
