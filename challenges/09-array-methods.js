/* // have access to students from data.js

const updatedStudents = students.map(function (student) {
  // console.log(student);
  student.role = 'student';
  return student;
});

// console.log(updatedStudents);

const highScores = students.filter(function (student) {
  // if (student.score >= 80) {
  //   return student; //  a value that coerces to true
  // }

  // if (student.score >= 80) return student;
  return student.score >= 80;
});

// console.log(highScores);

const specificId = students.find(function (banana) {
  return banana.id === 6;
});

const fruits = ['banana', 'orange'];

const random = fruits.find(function (fruit) {
  return fruit === 'orange';
});

// console.log(random);
// console.log(specificId);

const averageScore =
  students.reduce(function (scoresTotal, student) {
    // console.log(student);
    // console.log(scoresTotal);
    return scoresTotal + student.score;
  }, 0) / students.length;

// console.log(averageScore);

const subject = 'art';

const total = {};
total[subject] = 'some value';
// console.log(total);

const survey = students.reduce(function (survey, student) {
  // console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});

console.log(survey);
 */

/////////////////////////////////////////////////////////////////////////////////

/* 1º Exercício - MAP - updateStudents*/
const updatedStudents = students.map(function (student) {
  // console.log(student);
  // em cada objeto 'student' adicionarei a propriedade 'role' com valor igual a 'student'
  student.role = "student";
  // por que adicionei o valor desse map de students na constante 'updatedStudents', agora preciso RETORNAR seu valor, caso contrário receberei 'undefined' como resposta
  return student;
});
console.log(updatedStudents);

/* 2º Exercício - FILTER - highScores */
const highScores = students.filter(function (student) {
  return student.score >= 1180;
  // return student.score >= 80;
});
console.log(highScores);

/* 3º Exercício - FIND - specificId */
const specificId = students.find(student => student.id === 1);

console.log(specificId);
