app.controller("BoardsCtrl",
              ["$scope", "Restangular", "UserService", 'userPromise', '$location', "BoardService",
              function($scope, Restangular, UserService, userPromise, $location, BoardService){
  if (!userPromise) {
    $location.path('/')
  };

  $scope.boards = BoardService.boards;
  // $scope.selectedBoard = BoardService.boards.selectedBoard

  $scope.deleteBoard = function() {
    if (!$scope.selectedBoard) return;
    var id = $scope.selectedBoard
    Restangular.one("boards", id).get().then(function(board) {
      board.remove();
      for (var i = 0; i < $scope.boards.list.length; i++) {
        if ($scope.boards.list[i].id === board.id) {

          return $scope.boards.list.splice(i, 1);
        }
      };
    })
  }

}])