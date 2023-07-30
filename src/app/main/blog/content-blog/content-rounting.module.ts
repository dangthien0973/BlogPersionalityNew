import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentBlogComponent } from './content-blog.component';
import { DetailListBlogComponentNew } from './detail-list-blog/detail-list-blog.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';

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

  export class ContentRouting { }