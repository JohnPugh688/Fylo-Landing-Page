const forms = document.querySelectorAll("form");

for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", function (e) {
    e.preventDefault();
    this.classList.add("validated");
    if (!this.checkValidity()) {
      this.querySelectorAll(":invalid")[0].focus();
      return;
    }
    // Submit the form
  });
}
