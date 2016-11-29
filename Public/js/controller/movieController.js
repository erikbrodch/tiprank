app.controller('movieController', function($scope, movieServices) {

$scope.allMovies = movieServices.allMovies;

$scope.submitMovie = function() {
    var newMovie = {
      movie_name: $scope.movie_name,
      movie_length: $scope.movie_length,
      description: $scope.description,
    }
    movieServices.submitMovie(newMovie);
}

});