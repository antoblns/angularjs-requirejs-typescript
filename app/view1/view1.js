/// <reference path='../../typings/all.d.ts' />
angular.module('myApp.view1', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}]).controller('View1Ctrl', [function () {
}]);
//# sourceMappingURL=view1.js.map