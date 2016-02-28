angular.module('MyApp', [])

.controller('MainController', function() {
	var self = this;
	// this.master = {};

	// this.update = function(user){
	// 	this.master = angular.copy(user);
	// };

	// this.reset = function(){
	// 	user.angular.copy(this.master);
	// };
	// this.reset();
	// this.master = {fname: "", lname: ""};
 //    this.reset = function() {
 //        this.user = angular.copy(this.master);
 //    };

 	self.user = {
 		fName: 'Mehak',
 		lName: 'Massand',
 		email: 'massand219@icloud.com'
 	}

 	self.onEditClicked = function(){
 		self.isEditing = true;
 		self.copyUser = angular.copy(self.user);
 	};

 	self.onSaveClicked = function(){
 		self.isEditing = false;
 		self.user = angular.copy(self.copyUser);
 	};

 	self.onCancelClicked = function(){
 		self.isEditing = false;
 	};


});