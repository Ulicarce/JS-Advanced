// Exercises
// Exercise 1
// Create 3 object templates.Academy, Student and Subject.The structure should be: 


// 1.Academy
// Name - string
// Students - array of Students
// Subjects - array of Subjects
// Start - Date when it starts
// End - Date when it ends
// NumberOfClasses - number of subjects * 10, not settable
// PrintStudents - method that prints all students in console
// PrintSubjects - method that prints all subjects in console

// 2.Subject
// Title - string
// NumberOfClasses - default 10, not settable
// isElective - boolean
// Academy - Academy object
// Students - array of Students
// OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number.The number can't be smaller than 3.

// 3.Student
// FirstName - string
// LastName - string
// Age - number
// CompletedSubjects - emptyArray as default, not settable
// Academy - null as default, not settable
// CurrentSubject - null as default, not settable
// StartAcademy - accepts Academy object that it sets to the Academy property of the student
// StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy.If not, give error in console and do not set the CurrentSubject property
// Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.

//  StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students(The academy that he is starting)
// StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students(The subject that he is starting).If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject


function Academy(name, students, subjects, start, end, numberOfClases = 10) {
 this.name = name;
 this.students = students;
 this.subjects = subjects
 this.startDate = start;
 this.endDate = end;
 this.numberOfClases = numberOfClases;
 this.printStudents = function () {
  this.students.forEach(student => console.log(student));
 }
 this.printSubjects = function () {
  this.subjects.forEach(subject => console.log(subject));
 }
}


function Subject(title, isEffective, academy, students) {
 this.title = title;
 this.numberOfClasses = 10;
 this.isEffective = isEffective;
 this.academy = academy;
 this.students = students;
 this.overrideClasses = function (numOfClasses) {
  if (numOfClasses < 3) {
   return console.log("number of classes can't be smaller than 3!")
  }
  return this.numberOfClasses = numOfClasses;
 }
}


function Student(firstName, lastName, age) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.age = age;
 this.completedSubjects = [];
 this.academy = null;
 this.currentSubject = null;
 this.startAcademy = function (academyObject) {
  this.academy = academyObject;
  academyObject.students.push(`${this.firstName} ${this.lastName}`)
 }
 this.startSubject = function (subjectObject) {
  if (this.academy !== null) {

   let hasSubject = false
   this.academy.subjects.forEach(subject => {
    if (subject === subjectObject.title) {
     hasSubject = true;
    }
   })
   if (hasSubject === true) {
    if (this.currentSubject !== null) {
     this.completedSubjects = this.currentSubject
    }
    this.currentSubject = subjectObject;
    subjectObject.students.push(`${this.firstName} ${this.lastName}`)
   }
   else {
    console.log('Error: property is not set, subject does not exist in this academy!')
   }
  }

  else {
   console.log('Error: property is not set, the student does not attend any academy!')
  }
 }
}


let sedc = new Academy('sedc', ['Tatjana Ristovska', 'Matej Ristovski'], ['HTML5', 'CSS', 'JavaScript', 'JavaScript Advanced', 'C#'], '17.10.2022', '20.10.2023')
let cSharp = new Subject('C#', true, sedc, ['Andrej Ristovski', 'Angel Ristovski'])
let JanaRistovska = new Student('Jana', 'Ristovska', 33)

JanaRistovska.startAcademy(sedc)
console.log('Academy that Jana Ristovska attends: ', JanaRistovska.academy)
console.log('SEDC Academy: ', sedc)

JanaRistovska.completedSubjects = 'javaScript Advanced'
JanaRistovska.startSubject(cSharp)
console.log('C#: ', cSharp)
console.log('About Jana Ristovska:', JanaRistovska)