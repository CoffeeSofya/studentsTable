import {Component, Input, OnInit, Output, EventEmitter, OnChanges, ChangeDetectionStrategy} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnChanges {

  addNewStudent;
  statusValid;
  checkStatus = false;
  @Input() editStudent;
  @Output() onStudentAdd: EventEmitter<object> = new EventEmitter();

  addEditStudentsForm = new FormGroup({
    fullName: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]),
      patronymic: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    }, [this.validatorForFullnameForm]),
    id: new FormControl(''),
    birthDate: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    gpa: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(5)])
  });

  ngOnChanges(): void {
    this.addEditStutentInForm();
  }

  ngOnInit(): void {

    this.addEditStudentsForm.valueChanges.subscribe((value) => {
      if (this.statusValid == "VALID") {
        this.addNewStudent = value;
      }
    });
    this.addEditStudentsForm.statusChanges.subscribe((status) => {
      this.statusValid = status;
    });
  }

  validatorForFullnameForm(control: AbstractControl) {
    if (control.value.name !== control.value.surname || control.value.name !== control.value.patronymic) {
      return null;
    }
    return {validatorForFullnameForm: 'Имя совпадает с фамилией или отчеством'};
  }

  addEditStutentInForm(): void {
    if(this.editStudent) {
      this.addEditStudentsForm.setValue({
        fullName: {
          name: this.editStudent.name,
          surname: this.editStudent.surname,
          patronymic: this.editStudent.patronymic
        },
        id: this.editStudent.id,
        birthDate: this.editStudent.birthDate,
        gpa: this.editStudent.gpa
      });
    }
  }

  sendForm() {
    if (this.statusValid == "VALID") {
      this.onStudentAdd.emit(this.addNewStudent);
      this.addEditStudentsForm.reset();
    }
  }

  checkStatusForm() {
    if (this.statusValid == "VALID") {
      this.checkStatus = true;
    }
  }
}


