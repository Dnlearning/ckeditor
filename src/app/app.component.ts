import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ckeditorContent:string='';
  constructor(){
    this.ckeditorContent = `<p>My HTML</p>`;
  }

  getData(){
    console.log(this.ckeditorContent);
    document.getElementById('test').innerHTML=this.ckeditorContent;
  }
}
