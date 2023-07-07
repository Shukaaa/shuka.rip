import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SizerComponent } from './core/components/sizer/sizer.component';
import { NavComponent } from './core/components/nav/nav.component';
import { SquareComponent } from './core/components/square/square.component';
import { HomeComponent } from './core/views/home/home.component';
import { ProjectsComponent } from './core/views/projects/projects.component';
import { ContactComponent } from './core/views/contact/contact.component';
import {GudBadgeComponent} from "./core/components/gud-badge/gud-badge.component";

@NgModule({
  declarations: [
    AppComponent,
    SizerComponent,
    NavComponent,
    SquareComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    GudBadgeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
