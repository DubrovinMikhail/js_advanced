export default class Validator {
  constructor(name) {
    this.name = name
  }

  validateUsername() {
    return /^[a-z]((\d{1,3})(?!\d)|[a-z]|[-_])*[a-z]$/gmi.test(this.name)
  }
}
