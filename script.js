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

function nameValidate() {
  const name = document.getElementById("name-input").value;
  if (name.length == 0) {
    nameError.innerHTML = "name is required";
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
  }
}
