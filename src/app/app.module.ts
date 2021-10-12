import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/dashboard/side-bar/side-bar.component';
import { TopMenuComponent } from './components/dashboard/top-menu/top-menu.component';
import { ContentComponent } from './components/dashboard/content/content.component';
import { MaterialsModule } from './shared/materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    DashboardComponent,
    NotFoundComponent,
    AppComponent,
    SideBarComponent,
    TopMenuComponent,
    ContentComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
