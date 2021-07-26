import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: BlogPageComponent},
  {path: 'create', component: CreatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
