import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blogData/blog.component';
import { MainComponent } from './component/main/main.component';
import { EditBlogComponent } from './blogData/edit-blog/edit-blog.component';

const routes: Routes = [
  {path:'counter', component:MainComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog/details/:id', component:EditBlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
