/**
 * Created by amirrajabi on 14/02/15.
 */
var AdvanceAngular = angular.module('AdvanceAngular', [
    'ngRoute',
    'movieControllers'
]);

AdvanceAngular.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/list', {
            templateUrl : 'partials/list.html',
            controller : 'ListController'
        }).
        when('/details/:itemId', {
            templateUrl : 'partials/details.html',
            controller : 'DetailsController'
        }).
        otherwise({
            redirectTo : '/list'
        });
}]);