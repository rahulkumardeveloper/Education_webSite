import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { JoinNowComponent } from './join-now/join-now.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',children:[{path:'',component:HomeComponent},{path:'joinNow',component:JoinNowComponent},  {path:'course',component:CourseComponent},
]},
  {path:'course',component:CourseComponent},
  {path:'joinNow',component:JoinNowComponent},
  {path:'about',component:AboutComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
