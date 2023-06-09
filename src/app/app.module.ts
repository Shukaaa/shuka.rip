import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SizerComponent } from './core/components/sizer/sizer.component';
import { NavComponent } from './core/components/nav/nav.component';
import { SquareComponent } from './core/components/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    SizerComponent,
    NavComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
