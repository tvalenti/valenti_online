"use strict";
/*adds eventlistner with an annonymous function to show data sending to "server" in a confirm box*/
document.getElementById('contactForm').addEventListener('submit', function() {
	let firstName = document.forms.contactForm.elements.firstName.value;
	let lastName = document.forms.contactForm.elements.lastName.value;
	let phoneNumber = document.forms.contactForm.elements.phoneNumber.value;
	let email = document.forms.contactForm.elements.email.value;
	let subject = document.forms.contactForm.elements.subject.value;
	let message = document.forms.contactForm.elements.msg.value;
	let r = confirm('Your message below will be sent. continue?\nFirst Name: ' + firstName + '\nLast Name: ' + lastName + '\nPhone: ' + phoneNumber + '\nEmail: ' + email + '\nSubject: ' + subject + '\nMessage: ' + message +'');
	if (r === true) {
		alert('Your message was sent.');
	} else {
		return;
	}
});

