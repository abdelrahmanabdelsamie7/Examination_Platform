import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Shared/login/login.component';
import { AdminPageComponent } from './Admin/Shared/admin-page/admin-page.component';
import { ProfileComponent } from './Admin/Shared/profile/profile.component';
import { ListAllComponent } from './Admin/Admins/list-all/list-all.component';
import { ShowAdminComponent } from './Admin/Admins/show-admin/show-admin.component';
import { AddAdminComponent } from './Admin/Admins/add-admin/add-admin.component';
import { UpdateAdminComponent } from './Admin/Admins/update-admin/update-admin.component';
import { ListAllInstructorsComponent } from './Admin/Instructors/list-all-instructors/list-all-instructors.component';
import { ShowInstructorComponent } from './Admin/Instructors/show-instructor/show-instructor.component';
import { AddInstructorComponent } from './Admin/Instructors/add-instructor/add-instructor.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  //Landing Page
  { path: 'Admin_Page', component: AdminPageComponent },
  //Admin Profile
  { path: 'Admin_Profile', component: ProfileComponent },
  //Update Admin
  { path: 'edit/:id', component: UpdateAdminComponent },
  //List All Admins
  { path: 'Admins', component: ListAllComponent },
  //Show Admin By ID
  { path: 'Admin/:id', component: ShowAdminComponent },
  //Add New Admin
  { path: 'Add_Admin', component: AddAdminComponent },
  // List All Instructors
  { path: 'Instructors', component: ListAllInstructorsComponent },
  //Show Instructor By ID
  { path: 'Instructor/:id', component: ShowInstructorComponent },
  //Add New Instructor
  { path: 'Add_Instructor', component: AddInstructorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
