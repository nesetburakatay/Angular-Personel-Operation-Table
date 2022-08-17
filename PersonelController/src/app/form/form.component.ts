import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { method } from '../method';
import { tolist } from '../tolist';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {
    // if (this.methods.getstatefromLocal()!=1000) {
    //   this.stateofinput2=this.methods.getstatefromLocal();
    //   this.stateofinput="update sayfa";
    //   this.stateofinput3=1;

    // }else{
    //   this.stateofinput="normal sayfa";
    //   this.stateofinput3=2;

    // }
    if (this.methods.getstatefromLocal()==null) {
      this.reloadPage();
    }
    if (this.methods.getstatefromLocal()!=1000) {
      this.stateofinput2=this.methods.getstatefromLocal();
      // this.stateofinput="update sayfa";
      this.stateofinput3=1;

    }else{
      // this.stateofinput="normal sayfa";
      this.stateofinput3=2;

    }
    localStorage.setItem("state",JSON.stringify(1000));
  }
  methods =new method();

  stateofinput:string="";
  stateofinput2:any="";
  stateofinput3:any="";
  buttonstate:number=1;
  stateofnull:any;

  topage=[];
  DataBase: tolist[]=[];

  setValue(name: any, surname: any, email: any) {

    if (name.value!="" && surname.value!="" && email.value!="") 
    {

      let getdata={Name:name.value,Surname:surname.value,EmailAddress:email.value}
      var items = this.methods.getitemsfromLocal();
      items.push(getdata);

      // this.stateofinput2= items.length.toString();
      for (let i = 0; i < items.length; i++) {
        items[i].Id=i;
      }
     localStorage.setItem("items",JSON.stringify(items));
     this.topage=this.methods.getitemsfromLocal();
    //  this.DataBase.push(this.getitemsfromLocal());
    this.reloadPage();
    }
    else
    {
      this.stateofnull="lütfen boşlukları tam doldurun.";
    }
  }
  
  updateValue(id:any ,name: any, surname: any, email: any){
       this.methods.deleteitem3(id);
      // this.methods.additem(name,surname,email);
      if (name!="" && surname!="" && email!="") 
    {

      let getdata={Name:name.value,Surname:surname.value,EmailAddress:email.value}
      var items = this.methods.getitemsfromLocal();
      items.push(getdata);

      // this.stateofinput2= items.length.toString();
      for (let i = 0; i < items.length; i++) {
        items[i].Id=i;
      }
     localStorage.setItem("items",JSON.stringify(items));
     this.topage=this.methods.getitemsfromLocal();
    //  this.DataBase.push(this.getitemsfromLocal());
    }
    else
    {
      this.stateofinput="lütfen boşlukları tam doldurun.";
    }
  }


 

  reloadPage() {
    window.location.reload();
 }


  // DataBase: tolist[]= [
  //   {
  //     Name: 'test name1',
  //     Surname: 'test surname1',
  //     EmailAddress: 'testEmail1',
  //   },
    // {
    //   Name: 'test name2',
    //   Surname: 'test surname2',
    //   EmailAddress: 'testEmail2',
    // },
    // {
    //   Name: 'test name3',
    //   Surname: 'test surname3',
    //   EmailAddress: 'testEmail3',
    // },
    // {
    //   Name: 'test name4',
    //   Surname: 'test surname4',
    //   EmailAddress: 'testEmail4',
    // },
  // ];

  ngOnInit(): void {}
}
