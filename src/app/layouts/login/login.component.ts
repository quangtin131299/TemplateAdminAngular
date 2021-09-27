import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public showLoading = true;

  public hide: string = 'password';

  constructor(private router: Router) {
    this.router.events.subscribe(async (event)=>{
      await this.navigationInterceptor(event);   
    });
  }

  ngOnInit(): void {
   
  }

   
  async navigationInterceptor(event: any){
    if (event instanceof NavigationStart) {
      console.log("nav-start");
      this.showLoading = true;

      await this.delay2();
    }
    if (event instanceof NavigationEnd) {
      console.log("nav-end");
      this.showLoading = false;
    }
    
    // if (event instanceof NavigationCancel) {
    //   console.log("nav-cancel");
    //   this.showLoading = false;
    // }
    // if (event instanceof NavigationError) {
    //   console.log("nav-error");
    //   this.showLoading = false;
    // }
  }

  async LoginSubmit() {
    await this.delay();
  }

  async delay2(){
   
  }

  async delay(){
   
  }
}



