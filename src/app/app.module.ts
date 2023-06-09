import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SizerComponent } from './core/components/sizer/sizer.component';
import { NavComponent } from './core/components/nav/nav.component';
import { SquareComponent } from './core/components/square/square.component';
import { SelectedComponent } from './core/components/selected/selected.component';
import { HomeComponent } from './core/views/home/home.component';
import { AboutComponent } from './core/views/about/about.component';
import { ProjectsComponent } from './core/views/projects/projects.component';
import { ContactComponent } from './core/views/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SizerComponent,
    NavComponent,
    SquareComponent,
    SelectedComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
