var myImage = document.querySelector('img');
var changeImage = true;

myImage.onmouseenter = function() {
  	mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/white-plane-sky.jpg' && changeImage === true) { 
		myImage.setAttribute('src', 'images/plane2.jpg')
		changeImage = false;
	}
	else if (changeImage === false)
		changeImage = true;
	else
		myImage.setAttribute('src', 'images/white-plane-sky.jpg');
}

/*
myImage.onmouseleave = function() {
    myImage.setAttribute('src', 'images/white-plane-sky.jpg');

}
*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h4');

function setUserName(myName) {
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome, ' + myName + '!';
}

function getUserName() {
	name = prompt('Please enter your name.');
	return name;
}

if(!localStorage.getItem('name')) {
	setUserName(getUserName());
} else {
	var storedName = localStorage.getItem('name');
	setUserName(storedName);
}

myButton.onclick = function() {
	setUserName(getUserName());
}
