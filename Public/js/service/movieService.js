app.service('movieService', function(){

    var movieService = {
        allMovies: [],

        submitMovie: function (newMovie){
        movieService.allMovies.push(newMovie);

        }
    }

return movieService;
})