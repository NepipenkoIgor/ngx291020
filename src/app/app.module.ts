import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// NgModule ==> es6 modules
// declarations ===> let/const
@NgModule({
  declarations: [ // Pipe/Directives
    AppComponent,
    HeaderComponent
  ],
  imports: [ // NgModule
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
