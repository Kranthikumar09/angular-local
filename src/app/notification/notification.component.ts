import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="displayNotification">
                 This website uses cookies to provide better user experience.
                 <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
             </div>`,
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  
  constructor(){}

  ngOnInit(): void {
     
  }
  displayNotification: Boolean = false;

  closeNotification(){
    this.displayNotification = true;
  }
}
