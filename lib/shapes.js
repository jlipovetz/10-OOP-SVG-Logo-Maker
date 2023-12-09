class Circle {
  constructor() {
    this.color = ""
  }
  setColor(color) {
    this.color = newColor
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
  }
}

class Triangle {
  constructor() {
    this.color = ""
  }
  setColor(newColor) {
    this.color = newColor
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
  }
}

class Square {
  constructor() {
    this.color = ""
  }
  setColor(newColor) {
    this.color = newColor
  }
  render() {
    return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`
  }
}

module.exports = {Circle, Triangle, Square}