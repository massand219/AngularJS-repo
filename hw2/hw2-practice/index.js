angular.module('MyApp', [])
	.controller('MainController', function() {

	var self = this;

	self.classObject = 'None';

	// self.todoList = [{todoTitle: 'Home', todoText:'Clean House'}];

	// self.todoAdd = function(){
	// 	self.todoList.push({todoTitle: self.todoTitle, todoText: self.todoInput});
	// 	self.todoTitle = '';
	// 	self.todoInput = '';
	// }

	// self.remove = function () {
	// 	self.todoList.splice();
	// }

	self.toDo = {
		Home : ['Hello'], 
		Work: ['bye', 'hi']
	}

	// self.toDo = [];
	// self.toDoDes = [];
	// self.onButtonClick = function(add){
	// 	self.toDos.push(self.toDo);
	// }

	// self.done = function(toDoDes) {
	// 	var indexOf = self.toDo.indexOf(toDoDes);
	// 	if (indexOf !== -1) {
	// 		self.toDo.splice(indexOf, 1);
	// 	}
	// }
	
	// self.toDoDes = [];
	

	// self.removeToDo = function(){
	// 	self.toDo.splice(index, 1);
	// }

	// self.onButtonClick = function(add){
	// 	if((self.toDo && self.toDoDes) && add) {
	// 		add.push(self.toDo);
	// 		self.toDo = "";
	// 	} else {
	// 		alert('You didn\'t select a priority!');
	// 	}
	// }

	
	self.onButtonClick = function(selection){
		if(self.toDo && selection) {
			selection.push(self.toDo);
			self.toDo = "";
		} else {
			alert('You didn\'t select a priority!');
		}
	}
	// self.toDo = [''];

    // self.addTodo = function (add) {
    //   add.push(self.toDo);
    //   self.toDo = '';
    // };

    self.remove = function (index) {
      self.remove.splice(index, 1);
    };

});

	
		
	
