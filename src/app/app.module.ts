import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { FormComponent } from './students/form/form.component';

const routes = [
  {path: '', component: StudentsComponent},
  {path: 'student/add', component: FormComponent},
  {path: 'student/edit/:', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    StudentsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
