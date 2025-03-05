import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emotion-timeline-visualization';
  
  ngonInit() {
    console.log(this.title);
  }
}
