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
import { ListAllComponent } from './Admin/Admins/list-all/list-all.component';
import { ShowAdminComponent } from './Admin/Admins/show-admin/show-admin.component';
import { AddAdminComponent } from './Admin/Admins/add-admin/add-admin.component';
import { UpdateAdminComponent } from './Admin/Admins/update-admin/update-admin.component';
import { ListAllInstructorsComponent } from './Admin/Instructors/list-all-instructors/list-all-instructors.component';
import { ShowInstructorComponent } from './Admin/Instructors/show-instructor/show-instructor.component';
import { AddInstructorComponent } from './Admin/Instructors/add-instructor/add-instructor.component';
import { ListAllDepartmentsComponent } from './Admin/Departments/list-all-departments/list-all-departments.component';
import { ShowDepartmentComponent } from './Admin/Departments/show-department/show-department.component';
import { UpdateDepartmentComponent } from './Admin/Departments/update-department/update-department.component';
import { AddDepartmentComponent } from './Admin/Departments/add-department/add-department.component';
import { ListAllCoursesComponent } from './Admin/Courses/list-all-courses/list-all-courses.component';
import { AddCourseComponent } from './Admin/Courses/add-course/add-course.component';
import { ShowCourseComponent } from './Admin/Courses/show-course/show-course.component';
import { UpdateCourseComponent } from './Admin/Courses/update-course/update-course.component';
import { ListAllLevelsComponent } from './Admin/Levels/list-all-levels/list-all-levels.component';
import { AddLevelComponent } from './Admin/Levels/add-level/add-level.component';
import { ListAllStudentsComponent } from './Admin/Students/list-all-students/list-all-students.component';
import { AddStudentComponent } from './Admin/Students/add-student/add-student.component';
import { ShowStudentComponent } from './Admin/Students/show-student/show-student.component';
import { UpdateStudentComponent } from './Admin/Students/update-student/update-student.component';
import { NavbarStudentComponent } from './Student/Shared/navbar-student/navbar-student.component';
import { AsideStudentComponent } from './Student/Shared/aside-student/aside-student.component';
import { StudentProfileComponent } from './Student/Shared/student-profile/student-profile.component';
import { ListAllStudentCoursesEnrollmentComponent } from './Admin/StudentCoursesEnrollment/list-all-student-courses-enrollment/list-all-student-courses-enrollment.component';
import { AddCoursesToStudentComponent } from './Admin/StudentCoursesEnrollment/add-courses-to-student/add-courses-to-student.component';
import { ShowCoursesOfStudentComponent } from './Admin/StudentCoursesEnrollment/show-courses-of-student/show-courses-of-student.component';
import { UpdateCoursesOfStudentComponent } from './Admin/StudentCoursesEnrollment/update-courses-of-student/update-courses-of-student.component';
import { NavbarInstructorComponent } from './Instructor/Shared/navbar-instructor/navbar-instructor.component';
import { AsideInstructorComponent } from './Instructor/Shared/aside-instructor/aside-instructor.component';
import { InstructorProfileComponent } from './Instructor/Shared/instructor-profile/instructor-profile.component';
import { ListExamsComponent } from './Instructor/Exam/list-exams/list-exams.component';
import { AddExamComponent } from './Instructor/Exam/add-exam/add-exam.component';
import { ShowExamComponent } from './Instructor/Exam/show-exam/show-exam.component';
import { UpdateExamComponent } from './Instructor/Exam/update-exam/update-exam.component';
import { AddQuestionComponent } from './Instructor/Question/add-question/add-question.component';
import { ListQuestionsComponent } from './Instructor/Question/list-questions/list-questions.component';
import { ShowQuestionComponent } from './Instructor/Question/show-question/show-question.component';
import { UpdateQuestionComponent } from './Instructor/Question/update-question/update-question.component';
import { ListChoicesComponent } from './Instructor/Choices/list-choices/list-choices.component';
import { AddChoiceComponent } from './Instructor/Choices/add-choice/add-choice.component';
import { UpdateChoiceComponent } from './Instructor/Choices/update-choice/update-choice.component';
import { ShowChoiceComponent } from './Instructor/Choices/show-choice/show-choice.component';
import { ListStudentCoursesComponent } from './Student/StudentCourses/list-student-courses/list-student-courses.component';
import { ExamPageComponent } from './Student/Exam/exam-page/exam-page.component';
import { StudentExamsComponent } from './Student/Exam/student-exams/student-exams.component';
import { ListResultsOfStudentsComponent } from './Instructor/Results/list-results-of-students/list-results-of-students.component';
import { ResultsOfStudentComponent } from './Student/Exam/results-of-student/results-of-student.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    Error404Component,
    LoginComponent,
    ProfileComponent,
    ListAllComponent,
    ShowAdminComponent,
    AddAdminComponent,
    UpdateAdminComponent,
    ListAllInstructorsComponent,
    ShowInstructorComponent,
    AddInstructorComponent,
    ListAllDepartmentsComponent,
    ShowDepartmentComponent,
    UpdateDepartmentComponent,
    AddDepartmentComponent,
    ListAllCoursesComponent,
    AddCourseComponent,
    ShowCourseComponent,
    UpdateCourseComponent,
    ListAllLevelsComponent,
    AddLevelComponent,
    ListAllStudentsComponent,
    AddStudentComponent,
    ShowStudentComponent,
    UpdateStudentComponent,
    NavbarStudentComponent,
    AsideStudentComponent,
    StudentProfileComponent,
    ListAllStudentCoursesEnrollmentComponent,
    AddCoursesToStudentComponent,
    ShowCoursesOfStudentComponent,
    UpdateCoursesOfStudentComponent,
    NavbarInstructorComponent,
    AsideInstructorComponent,
    InstructorProfileComponent,
    ListExamsComponent,
    AddExamComponent,
    ShowExamComponent,
    UpdateExamComponent,
    AddQuestionComponent,
    ListQuestionsComponent,
    ShowQuestionComponent,
    UpdateQuestionComponent,
    ListChoicesComponent,
    AddChoiceComponent,
    UpdateChoiceComponent,
    ShowChoiceComponent,
    ListStudentCoursesComponent,
    ExamPageComponent,
    StudentExamsComponent,
    ListResultsOfStudentsComponent,
    ResultsOfStudentComponent,

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
