

function greet() {
  return {
    name: '',
    language: 'French',
    message: '',
    notification: '',
    showNotification: false,
    greeting() {
      if (!this.validateInput()) {
        return;
      }
      if (this.language === 'English') {
        this.message = `🇬🇧 Hello ${this.name} 🇬🇧`
      } else if (this.language === 'French') {
        this.message = `🇫🇷 Bonjour ${this.name} 🇫🇷`
      } else if (this.language === 'Spanish') {
        this.message = `🇪🇸 Hola ${this.name} 🇪🇸`
      }
      this.name = ''
    },
    validateInput() {
      let regex = /^[a-zA-Z]+$/;  // Regex for letters and spaces only
      if (!this.name) {
        this.notify('Please type in a name');
        return false;
      }
      if (!regex.test(this.name)) {
        this.notify('Please don\'t use special characters');
        this.name = ''
        return false;
      }
      
      return true;
    },
    notify(msg) {
      this.notification = msg;
      this.showNotification = true;
      setTimeout(() => this.showNotification = false, 3000);
    }
  }
}



document.addEventListener("alpine:init", () => {
    Alpine.data("greet", greet);
  });
  