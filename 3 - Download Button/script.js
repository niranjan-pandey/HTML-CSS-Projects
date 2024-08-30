let button = document.querySelector(".button");
let icon = document.querySelector("i");
let buttonText = document.querySelector(".button-text");

button.addEventListener("click", () => {
     button.classList.add("active");

     setTimeout(() => {
          button.classList.remove("active");
          icon.classList.replace("bx-cloud-upload", "bxs-check-circle");
          buttonText.innerHTML = "Completed";
     }, 5000)
})