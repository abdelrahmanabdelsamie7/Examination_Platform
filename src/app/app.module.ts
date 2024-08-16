import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Admin/Shared/navbar/navbar.component';
import { FooterComponent } from './Admin/Shared/footer/footer.component';
import { AsideComponent } from './Admin/Shared/aside/aside.component';
import { Error404Component } from './Admin/Shared/error404/error404.component';
import { LoginComponent } from './Shared/login/login.component';
import { ProfileComponent } from './Admin/Shared/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './Admin/Shared/admin-page/admin-page.component';
import { ListAllComponent } from './Admin/Admins/list-all/list-all.component';
import { ShowAdminComponent } from './Admin/Admins/show-admin/show-admin.component';
import { AddAdminComponent } from './Admin/Admins/add-admin/add-admin.component';
import { UpdateAdminComponent } from './Admin/Admins/update-admin/update-admin.component';
import { ListAllInstructorsComponent } from './Admin/Instructors/list-all-instructors/list-all-instructors.component';
import { ShowInstructorComponent } from './Admin/Instructors/show-instructor/show-instructor.component';
import { AddInstructorComponent } from './Admin/Instructors/add-instructor/add-instructor.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    Error404Component,
    LoginComponent,
    ProfileComponent,
    AdminPageComponent,
    ListAllComponent,
    ShowAdminComponent,
    AddAdminComponent,
    UpdateAdminComponent,
    ListAllInstructorsComponent,
    ShowInstructorComponent,
    AddInstructorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
