const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/beach1.jpg") {
    myImage.setAttribute("src", "images/beach2.jpg");
  } else {
    myImage.setAttribute("src", "images/beach1.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);//consider "name" as a variable name.
      myHeading.textContent = `Best beaches in the world are here mr , ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Best beaches in the world are here mr , ${storedName}`;
  }/*if name value doesn't exist prompt the enter username*/

  myButton.onclick = () => {
    setUserName();
  };