"use strict";
photoInsert(22);

/* photoInsert function is for looping through as many imgs you have in a specific folder. the argument that the function takes in is a limiter for total amount of imgs */
function photoInsert(num) {

	/* Stores the element photos as a variable so it doesnt search for this element every loop */
	const container = document.getElementById('photos');

	/* Declaring insertHTML variable as am empty string now is important. if it was just declared without an assignment the first load will be "undefined" then show imgs after.*/
	let insertHTML = '';

	/* Loop that writes each photo and warmark to the page and increases the file name by 1 each time. all file names follow same incrementing fashion. */
	for (let i = 0; i < num; i++) {
		insertHTML += '<div class="allPhotos" id="id' + i + '" style="background: url(imgs/photos/' + i +'.jpg) center center / cover no-repeat;"><img class="watermark" src="imgs/photos/VALENTIONLINE(watermark)1000px.png" alt="thumbnail-' + i +'"></div>';
		container.innerHTML = insertHTML;
	}
}