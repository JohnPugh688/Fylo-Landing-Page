const forms = document.querySelectorAll("form");

for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", function (e) {
    e.preventDefault();
    this.classList.add("validated");
    if (!this.checkValidity()) {
      this.querySelectorAll(":invalid")[0].focus();
      return;
    }

    // Show success message popup
    const popup = document.createElement("div");
    popup.classList.add(
      "fixed",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "flex",
      "items-center",
      "justify-center",
      "bg-black",
      "bg-opacity-75",
      "z-50",
    );

    const message = document.createElement("div");
    message.classList.add(
      "p-4",
      "bg-white",
      "rounded",
      "shadow-lg",
      "text-center",
    );
    message.innerHTML =
      "<p class='text-xl font-open-sans font-bold'>Thanks for signing up!<br>Your feedback is always welcome.</p><button class='mt-6 px-6 py-1 bg-blue-500 text-white rounded hover:bg-blue-600'>Close</button>";

    popup.appendChild(message);
    document.body.appendChild(popup);

    // Close the popup when the close button or Enter key is clicked
    const closePopup = () => {
      popup.remove();
      document.removeEventListener("keydown", handleKeydown);
    };

    const handleKeydown = (event) => {
      if (event.key === "Enter") {
        closePopup();
      }
    };

    message.querySelector("button").addEventListener("click", closePopup);

    // Focus on the close button to ensure it can receive the "Enter" key event
    message.querySelector("button").focus();

    // Add keydown event listener to the document
    document.addEventListener("keydown", handleKeydown);
  });
}
