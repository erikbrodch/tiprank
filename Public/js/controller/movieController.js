app.controller('movieController', ['$scope','movieService',function($scope, movieService) {

$scope.allMovies = movieService.allMovies;

$scope.submitMovie = function() {
    var newMovie = {
      movie_name: $scope.movie_name,
      movie_length: $scope.movie_length,
      description: $scope.description
    }
    movieService.submitMovie(newMovie);
}

}]);