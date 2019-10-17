// CODE here for your Lambda Classes

// #### Person
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

// #### Instructor
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


// #### Student
class Student extends Person {
  constructor(studAttr) {
    super(studAttr);
    this.background = studAttr.background;
    this.className = studAttr.className;
    this.favSubjects = studAttr.favSubjects;
  }
  listsSubjects(){
    const it = this.favSubjects;
    for (const value of it)
    console.log(value);
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

const rj = new Student({
  name: 'Raymond John',
  age: 36,
  location: 'Oregon',
  background: 'QA',
  className: 'Web_26',
  favSubjects: ['Clambering', 'Clobbering', 'Hard Drinkin', 'Commenting Loudly'],
})

// #### Project Manager
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
  catchPhrase: 'little finger guns, little sunglasses emoji',
  gradClassName: 'CS -1',
  favInstructor: 'Faye'
});

const theDarkOne = new ProjectManager({
  name: 'Beezlebub',
  age: 'Many Millenia',
  location: 'the deep',
  specialty: 'Ancient Darkness',
  favLanguage: 'Portuguese',
  catchPhrase: 'eyyyyy, buddy guy',
  gradClassName: 'The Fall',
  favInstructor: 'Dan'
});

// ### Tests

console.log('Person / Fred Test', fred.speak());
console.log('Person / Louie Test ', louie.age);
console.log('Instructor / Fay Test', faye.demo('boxing'));
console.log('Instructor / Britt Test', britt.grade(fred, 'masonry'));
nate.listsSubjects(); // Function Contains a console.log
rj.listsSubjects(); // Function Contains a console.log
console.log('Student / Nate Test', nate.prAssignment('Javascript'));
console.log('Student / RJ Test', rj.sprintChallenge('CSS'));
console.log('PM / Faye Jr. Test', fayejr.age);
console.log('PM / The Dark One Test', theDarkOne.location);
console.log('PM / The Dark One Test', theDarkOne.standup('#TheDarkCouncil'))
console.log('PM / The Dark One Test', theDarkOne.grade(rj, 'Walkin Backwards'));
console.log('PM / Faye Jr. Test', fayejr.standup('#CoolKidsofWeb25'));
console.log('PM / Faye Jr. Test', fayejr.debugsCode(nate, 'Javascript'));


// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.