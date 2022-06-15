import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { GuardService } from './guard.service';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './post/create/create.component';
import { DetailsComponent } from './post/details/details.component';
import { PostComponent } from './post/post.component';
import { ShowComponent } from './post/show/show.component';

const routes: Routes = [

  {

    path: 'about',
    component: AboutComponent

  },

  {

    //nested route
    path: 'post',

    children: [

      {
        path: '',
        component: PostComponent
      },

      {

        path: 'create',
        component: CreateComponent

      },

      {

        path: 'show',
        component: ShowComponent

      },

      {

        path: 'details/:id',
        component: DetailsComponent

      },


    ]


  },
  {
    path: 'admin',
    component: AdminComponent,canActivate:[GuardService]
  },

  {
    path:'home',
    component:HomeComponent
  },

  {

    path: '',
    component: HomeComponent

  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {







}
