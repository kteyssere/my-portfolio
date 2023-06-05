import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import { HeaderComponent } from './header/header.component';
import { ProjectCardsComponent } from './project-cards/project-cards.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProjectDemoComponent } from './project-demo/project-demo.component';
import {YouTubePlayerModule} from "@angular/youtube-player";
import { CvComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    ProjectCardsComponent,
    ContactComponent,
    SkillsComponent,
    ProjectDemoComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    NgOptimizedImage,
    MatCardModule,
    MatTooltipModule,
    FlexLayoutModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
