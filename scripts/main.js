const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let mybutton = document.querySelector('button');
let myImage = document.querySelector('img');

function say0uch(){
	alert('0uch! Stop poking me!');
}

//Assign the function to the onclick event on that element
myImage.onclick= say0uch; 

mybutton.onclick= function (){
 	let mySrc = myImage.getAttribute('src');
 		if(mySrc === 'firefox.png'){
 			myImage.setAttribute('src','blank-icon.png');
 		}else{
 			myImage.setAttribute('src','firefox.png');
 		}
}
