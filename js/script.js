"use strict";

/* const result = confirm("Are you here?");
console.log(result);
 */

/*  const answer = +prompt("How old are you?", "18");
 console.log(answer+10); */

/*  const answers = []; */

/*  answers[0] = prompt('What is your name?', 'Bill');
 answers[1] = prompt('What is your surname?', 'Smith');
 answers[2] = prompt('How old are you?', '21'); */

/* console.log(typeof(answers));
document.write(answers); */

/* const category = 'toys';

console.log(`https://someurl/${category}/5`);
const nameuser = +prompt('How old are you?', '16');
alert(18 - nameuser); */

/* let incr = 10,
    decr = 10;
++incr;
--decr;

console.log(incr);
console.log(decr); */

const numberOfFilms = +prompt("How many movies have you seen?", "1");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt("Which the movie have been the last?", "Nemo"),
    b = prompt("How many stars would you give it?", "5"),
    c = prompt("Which the movie have been the last?", "Nemo"),
    d = prompt("How many stars would you give it?", "5");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);