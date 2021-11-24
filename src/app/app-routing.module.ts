import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AuthGuard } from './shared/Guard/auth.guard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  // { path:"sidenav",component:SidenavComponent,canActivate:[AuthGuard]},
 
  {
    path:"course",
    loadChildren:()=>import('./course/course.module').then(m=>m.CourseModule),canActivate:[AuthGuard] //load module lazily(syntax)
    
  },
  {
    path:"enrolment",
    loadChildren:()=>import('./enrolment/enrolment.module').then(m=>m.EnrolmentModule),canActivate:[AuthGuard] //load module lazily(syntax)
    
  },
  {
    path:"institute",
    loadChildren:()=>import('./institute/institute.module').then(m=>m.InstituteModule),canActivate:[AuthGuard] //load module lazily(syntax)
    
  },
  {
    path:"users",
    loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule),canActivate:[AuthGuard] //load module lazily(syntax)
    
  },
  {
    path: "**", redirectTo:"login",pathMatch:"full"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
