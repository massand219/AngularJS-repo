angular.module('myApp', [])
	.controller('todoCtrl', function() {

	var self = this;

	// self.todo = [];
	// self.todoInput;

	// self.add = function() {
	// 	self.todoList.push({todo:self.todoName && self.todo});
	// 	self.todo= "";
	// }

	// self.remove = function() {
	// 	var oldList = self.todoList;
	// 	self.todoList = [];
	// 	angular.forEach(oldList, function(x){
	// 		self.todoList.push(x);
	// 	});
	

	// }



	self.myTodos = [];

	self.add = function() {
		self.myTodos.push({ 
			name: self.todoName,
			description: self.todoDescription,
			priority: self.priority
		});
	};

	self.remove = function(x) {
		var index = self.myTodos.indexOf(x);
		self.myTodos.splice(index,1);
	}

	});
