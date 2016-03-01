angular.module('Services', [])

.service('gradeCalculator', function() {

	var self = this;

	self.allGrades = [];

	self.calcAverage = function(listGrade) {
		var sum = 0;
		for (var i = 0; i < listGrade.length; i++) {
			sum += parseInt(listGrade[i].grade);
		}
		var total = sum/listGrade.length;
		return Math.round(total);
	}

	self.assignGrade = function(average){
		if(average >= 90)
		{
			return "A";
		}
		else if(average >= 85)
		{
			return "B";
		}
		else if(average >= 75)
		{
			return "C";
		}
		else if(average >= 60)
		{
			return "D";
		}
		else
		{
			return "F";
		}
	}

	self.passing = function(average) {
		if(average >= 65) {
			return true;
		} else {
			return false;
		}
	}

})

// .factory('', function(){


// })
