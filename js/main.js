$(document).ready(function() {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        duration: 100
    });
    $('.sidenav').sidenav();
});

var app = angular.module('uudaiso', []);
app.controller('uudaisoCtrl', function($scope, $http) {
    $scope.add = 0;
    $scope.openFunc = function() {
        if (add % 2 == 0) {
            $scope.result = true;
        } else {
            $scope.result = false
        }
        $scope.add++;
    };
});