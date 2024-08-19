import { UpdateDepartmentComponent } from './Admin/Departments/update-department/update-department.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Shared/login/login.component';
import { ProfileComponent } from './Admin/Shared/profile/profile.component';
import { ListAllComponent } from './Admin/Admins/list-all/list-all.component';
import { ShowAdminComponent } from './Admin/Admins/show-admin/show-admin.component';
import { AddAdminComponent } from './Admin/Admins/add-admin/add-admin.component';
import { UpdateAdminComponent } from './Admin/Admins/update-admin/update-admin.component';
import { ListAllInstructorsComponent } from './Admin/Instructors/list-all-instructors/list-all-instructors.component';
import { ShowInstructorComponent } from './Admin/Instructors/show-instructor/show-instructor.component';
import { AddInstructorComponent } from './Admin/Instructors/add-instructor/add-instructor.component';
import { ListAllDepartmentsComponent } from './Admin/Departments/list-all-departments/list-all-departments.component';
import { ShowDepartmentComponent } from './Admin/Departments/show-department/show-department.component';
import { AddDepartmentComponent } from './Admin/Departments/add-department/add-department.component';
import { ListAllCoursesComponent } from './Admin/Courses/list-all-courses/list-all-courses.component';
import { ShowCourseComponent } from './Admin/Courses/show-course/show-course.component';
import { UpdateCourseComponent } from './Admin/Courses/update-course/update-course.component';
import { AddCourseComponent } from './Admin/Courses/add-course/add-course.component';
import { ListAllLevelsComponent } from './Admin/Levels/list-all-levels/list-all-levels.component';
import { AddLevelComponent } from './Admin/Levels/add-level/add-level.component';
import { ListAllStudentsComponent } from './Admin/Students/list-all-students/list-all-students.component';
import { ShowStudentComponent } from './Admin/Students/show-student/show-student.component';
import { UpdateStudentComponent } from './Admin/Students/update-student/update-student.component';
import { AddStudentComponent } from './Admin/Students/add-student/add-student.component';
import { Error404Component } from './Admin/Shared/error404/error404.component';
import { StudentProfileComponent } from './Student/Shared/student-profile/student-profile.component';
import { ListAllStudentCoursesEnrollmentComponent } from './Admin/StudentCoursesEnrollment/list-all-student-courses-enrollment/list-all-student-courses-enrollment.component';
import { AddCoursesToStudentComponent } from './Admin/StudentCoursesEnrollment/add-courses-to-student/add-courses-to-student.component';
import { ShowCoursesOfStudentComponent } from './Admin/StudentCoursesEnrollment/show-courses-of-student/show-courses-of-student.component';
import { UpdateCoursesOfStudentComponent } from './Admin/StudentCoursesEnrollment/update-courses-of-student/update-courses-of-student.component';
import { InstructorProfileComponent } from './Instructor/Shared/instructor-profile/instructor-profile.component';
import { ListExamsComponent } from './Instructor/Exam/list-exams/list-exams.component';
import { AddExamComponent } from './Instructor/Exam/add-exam/add-exam.component';
import { ShowExamComponent } from './Instructor/Exam/show-exam/show-exam.component';
import { UpdateExamComponent } from './Instructor/Exam/update-exam/update-exam.component';
import { ListQuestionsComponent } from './Instructor/Question/list-questions/list-questions.component';
import { AddQuestionComponent } from './Instructor/Question/add-question/add-question.component';
import { ShowQuestionComponent } from './Instructor/Question/show-question/show-question.component';
import { UpdateQuestionComponent } from './Instructor/Question/update-question/update-question.component';
import { ListChoicesComponent } from './Instructor/Choices/list-choices/list-choices.component';
import { AddChoiceComponent } from './Instructor/Choices/add-choice/add-choice.component';
import { ShowChoiceComponent } from './Instructor/Choices/show-choice/show-choice.component';
import { UpdateChoiceComponent } from './Instructor/Choices/update-choice/update-choice.component';
import { ListStudentCoursesComponent } from './Student/StudentCourses/list-student-courses/list-student-courses.component';
import { ExamPageComponent } from './Student/Exam/exam-page/exam-page.component';
import { StudentExamsComponent } from './Student/Exam/student-exams/student-exams.component';
import { ListResultsOfStudentsComponent } from './Instructor/Results/list-results-of-students/list-results-of-students.component';

const routes: Routes = [
  //  Login Page
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },

  //  ------------  Start Admin Permissions ------------
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
  // List All Departments
  { path: 'Departments', component: ListAllDepartmentsComponent },
  // Show Department By ID
  { path: 'Department/:id', component: ShowDepartmentComponent },
  // Add New Department
  { path: 'Add_Department', component: AddDepartmentComponent },
  //  Edit Department By ID
  { path: 'edit_Department/:id', component: UpdateDepartmentComponent },
  // List All Courses
  { path: 'Courses', component: ListAllCoursesComponent },
  // Show Course By ID
  { path: 'Course/:id', component: ShowCourseComponent },
  // Edit Course By ID
  { path: 'edit_Course/:id', component: UpdateCourseComponent },
  // Add New Course By ID
  { path: 'Add_Course', component: AddCourseComponent },
  // List All Levels
  { path: 'Levels', component: ListAllLevelsComponent },
  // Add New Level By ID
  { path: 'Add_Level', component: AddLevelComponent },
  // List All StudentCoursesEnrollment
  {
    path: 'Student_Courses_Enrollment',
    component: ListAllStudentCoursesEnrollmentComponent,
  },
  // Add Course To Student
  { path: 'Add_New_Course', component: AddCoursesToStudentComponent },
  //Show Courses Of Student
  { path: 'Courses_Of_Student/:id', component: ShowCoursesOfStudentComponent },
  // Update Course Of Student
  {
    path: 'Update_Course_Of_Student/:id',
    component: UpdateCoursesOfStudentComponent,
  },
  // List All Students
  { path: 'Students', component: ListAllStudentsComponent },
  // Show Student By ID
  { path: 'Student/:id', component: ShowStudentComponent },
  // Edit Student By ID
  { path: 'edit_Student/:id', component: UpdateStudentComponent },
  // Add New Student By ID
  { path: 'Add_Student', component: AddStudentComponent },
  //  ------------  End Admin Permissions ------------

  //  ------------  Start Instructor Permissions ------------
  { path: 'Instructor_Profile', component: InstructorProfileComponent },
  //  Start  Exam
  { path: 'Exams', component: ListExamsComponent },
  { path: 'Add_Exam', component: AddExamComponent },
  { path: 'Show_Exam/:id', component: ShowExamComponent },
  { path: 'Edit_Exam/:id', component: UpdateExamComponent },
  // End  Exam

  // Start Questions
  { path: 'Questions', component: ListQuestionsComponent },
  { path: 'Add_Question', component: AddQuestionComponent },
  { path: 'Show_Question/:id', component: ShowQuestionComponent },
  { path: 'Edit_Question/:id', component: UpdateQuestionComponent },
  // End Questions

  //  Start Choices
  { path: 'Choices', component: ListChoicesComponent },
  { path: 'Add_Choice', component: AddChoiceComponent },
  { path: 'Show_Choice/:id', component: ShowChoiceComponent },
  { path: 'Edit_Choice/:id', component: UpdateChoiceComponent },
  // End Choices
  // Start Results
  { path: 'Results', component: ListResultsOfStudentsComponent },
  // End Results
  //  ------------  End Instrucrtor Permissions ------------

  // ------------  Start Student Permissions ------------
  //List Courses That Student Enrollment In
  { path: 'Courses_Of_Student', component: ListStudentCoursesComponent },
  { path: 'Exams_Of_Student', component: StudentExamsComponent },
  { path: 'Exam_Page/:id/:exam_title', component: ExamPageComponent },

  // ------------  End Student Permissions ------------

  // Student Page
  { path: 'Student_Profile', component: StudentProfileComponent },
  // Not Found Error 404
  { path: 'Error404', component: Error404Component },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
