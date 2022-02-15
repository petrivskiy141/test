let numberOfFilms = +prompt("Сколько фильмов ви уже посмотрели",'');

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
for (let i=0  ; i< 2 ; i++){
let a = prompt("Один из последних просмотених фильмов?",''),
      b = prompt("На сколько оцените его?",'');
      
personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);



