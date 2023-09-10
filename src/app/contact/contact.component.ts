import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  translateUserName: number = 40;
  translateUserAge: number = 40;
  translateUserEmail= 40;
  translateUserPassword= 40;
  changeUserName(value:any) {
    if(value==''){
      this.translateUserName=40
    }else{

      this.translateUserName = 0; 
    }
  
}
  changeUserEmail(value:any) {
    if(value==''){
      this.translateUserEmail=40
    }else{

      this.translateUserEmail = 0; 
    }
}
  changeUserAge(value:any) {
    if(value==''){
      this.translateUserAge=40
    }else{

      this.translateUserAge = 0; 
    }
  
}
  changeUserPassword(value:any) {
    if(value==''){
      this.translateUserPassword=40
    }else{

      this.translateUserPassword = 0; 
    }
  
}
}
