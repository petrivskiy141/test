let numberOfFilms = +prompt("Сколько фильмов ви уже посмотрели",'');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
prompt("Один из последних просмотених фильмов?");

prompt("На сколько оцените его?");
console.log(personalMovieDB.movies);

