import { Component ,OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
ngOnInit(): void {
  console.log("res");
  
}
  nav_var:boolean=false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.documentElement.scrollTop > 0){
      this.nav_var=true;
    }else{
      this.nav_var=false;
    }
  }
}
