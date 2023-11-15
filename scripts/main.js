// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello worlssd!";

// /* variables */
// let my_own_num = 19000;
// console.log(my_own_num);

// /* array */
// let my_array = [1, 3, 6, 7];
// console.log("it should be five: ", my_array[2]);

// // if conditionals
// if (my_own_num === 19)
// {
// 	alert("19 accepted");
// }else {
// 	alert("not equal");
// }

// //fundtoins
// function add2strings(str1, str2)
// {
// 	return str1 + str2;
// }

// let res = add2strings('hello ', 'b****')
// console.log('func res is : ', res);

// events 
document.querySelector("h2").addEventListener("click", function() 
	{
		alert("testttt pushed me")
	});



const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/home-icon.jpg") {
    myImage.setAttribute("src", "images/two.png");
  } else {
    myImage.setAttribute("src", "images/home-icon.jpg");
  }
};




let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};