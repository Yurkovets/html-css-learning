const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/miami-palm.jpg") {
      myImage.setAttribute("src", "images/miami-coast.jpg");
    } else {
      myImage.setAttribute("src", "images/miami-palm.jpg");
    }
  };

  const myHeading = document.querySelector("h1");
  const myButton = document.querySelector("button");

  function setUserName () {
    const myName = prompt('Please, enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to the Miaimi Vibes site, ${myName}`;
    }
  };

  if(!localStorage.getItem("name")) {
    setUserName();
  } else {
    myHeading.textContent= `Welcome to the Miaimi Vibes site, ${localStorage.getItem("name")}`;
  };

  myButton.onclick = () => {
    setUserName();
  };