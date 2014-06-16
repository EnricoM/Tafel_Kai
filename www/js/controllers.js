angular.module('tables.controllers', ['ionic'])

.controller('TableMainCtrl', function($scope, $state) {
	//$scope.practice = 0;
	//$scope.test = function() {
	//	console.log($scope.practice);
//	}
})

.controller('TableSelectCtrl', function($scope, $state) {
	$scope.practice = 0;
	console.log($scope.practice);
	$scope.tablePractice = function(value){
		console.log('in tablePractice: ', value);
		var x = ($scope.practice * 10) + value;
		$scope.practice = x;
	};

	$scope.eraseInput = function() {
		console.log('got here');
		$scope.practice = 0;
	}	
	
	$scope.startLearning = function() {
		$state.go('tab.learn', { practice: $scope.practice});
	}
	
	$scope.startPractice = function() {
		$state.go('tab.practice', { practice: $scope.practice});
	}
	
})

.controller('TableLearnCtrl', function($scope, $stateParams) {
	$scope.tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	$scope.practice = $stateParams.practice;
	$scope.test = function() {
		console.log('in test');
	}
})

.controller('TablePracticeCtrl', function($scope, $stateParams) {
	$scope.practice = $stateParams.practice
	$scope.answer = 0;
	$scope.current = 1;
	$scope.answers = ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"];
	$scope.myAnswers = [1];
	
	$scope.eraseAnswer = function() {
		console.log('got here');
		$scope.answer = 0;
	}	

	$scope.tableAnswer = function(value){
		var x = ($scope.answer * 10) + value;
		$scope.answer = x;
	};

	$scope.checkAnswer = function(){
		var yourAnswer = "?"
		if ($scope.myAnswers.length * $scope.practice === $scope.answer) {
			console.log($scope.answer, " goed");
			yourAnswer = $scope.answer + " Goed"
		} else {
			yourAnswer = $scope.answer + " Niet goed: " + $scope.myAnswers.length + "X" +  $scope.practice + "=" + $scope.myAnswers.length * $scope.practice;
			console.log($scope.answer, " fout");
		}
		$scope.answers[$scope.myAnswers.length - 1] = yourAnswer;
		console.log($scope.answers[$scope.myAnswers.length - 1]);
		var lnt = $scope.myAnswers.length + 1;
		console.log('lnt', lnt);
		if (lnt < 11) {
			$scope.myAnswers.push(lnt);
			$scope.current = $scope.current + 1;
			console.log('myAnswers ', $scope.myAnswers.length);
			console.log('current ', $scope.current);
		}
		$scope.answer = 0;
	};	
});