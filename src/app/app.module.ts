import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts'; // Correct import
import { RouterModule } from '@angular/router';
import { EmotionChartComponent } from './components/emotion-chart/emotion-chart.component'; // Import the component

@NgModule({
  declarations: [AppComponent, EmotionChartComponent],
  imports: [BrowserModule, NgChartsModule, RouterModule.forRoot([])], // Use NgChartsModule instead of ChartsModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
