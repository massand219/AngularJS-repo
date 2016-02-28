angular.module('myApp', [])
	.controller('mainController', function(){
		var self = this;

		self.listGrade = [];

		self.add = function() {
		self.listGrade.push({
			name: self.studentName, 
			assignment: self.assignmentNum,
			grade: self.grade
			});
		};



	});