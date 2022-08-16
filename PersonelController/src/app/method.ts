export class method{

    getitemsfromLocal(){
        let items= [];
        let value = localStorage.getItem("items");
        if (value!=null) {
          items=JSON.parse(value);
        }
        return items;
      }
      getstatefromLocal(){
        let items;
        let value = localStorage.getItem("state");
        if (value!=null) {
          items=JSON.parse(value);
        }
        return items;
      }
      additem(name: any, surname: any, email: any, id?:any){
        if (name.value!="" && surname.value!="" && email.value!="") 
        {
    
          let getdata={Name:name.value,Surname:surname.value,EmailAddress:email.value}
          var items = this.getitemsfromLocal();
          items.push(getdata);
    
          // this.stateofinput2= items.length.toString();
          for (let i = 0; i < items.length; i++) {
            items[i].Id=i;
          }
         localStorage.setItem("items",JSON.stringify(items));
         return this.getitemsfromLocal();
        //  this.DataBase.push(this.getitemsfromLocal());
        }
        else
        {
           return "lütfen boşlukları tam doldurun.";
        }
      }
      

      deleteitem(a:number){
        let items=[];
        items=  this.getitemsfromLocal();
        for (let i = 0; i < items.length; i++) {
          if (items[i].Id==a) {
            items.splice(i,1);
          }
        }
       localStorage.setItem("items",JSON.stringify(items));
       return this.getitemsfromLocal();
      }
      deleteitem2(a:number){
        let items=[];
        items=  this.getitemsfromLocal();
        for (let i = 0; i < items.length; i++) {
          if (items[i].Id==a) {
            items.splice(i,1);
          }
        }
       localStorage.setItem("items",JSON.stringify(items));
       this.reloadPage();
      }
      deleteitem3(a:number){
        let items=[];
        items=  this.getitemsfromLocal();
        for (let i = 0; i < items.length; i++) {
          if (items[i].Id==a) {
            items.splice(i,1);
          }
        }
       localStorage.setItem("items",JSON.stringify(items));
      }
      reloadPage() {
        window.location.reload();
     }
    

}



