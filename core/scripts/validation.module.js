export class Validation {
  constructor(formId, inputs, errors) {
    this.form = document.getElementById(formId);
    this.inputs = inputs.map((id) => document.getElementById(id));
    this.errors = errors.map((id) => document.getElementById(id));

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validateAll();
    });

    this.inputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        this.validateField(index);
      });
    });
  }

  validateAll() {
    this.inputs.forEach((_, index) => this.validateField(index));
  }

  validateField(index) {
    const validationFunctions = [
      this.validateName,
      this.validateEmail,
      this.validateSubject,
      this.validateMessage,
    ];

    validationFunctions[index](this.inputs[index].value)
      ? this.errors[index].setAttribute("hidden", "true")
      : this.errors[index].removeAttribute("hidden");
  }

  validateName(name) {
    return /^[a-zA-Z ]+$/.test(name);
  }

  validateEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  validateSubject(subject) {
    return /^[\w ]{6,}$/.test(subject);
  }

  validateMessage(message) {
    return /^[\w ]{10,}$/.test(message);
  }
}
