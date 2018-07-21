"use strict";
// Stores header selector in variable so the function doesnt search for it every time(cuts down on overhead) 
const headerStyle = document.querySelector('header');
// The array of the amount of imgs I am using for my header
const myArr = ["1","2","3","4","5","6","7"];

setInterval(slideOut, 7000);


function slideOut() {
	// Random number from array
	let idx = Math.floor(Math.random() * myArr.length);
	// Adds the animate css class to the header
	headerStyle.classList.add('slideOut');
	// Had to add a timeout for changing the background image as it was changing it before animation, now does animation then changes the image off screen
	setTimeout(function() {
		headerStyle.style.background = 'linear-gradient(to right, white, rgba(255,255,255, .2) 100%),\n url(imgs/header/'+ myArr[idx] +'.jpg) center no-repeat';
	headerStyle.style.backgroundSize = 'cover';
		}, 1000)
	
	// Timeout for removing the class from the header
	setTimeout(function() {
 			headerStyle.classList.remove('slideOut');
 		}, 2500);
}
