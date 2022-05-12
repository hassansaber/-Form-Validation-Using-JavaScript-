const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");
console.log(nameError);
console.log(phoneError);
console.log(emailError);
console.log(messageError);
console.log(submitError);
// ---------------------
function nameValidate() {
  const name = document.getElementById("name-input").value;
  if (name.length == 0) {
    nameError.innerHTML = "name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
// -------------------
function phoneValidate() {
  const phone = document.getElementById("phone-input").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "phone is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "phone number should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "only digits";
    return false;
  }

  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
// ------------------

function emailValidate() {
  const email = document.getElementById("email-input").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email invalid";
    return false;
  }

  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
//--------------------------------
function messageValidate() {
  const message = document.getElementById("message-input").value;
  const required = 30;
  const left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = left + "more charactors required";
    return false;
  }
  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
// ------------------------------
function formValidate() {
  if (
    !messageValidate() ||
    !emailValidate() ||
    !phoneValidate() ||
    !nameValidate()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
