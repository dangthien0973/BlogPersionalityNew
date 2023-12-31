import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';

import { LoginComponent } from './feature/login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContextMenuComponent } from './layout/context-menu/context-menu.component';
import { ContextHeaderComponent } from './layout/context-header/context-header.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContentBlogComponent } from './main/blog/content-blog/content-blog.component';
import { TagLogComponent } from './main/blog/tag-log/tag-log.component';
import { PopularBlogComponent } from './main/blog/popular-blog/popular-blog.component';
import { DetailBlogComponent } from './main/blog/content-blog/detail-blog/detail-blog.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { ContentDetailBlogComponent } from './blog/content-detail-blog/content-detail-blog.component'; 
import { ListBlogComponent } from './main/blog/content-blog/list-blog/list-blog.component';
import { DetailListBlogComponentNew } from './main/blog/content-blog/detail-list-blog/detail-list-blog.component';
import { PaginationComponent } from './shared/pagingnation/pagingnation.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { AlertComponent } from './shared/alert/alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostBlogComponent } from './main/internal/post-blog/post-blog.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { Ng2SmartTableModule } from 'ngx-smart-table';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContextMenuComponent,
    ContextHeaderComponent,
    BlogComponent,
    ContentBlogComponent,
    TagLogComponent,
    PopularBlogComponent,
    AboutMeComponent,
    FooterComponent,
    DetailBlogComponent,
    BlogComponent,
    ContentDetailBlogComponent,
    ListBlogComponent,
    DetailListBlogComponentNew,
    PaginationComponent,
    LoadingComponent,
    AlertComponent,
    PostBlogComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
