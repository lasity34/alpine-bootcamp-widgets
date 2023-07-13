function transportFee() {
    return {

    }
}




document.addEventListener("alpine:init", () => {
    Alpine.data("transportFee", transportFee);
  });