import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; 
import { AngularTableModule } from 'angular5html5table/dist'; 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,AngularTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
