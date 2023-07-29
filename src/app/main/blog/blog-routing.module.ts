import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ContentBlogComponent } from './content-blog/content-blog.component';
import { DetailListBlogComponentNew } from './content-blog/detail-list-blog/detail-list-blog.component';
import { PopularBlogComponent } from './popular-blog/popular-blog.component';
import { DetailBlogComponent } from './content-blog/detail-blog/detail-blog.component';

const blogRouters: Routes = [
    { path: 'listBlog',  component: ContentBlogComponent },
    { path: 'blogDetail/:id', component: DetailBlogComponent },
    { path: 'listdetailblog', component: DetailListBlogComponentNew },
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(blogRouters)
    ],
    exports: [
      RouterModule
    ]
  })

  export class BlogRouting { }