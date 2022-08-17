import { formatCurrency } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { method } from '../method';
import { tolist } from '../tolist';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {
    this.topage=this.methods.getitemsfromLocal();
    this.isempty=this.topage.length
  }
  methods =new method();
  topage: tolist[] = [];
  topage1:any;
  topage2:any;
  isempty:any;

  // deleteitem(a:number){
  //   let items=[];
  //   items=  this.methods.getitemsfromLocal();
  //   for (let i = 0; i < items.length; i++) {
  //     if (items[i].Id==a) {
  //       items.splice(i,1);
  //     }
  //   }
  //  localStorage.setItem("items",JSON.stringify(items));
  //  this.topage= this.methods.getitemsfromLocal();
  // }
  deleteitem(a:number){
    // this.topage=this.methods.deleteitem(a);
    this.methods.deleteitem2(a);
    // this.topage=this.methods.getitemsfromLocal();
    
  }

  updateitem(id:number,name:string,surname:string,emailAddress:string){
    // this.topage=this.methods.deleteitem(a);
    let getdata:tolist={Id:id,Name:name,Surname:surname,EmailAddress:emailAddress}
    localStorage.setItem("state",JSON.stringify(getdata));
  }

  reloadPage() {
    window.location.reload();
 }

  ngOnInit(): void {}
}
