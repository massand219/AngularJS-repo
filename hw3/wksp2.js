angular.module('myApp', ['Services'])
	.controller('mainController', function(gradeCalculator){
		var self = this;

		self.listGrade = [];

		self.add = function() {	
		self.listGrade.push({
			name: self.studentName, 
			assignment: self.assignmentNum,
			grade: self.grade
			});
		self.average = gradeCalculator.calcAverage(self.listGrade);
		self.letterGrade = gradeCalculator.assignGrade(self.average);
		// console.log(self.average);
		self.pass = gradeCalculator.passing(self.average);
		};



	});