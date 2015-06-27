// Allen Boynton
// Miu 1506
// json data

var topSongs = {
		
		'Selena Gomez': {
			title: 'Good for You (feat. A$AP Rocky) - Single',
			artist: 'Selena Gomez',
			time: 'Time: 3:41',
			genre: 'Genre: Pop',
			released: 'Released June 22, 2015',
			label: 'Interscope Records',			
			rating: 'Rating: #2 Rated 4.5 out of 5 stars.',
			album: 'images/Good_for_you.jpg',
			url: 'https://www.youtube.com/watch?v=DR4FJQ4dkY4'
		},
		
		'Omi': {
			title: 'Cheerleader (Felix Jaehn Remix Radio Edit) - Single',
			artist: 'Omi',
			time: 'Time: 3:00',
			genre: 'Genre: Pop',
			released: 'Released May 20, 2014',
			label: 'Ultra Records',			
			rating: 'Rating: #2 Rated 4.5 out of 5 stars.',
			album: 'images/cheerleader.jpg',
			url: 'https://www.youtube.com/watch?v=kDX4Eezxiyk'
		},
		
		'Rachel Platten': {
			title: 'Fight Song',
			artist: 'Rachel Platten',
			time: 'Time: 3:23',
			genre: 'Genre: Pop',
			released: 'Released May 11, 2015',
			label: 'Columbia Records',			
			rating: 'Rating: #3 Rated 4 out of 5 stars.',
			album: 'images/fightsong.jpg',
			url: 'https://www.youtube.com/watch?v=xo1VInw-SKc'
		},
		
		'The Weeknd': {
			title: 'Can\'t Feel My Face - Single',
			artist: 'The Weeknd',
			time: 'Time: 3:35',
			genre: 'Genre: R&B/Soul',
			released: 'Released June 8, 2015',
			label: 'The Weeknd XO',			
			rating: 'Rating: #4 Rated 4.5 out of 5 stars.',
			album: 'images/theweeknd.jpg',
			url: 'https://www.youtube.com/watch?v=dqt8Z1k0oWQ'
		},
		
		'Taylor Swift': {
			title: 'Track: Bad Blood (feat. Kendrick Lamar) - Single',
			artist: 'Taylor Swift',
			time: 'Time: 3:19',
			genre: 'Genre: Pop',
			released: 'Released May 17, 2015',
			label: 'Big Machine Records, LLC',			
			rating: 'Rating: #5 Rated 4 out of 5 stars.',
			album: 'images/badblood.png',
			url: 'https://www.youtube.com/watch?v=QcIy9NiNbmo'
		}
};

// Function to check username and password
var checkUser = function(){
	if (textField2.value !== 'password' & textField1.value !== 'user'){
		alert('This username or password doesn\'t match what we have on file. Please re-enter your login details.');
	} else if (textField1.value !== 'user'){
		alert('This username doesn\'t match what we have on file. Please try again.');
	} else if (textField2.value !== 'password'){
		alert('This password doesn\'t match what we have on file. Please try again.');
	} else if (textField2.value == 'password' & textField1.value == 'user'){
		signIn();
	};
};

// Function for logging in
var getSignedIn = function(){
	
	// Main window
	var signInWindow = Ti.UI.createWindow ({
		backgroundColor: 'black',
		title: 'Register Login'
	});
	
	// Create view1
	var view1 = Ti.UI.createView ({
		backgroundColor: 'white',
		borderRadius: 4,
		top: 50,
		height: 100,
		left: 20,
		right: 20
	});
	
	// Create view2
	var view2 = Ti.UI.createView ({
		backgroundColor: 'white',
		borderRadius: 4,
		top: view1.top + view1.height + 50,
		height: 100,
		left: 20,
		right: 20
	});
	
	// Create view3
	var view3 = Ti.UI.createView ({
		backgroundColor: 'white',
		borderRadius: 4,
		top: view2.top + view2.height + 50,
		height: 100,
		left: 20,
		right: 20
	});
};

