//Задание 1: ""Управление библиотекой книг""
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  displayInfo() {
    console.log(this.title + ', ' + this.author + ', ' + this.pages);
  }
}
const book1 = new Book('Atlas Shrugged', 'Ayn Rand', 1168);
book1.displayInfo();

//Задание 2: ""Управление списком студентов""

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo() {
    console.log(
      'Name: ' + this.name + '\nAge: ' + this.age + '\nGrade:' + this.grade
    );
  }
}
const student1 = new Student('John Smith', 16, '10th grade');
student1.displayInfo();


 export  const db = [
  {
    "id":1,
    "key":2
  }
]