angular.module('MyApp', [])

.controller('MainController', function() {
	var self = this;
	
	// self.classObject = {
	// 	red: true,
	// 	orange: true,
	// 	yellow: true,
	// 	green: true,
	// 	blue: true,
	// 	none: true
	// }

	self.classObject = 'none';

	// self.files = {

	// };

	// self.add = {

	// }

	// self.home = {
	// 			name: 'home'
	// 		};

	// 		self.vacation = {
	// 			name: 'vacation'
	// 		};

	// 		self.work = {
	// 			name: 'work'
	// 		};

	// var folders = [
	// 	self.home,
	// 	self.vacation,
	// 	self.work
	// ]

	self.fldr = {
		Home: ['Stuff', 'More Stuff'],
		Vacation: ['Photos', 'Destinations'],
		Work: ['Important', 'Not Important']
	}

	self.onButtonClick = function(selection){
		if(self.addFiles && selection) {
			selection.push(self.addFiles);
			self.addFiles = "";
		} else {
			alert('You didn\'t select a folder!');
		}
	}
	
	});