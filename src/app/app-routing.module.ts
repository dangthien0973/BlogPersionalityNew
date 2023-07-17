import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginComponent } from './feature/login/login.component';
import { HomeComponent } from './home/home.component';
import { ContextMenuComponent } from './layout/context-menu/context-menu.component';
import { ContentBlogComponent } from './main/blog/content-blog/content-blog.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { HousingService } from 'src/app/core/service/blog.service';
import { BlogComponent } from './main/blog/blog.component';


const routes: Routes = [
    { path: 'login-component', component: LoginComponent  },
    {path:'menu', component: ContextMenuComponent},
    {path:'blog', component: BlogComponent},
    {path:'about-me', component: AboutMeComponent},
    { path: '',         component: BlogComponent }
   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    
 }