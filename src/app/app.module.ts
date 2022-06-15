import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './post/create/create.component';
import { ShowComponent } from './post/show/show.component';
import { DetailsComponent } from './post/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PostComponent,
    HomeComponent,
    CreateComponent,
    ShowComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
