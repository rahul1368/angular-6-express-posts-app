import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';

const appRoutes: Routes = [
  {
    path: 'posts',
    component: PostComponent,
    data: { title: 'Post List' }
  },
  {
    path: 'post-details/:id',
    component: PostDetailComponent,
    data: { title: 'Post Details' }
  },
  {
    path: 'post-upvote/:id',
    component: PostDetailComponent,
    data: { title: 'Post Upvote' }
  },
  {
    path: 'post-create',
    component: PostCreateComponent,
    data: { title: 'Create Post' }
  },
  {
    path: 'post-edit/:id',
    component: PostEditComponent,
    data: { title: 'Edit Post' }
  },
  { path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDetailComponent,
    PostCreateComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
