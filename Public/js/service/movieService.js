app.factory('movieService', function(){

    var movieService = {
        allMovies = [],

        submitMovie: function (newMovie){
        allMovies.push(newMovie);

        }
    }

return movieService;
})