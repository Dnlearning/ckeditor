import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ckeditorContent:String='';
  constructor(){
    this.ckeditorContent = `<p>My HTML</p>`;
  }
}
