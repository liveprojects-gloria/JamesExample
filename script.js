var app = angular.module('myApp', ['ui.router']);

app.controller('myCtrl', function($scope, $state) {
  $scope.views = ['File1', 'File2', 'File3'];
  $scope.Model = {
    selected: null
  };
  $scope.go = function(index) {
    $state.go('view_route', {
      index: index
    });
  };
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('view/route1', {
      url: "/route1",
      templateUrl: "file1.html"
    })

  .state('view_route', {
    url: "/route/{index:int}",
    templateProvider: function($templateRequest, $stateParams) {

      var index = $stateParams.index + 1;
      var templateName = 'file' + index + '.html';

      return $templateRequest(templateName);
    },
  });

});
