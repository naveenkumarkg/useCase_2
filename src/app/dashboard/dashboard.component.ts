import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  time: number = 0;
  counter: number = 0;
  counter_1 = 0;
  counter_2 = 0;
  counter_3 = 0;
  i = 1;
  img_1 = false;
  img_01 = false;
  img_02 = false;
  img_03 = false;
  clear_1;
  stopFirst;
  clear_2;
  clearFirst;
  clearFirstStop;

  constructor(public apiService: ApiServiceService) { }

  ngOnInit() {

    this.apiService.getTime().subscribe((data) => {
      this.time = data["time"];
      this.img_1 = true;
      return this.time;

    });
  }

  start() {
    this.img_1 = false;
    this.img_01 = true;
    let that = this;
    let temp = 1;
    this.clear_1 = setInterval(function () {
      that.counter = temp * 20;
      if (that.counter >= 100) {
        that.clear(that.clear_1);
        that.secondCounter();

      }
      temp++
    }, this.time *200,(4));
  }

  // stopfirst(event) {
  //   let that = this;
  //   let temp = this.counter;
  //   this.clearFirstStop = setInterval(() => {
  //     that.counter = temp - 20;
  //     temp = that.counter;
  //     if (temp <= 0) {
        
  //       console.log("hi");
     
  //       this.clear(that.clearFirstStop);
      
      
  //     }
  //   },that.time *200,(3));
  // }

  // stopSecond() {
  //   let that = this;
  //   let temp = this.counter_1;
  //   this.clearFirst = setInterval(() => {
  //     that.counter_1 = temp - 20;
  //     temp = that.counter_1;
  //     if (temp <= 0) {
  //       this.clear(that.clearFirst);
  //     }
  //   }, this.time* 200,(1));
  // }

  clear(clear) {
    clearInterval(clear);
  }

  secondCounter() {

    this.img_01 = false;
    this.img_02 = true;
    let that = this;
    let temp = 1;
    // this.stopfirst();
    this.clear_2 = setInterval(function () {
      that.counter_1 = temp * 20;
      if (that.counter_1 >= 100) {
        that.clear(that.clear_2);
        that.thirdCounter()

      }
      temp++

    }, this.time *200,(2));
  }

  thirdCounter() {

    this.img_02 = false;
    this.img_03 = true;
    let that = this;
    let temp = 1;
    // this.stopSecond();
    this.clear_2 = setInterval(function () {
      that.counter_3 = temp * 20;
      if (that.counter_3 >= 100) {
        that.clear(that.clear_2);
        //  that.thirdCounter()

      }
      temp++;

    }, this.time* 200,(0));
  }



  end(){
    this.clear(this.clear_2)
    this.clear(this.clearFirst);
    this.clear(this.clear_1);

    console.log(this.counter);
    console.log(this.counter_1);
    console.log(this.counter_3);

    // if(this.counter >= 0){
    //   this.stopfirst();
    // }

    // if(this.counter_1 > 0){
    //   this.stopSecond();
    // }
  }
}









