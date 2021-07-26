import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { MyButtonComponent } from './components/UI/my-button/my-button.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    PostListComponent,
    PostListItemComponent,
    MyButtonComponent,
    CreatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
