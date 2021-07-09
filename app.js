//  selecting elements by id
const userName = document.getElementById("txtName");
const email = document.getElementById("txtEmail");
const phone = document.getElementById("txtPhoneN");
const job = document.getElementById("txtJobTitle");
const password = document.getElementById("txtPassword");
const conPassword = document.getElementById("txtConPassword");

const form = document.querySelector("form");
const dropDown = document.getElementById("form-control-select");

function validateInput() {
  // Check if name is blank
  if (userName.value.trim() === "") {
    onError(userName, "Name cannot be blank");
  } else {
    onSuccess(userName);
  }
  // Check if email is blank
  if (email.value.trim() === "") {
    onError(email, "Email cannot be blank");
  } else {
    // if isValidEmail function is false and does not match the regex pattern
    if (!isValidEmail(email.value.trim())) {
      onError(email, "Email is not valid. Please enter a valid email address.");
    } else {
      onSuccess(email);
    }
  }
  // Validate Password
  // checking if password is blank
  if (password.value.trim() === "") {
    onError(password, "Password cannot be blank");
  } else {
    onSuccess(password);
  }
  if (conPassword.value.trim() === "") {
    onError(conPassword, "Password cannot be blank");
  } else {
    // Validate password matching confirm password field
    if (password.value.trim() !== conPassword.value.trim()) {
      onError(conPassword, "Passwords must match!");
    } else onSuccess(conPassword);
  }
  // checking if phone number and job title fields are blank
  if (phone.value.trim() === "") {
    onError(phone, "Phone number cannot be blank");
  } else {
    onSuccess(phone);
  }
  if (job.value.trim() === "") {
    onError(job, "Current job title cannot be blank");
  } else {
    onSuccess(job);
  }
  //  checking if atleast one drop down selection is made
  const dropDown = document.getElementById("form-control-select").value;
  if (dropDown == "please select") {
    document.getElementById("result").innerHTML =
      "Please select atleast One Option!";
    document.getElementById("result").style.color = "crimson";
    // alert("Please select an option");
    return false;
  } else {
    return true;
  }
}

// add evnt listener to listen for click event and prevent page from reloading
// and finally calling the function validateInput
document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  validateInput();
});

// functions in case of error or success
function onSuccess(input) {
  const parent = input.parentElement;
  const messageElement = parent.querySelector("small");
  // parent looks for 'small'
  // change property value from hidden to visible and insert line 19 to innertext
  messageElement.style.visibility = "hidden";
  // remove the error class if was applied
  parent.classList.remove("error");
  // changing border color to green
  parent.classList.add("success");
}

function onError(input, message) {
  // if name is provided, hide visibility of error text
  const parent = input.parentElement;
  const messageElement = parent.querySelector("small");
  // parent looks for 'small'
  // change property value from hidden to visible and insert line 19 to innertext
  messageElement.style.visibility = "visible";
  messageElement.innerText = message;
  // remove the success class if was applied
  parent.classList.remove("success");
  // changing border color to red
  parent.classList.add("error");
}

// validate email
function isValidEmail(email) {
  // testing (email) comparing with the RegEx pattern
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Outputing all the above form field values in an object as a Hash(user)
function test() {
  let user = {
    Name: `${userName.value}`,
    Email: `${email.value}`,
    PhoneNumber: `${phone.value}`,
    CurrentJobTitle: `${job.value}`,
    HeardAboutUs: `${dropDown.value}`,
  };
  console.log("USER DETAILS: ", user);
}
