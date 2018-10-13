const references = {};

// method to handle click events for the "About Me" and "Contact Me" buttons
function handleClick(event) {
  // if the "about me" button was clicked...
  if (event.target.textContent.toLowerCase() === "about me") {
    // about-me btn is already selected...
    if (references.aboutMeBtn.classList.contains("selected")) {
      return undefined;
    }

    // about-me btn is selected now...
    else {
      // unselecting the contact-me button
      references.contactMeBtn.classList.remove("selected");

      // removing the contact-me paragraph from the page
      references.contactMe.classList.add("remove");

      // adding the selection to about-me button
      references.aboutMeBtn.classList.add("selected");

      // adding the about-me paragraph to the page
      references.aboutMe.classList.remove("remove");
    }
  }

  // if the "contact me" button was clicked...
  else {
    
    // about-me btn is already selected...
    if (references.contactMeBtn.classList.contains("selected")) {
      return undefined;
    }

    // about-me btn is selected now...
    else {
      // unselecting the about-me button
      references.aboutMeBtn.classList.remove("selected");

      // removing the about-me paragraph from the page
      references.aboutMe.classList.add("remove");

      // adding the selection to contact-me button
      references.contactMeBtn.classList.add("selected");

      // adding the contact-me paragraph to the page
      references.contactMe.classList.remove("remove");
    }
  }
}

// gets reference to the required DOM elements and adds event listeners where required...
function initialize() {
  // storing references for the "about me" and "contact me" paragraphs...
  references.aboutMe = document.querySelector("#about-me");
  references.contactMe = document.querySelector("#contact-me");

  // storing the references for the "abour me" and "contact me" buttons...
  references.aboutMeBtn = document.querySelector("#about-me-btn");
  references.contactMeBtn = document.querySelector("#contact-me-btn");

  // adding event listeners to the "about me" and "contact me" button...
  references.aboutMeBtn.addEventListener("click", handleClick);
  references.contactMeBtn.addEventListener("click", handleClick);
}

// initializing the variables when the document is loaded...
window.addEventListener("load", initialize);
