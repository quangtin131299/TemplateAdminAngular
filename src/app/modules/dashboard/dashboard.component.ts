import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   public isHiddenProcessbar = 'hidden';
   public nameMovie: string = '';


  constructor() { }

  ngOnInit(): void {

  }

  submitAddMovie(){
    this.isHiddenProcessbar = '';
  }

  openFile(){
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e) => {
  
      
              
    };
    input.click();
  }

}
