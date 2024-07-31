(function() {
    'use strict';
    angular.module('DefectsApp',[]).controller('DefectController', DefectController);
    
    DefectController.$inject = ['$scope'];
    
    function DefectController($scope) {

        $scope.name = "";

        $scope.message = "";

        $scope.step = 1;

        $scope.displayMessage = function () {

            if ($scope.message === "") {
                $scope.message = "Please enter a name!"
            }

            $scope.message = "Hello " + $scope.name + "! My name is Ayush Shastry. I am a student at the Univeristy of Illinois at Urbana-Champaign! "
            + "I am studying statistics with a minor in computer science. I built this website using HTML, CSS and AngularJS. "
            + "The data visualizations and random forest models displayed were created by using various Python libraries. "
            + "In this website, I will take you through a step by step process on how I built this random forest model. "
            + "I have linked the data set and Python source code below. "
            + "I hope you enjoy this website as much as I enjoyed building it!";
        };

        $scope.nextStep = function() {
            $scope.step++;
        };

    }


})();