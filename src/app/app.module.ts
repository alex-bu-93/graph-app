import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }                from '@angular/core';
import { NgxChartsModule }         from '@swimlane/ngx-charts';
import { AppComponent }            from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NgxChartsModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
