import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {FormsModule }   from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { styleDirective } from './grid/style.directive';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    styleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
