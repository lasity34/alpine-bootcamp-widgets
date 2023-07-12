

function greet() {
  return {
    name: '',
    language: 'French',
    message: '',
    greeting() {
      if (this.language === 'English') {
        this.message = `🇬🇧 Hello ${this.name} 🇬🇧`
      } else if (this.language === 'French') {
        this.message = `🇫🇷 Bonjour ${this.name} 🇫🇷`
      } else if (this.language === 'Spanish') {
        this.message = `🇪🇸 Hola ${this.name} 🇪🇸`
      }
    }
  }
}



document.addEventListener("alpine:init", () => {
    Alpine.data("greet", greet);
  });
  