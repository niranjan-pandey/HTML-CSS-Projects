const container = document.querySelector(".container");
const percentage = document.querySelector("#percent");

let currentPercentage = 1;

let countInterval = setInterval(() => {

     container.classList.add("active");
     currentPercentage++;

     percentage.innerHTML = `${currentPercentage}%`;

     if(currentPercentage == 100) {
          container.classList.remove("active");
          clearInterval(countInterval);
     }
}, 100)