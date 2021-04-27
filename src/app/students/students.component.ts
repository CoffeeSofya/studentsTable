import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output} from '@angular/core';
import {FormComponent} from './form/form.component';
import { SearchPipe } from '../search.pipe';
import students from '../files/students.json';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  highlighting = false;
  highlightingSearch = false;
  sortSurname = false;
  sortName = false;
  sortPatronymic = false;
  sortBirthDate = false;
  sortGPA = false;
  newId;
  editStudent;
  queryString;


  studentsList: Student[] = students;

  getUnderachieving() {
    this.highlighting = !this.highlighting;
  }

  // result;
  // searchBySurname($event) {
  //   let value = $event.target.value;
  //   this.result = this.studentsList.filter(function(el) {
  //     return el.surname.toLocaleLowerCase().match(value.toLocaleLowerCase());
  //   });
  //
  //   this.highlightingSearch = !this.highlightingSearch;
  // }

  sortBySurname() {
    if (this.sortSurname) {
      let sortedList = this.studentsList.sort((leftSide, rightSide) => {
        if (leftSide.id < rightSide.id) {
          return -1;
        }
        if (leftSide.id > rightSide.id) {
          return 1;
        }
        return 0;
      });
    }
    if (!this.sortSurname) {
      let sortedList = this.studentsList.sort((leftSide, rightSide) => {
        if (leftSide.surname.toLowerCase() < rightSide.surname.toLowerCase()) {
          return -1;
        }
        if (leftSide.surname.toLowerCase() > rightSide.surname.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    }
    this.sortSurname = !this.sortSurname;
  }

  sortByName() {
    if (this.sortName) {
      let sortedList = this.studentsList.sort((leftSide, rightSide) => {
        if (leftSide.id < rightSide.id) {
          return -1;
        }
        if (leftSide.id > rightSide.id) {
          return 1;
        }
        return 0;
      });
    }
    if (!this.sortName) {
      let sortedList = this.studentsList.sort((leftSide, rightSide) => {
        if (leftSide.name.toLowerCase() < rightSide.name.toLowerCase()) {
          return -1;
        }
        if (leftSide.name.toLowerCase() > rightSide.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    }
    this.sortName = !this.sortName;
  }

  sortByPatronymic() {
    if (this.sortPatronymic) {
      let sortedList = this.studentsList.sort((leftSide, rightSide) => {
        if (leftSide.id < rightSide.id) {
          return -1;
        }
        if (leftSide.id > rightSide.id) {
          return 1;
        }
        return 0;
      });
    }
    if (!this.sortPatronymic) {
      let sortedList = this.studentsList.sort((leftSide, rightSide) => {
        if (leftSide.patronymic.toLowerCase() < rightSide.patronymic.toLowerCase()) {
          return -1;
        }
        if (leftSide.patronymic.toLowerCase() > rightSide.patronymic.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    }
    this.sortPatronymic = !this.sortPatronymic;
  }

  sortByBirthDate() {
    this.studentsList.filter((a) => {
      // console.log(Date.parse(a.birthDate));
      // console.log(typeof(a.birthDate) + "rjyfhjfjh")
    });
    // console.log(this.studentsList)
    // if (this.sortBirthDate) {
    //   let sortedList = this.studentsList.sort((leftSide, rightSide) => {
    //     if (leftSide.id < rightSide.id) {
    //       return -1;
    //     }
    //     if (leftSide.id > rightSide.id) {
    //       return 1;
    //     }
    //     return 0;
    //   });
    // }
    // if (!this.sortBirthDate) {
    //   let sortedList = this.studentsList.sort((leftSide, rightSide) => {
    //     if (leftSide.birthDate < rightSide.birthDate) return -1;
    //     if (leftSide.birthDate > rightSide.birthDate) return 1;
    //     return 0;
    //   });
    //   this.sortBirthDate = !this.sortBirthDate;
    // }

    // this.studentsList.filteredTxs.sort(function(a,b): any{
    //   return (b.date.getTime() - a.date.getTime());
    // });
    // console.log(this.addNewStudent)
  }

  sortByGPA() {
    if (this.sortGPA) {
      let sortedList = this.studentsList.sort((leftSide, rightSide) => {
        if (leftSide.id < rightSide.id) {
          return -1;
        }
        if (leftSide.id > rightSide.id) {
          return 1;
        }
        return 0;
      });
    }
    if (!this.sortGPA) {
      let sortedList = this.studentsList.sort((leftSide, rightSide) => {
        if (leftSide.gpa < rightSide.gpa) {
          return -1;
        }
        if (leftSide.gpa > rightSide.gpa) {
          return 1;
        }
        return 0;
      });
    }
    this.sortGPA = !this.sortGPA;
  }

  deleteStudent(id: number) {
    for (let i = 0; i <= this.studentsList.length; i++) {
      if (this.studentsList[i].id === id) {
        this.studentsList[i].deleted = true;
      }
    }
  }

  methodEditStudent(id: number) {
    for (let i = 0; i <= this.studentsList.length; i++) {
      if (this.studentsList[i].id === id) {
        this.editStudent = this.studentsList[i];
        return this.editStudent;
      }
    }
  }

  onStudentAdd($event) {
    if ($event && $event.id) {
      for (let i = 0; i <= this.studentsList.length; i++) {
        if (this.studentsList[i].id === $event.id) {
          // this.studentsList[i].id = $event.id;
          this.studentsList[i].surname = $event.fullName.surname;
          this.studentsList[i].name = $event.fullName.name;
          this.studentsList[i].patronymic = $event.fullName.patronymic;
          this.studentsList[i].birthDate = $event.birthDate;
          this.studentsList[i].gpa = $event.gpa;
        }
      }
    }
    if ($event && !$event.id && $event.fullName.surname) {
      this.newId = this.studentsList.length + 1;
      this.studentsList.push(new Student(this.newId, $event.fullName.surname, $event.fullName.name,
          $event.fullName.patronymic, $event.birthDate, $event.gpa));
    }
  }
}

class Student {
  id: number;
  surname: string;
  name: string;
  patronymic: string;
  birthDate: Date;
  gpa: number;
  deleted = false;

  constructor(id: number, surname: string, name: string, patronymic: string, birthDate: Date, gpa: number) {
    this.id = id;
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
    this.birthDate = birthDate;
    this.gpa = gpa;
  }


}

