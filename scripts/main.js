const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/code.jpg") {
		myImage.setAttribute("src", "images/code2.jpg");
	} else {
		myImage.setAttribute("src", "images/code.jpg");
	}
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
	const myName = prompt("Please enter your name.");
	if (!myName) { // Needed to avoid a null or empty user name
		setUserName();
	} else {
	localStorage.setItem("name", myName);
	myHeading.textContent = `Welcome to my website, ${myName}`;
}
}
if (!localStorage.getItem("name")) { // Initialization code
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Welcome to my website, ${storedName}`;
}
myButton.onclick = () => {
	setUserName();
};
