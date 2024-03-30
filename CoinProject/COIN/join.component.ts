import { Component, OnInit, Output } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { JoinService } from './join.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
})
export class JoinComponent implements OnInit {
  newData: any = [];
  calledData: any = [];
  newList: any = [];
  findingData: any = [];
  searchedCoin!: any;
  flag: boolean = true;
  flagLogin: boolean = false;
  fullName!: any;
  password!: any;
  newPage: boolean = true;
  logArr: Array<any> = ['a', 'a'];

  constructor(private _joinService: JoinService, private route: Router) {}

  ngOnInit(): void {
    this._joinService.getData().subscribe((res) => {
      this.newData = res;
      console.log(this.newData);
    });
  }

  check(): any {
    this.logArr.forEach((fullName: any, password: any) => {
      if (this.fullName == 'a' && this.password == 'a') {
        return (this.flagLogin = true);
      } else {
        return (this.flagLogin = false);
      }
    });
  }

  findCoin() {
    this.newList.push(
      (this.newList = this.newData.filter(
        (data) => data.namess === this.searchedCoin
      ))
    );

    this.newList.forEach((elem) => {
      this.findingData = elem;
      console.log(this.findingData);
    });

    this.flag = false;
    console.log(this.newList);
  }

  onClick() {
    this.newData.forEach((element) => {
      if (this.searchedCoin == element.namess) {
        this.newPage = false;

        this.calledData = element;
        console.log(this.calledData);
      }
    });
  }
}
