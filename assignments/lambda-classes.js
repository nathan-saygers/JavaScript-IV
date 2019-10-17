// CODE here for your Lambda Classes

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` 
// *  and `location` are the object's own props

class Person {
  constructor(attr){
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

const fred = new Person({
  name: 'Fred',
  age: 10000,
  location: 'Bedrock',
});

const louie = new Person({
  name: "Louie",
  age: 13,
  location: 'Arkansas'
});

// Person Tests:
// console.log(fred.speak());
// console.log('Louie Test ' + louie.age);

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 
//      'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and 
//      logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
  constructor(instAttr){
    super(instAttr);
    this.specialty = instAttr.specialty;
    this.favLanguage = instAttr.favLanguage;
    this.catchPhrase = instAttr.catchPhrase;
  }
  demo(subject){
    return `Today we are learning about ${subject}`
  }
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}`
  }
}

const faye = new Instructor({
  name: 'Faye',
  age: 'Unknown',
  location: 'Cali',
  specialty: 'Helping',
  favLanguage: 'Binary',
  catchPhrase: 'finger guns, sunglasses emoji',
});

const britt = new Instructor({
  name: 'Britt',
  age: 'Also Unkown',
  location: 'Canada',
  specialty: 'Canadian Studies',
  favLanguage: 'CSYESS',
  catchPhrase: 'I am going to make a thread'
})

// console.log(faye.demo('boxing'));
// console.log(faye.grade(fred, 'masonry'));


// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has 
//      submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
  constructor(studAttr) {
    super(studAttr);
    this.background = studAttr.background;
    this.className = studAttr.className;
    this.favSubjects = studAttr.favSubjects;
  }
  listsSubjects(){
    const it = this.favSubjects.values()
    for (const value of it)
    return value;
  }
  prAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}`
  }
}

const nate = new Student({
  name: 'Nate',
  age: '30',
  location: 'Oregon',
  background: 'Project Management',
  className: 'Web_25',
  favSubjects: ['JS', 'CSS', 'LESS'], 
})

// console.log(nate.listsSubjects()); // Only returns the first value from the array
// console.log(nate.prAssignment('Javascript'));
// console.log(nate.sprintChallenge('CSS'));

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out 
//     `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
  constructor(pmAttr){
    super(pmAttr);
    this.gradClassName = pmAttr.gradClassName;
    this.favInstructor = pmAttr.favInstructor;
  }
  standup(slackChannel){
    return `${this.name} announces to ${slackChannel}, @channel standy time!`
  }
  debugsCode(Student, subject){
    return `${this.name} debugs ${Student.name}'s code on ${subject}`
  }
}

const fayejr = new ProjectManager({
  name: 'Faye Jr.',
  age: 5.5,
  location: 'Cali',
  specialty: 'Helping.Jr',
  favLanguage: 'Somethin cool',
  catchPhrase: 'llittle finger guns, little sunglasses emoji',
  gradClassName: 'CS -1',
  favInstructor: 'Faye'
});

console.log(fayejr.age);
console.log(fayejr.standup('#CoolKidsofWeb25'));
console.log(fayejr.debugsCode(nate, 'Javascript'));

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.