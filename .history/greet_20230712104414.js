

function greet() {

}



document.addEventListener("alpine:init", () => {
    Alpine.data("greet", greet);
  });
  