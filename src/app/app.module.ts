import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MostPlayedComponent } from './components/dashboard/content/most-played/most-played.component';
import { StatisticsComponent } from './components/dashboard/content/statistics/statistics.component';
import { FriendsComponent } from './components/dashboard/content/friends/friends.component';
import { SideBarComponent } from './components/dashboard/side-bar/side-bar.component';
import { TopMenuComponent } from './components/dashboard/top-menu/top-menu.component';
import { ContentComponent } from './components/dashboard/content/content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './shared/materials/materials.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './shared/services/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StatisticsComponent,
    MostPlayedComponent,
    DashboardComponent,
    NotFoundComponent,
    SideBarComponent,
    TopMenuComponent,
    ContentComponent,
    FriendsComponent,
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserModule,
    CommonModule,
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
