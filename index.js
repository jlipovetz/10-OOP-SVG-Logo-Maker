const inquirer = require('inquirer');
const fs = require('fs')
const { Circle, Triangle, Square } = require('./lib/shapes')

const textColors = ["white", "black"]
const shapeColors = ["blue", "red", "green"]
const shapes = ["triangle", "circle", "square"]

function newLogo() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Please enter up to three characters',
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'Please enter the text color',
      choices: textColors
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Please enter the shape',
      choices: shapes
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Please enter the shape color',
      choices: shapeColors
    },
  ]).then((data) => {
    if (data.shape === "circle")
      return fs.writeFile('shape.svg', generateCircle(data), (err) =>
        err ? console.log(err) : console.log('Successfully created Logo!'))
    if (data.shape === "square")
    fs.writeFile('shape.svg', generateSquare(data), (err) =>
      err ? console.log(err) : console.log('Successfully created Logo!'))
    if (data.shape === "triangle")
    fs.writeFile('shape.svg', generateTriangle(data), (err) =>
      err ? console.log(err) : console.log('Successfully created Logo!'))
  })
}

function generateCircle(data) {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <${data.shape} cx="150" cy="100" r="80" fill="${data.shapeColor}" />
  <text x="150" y="115" font-size="50" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
</svg>`
}

function generateSquare(data) {
  data.shape = "rect"
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <${data.shape} x="20" y="20" width="200" height="200" fill="${data.shapeColor}" />
  <text x="120" y="120" font-size="50" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
</svg>`
}

function generateTriangle(data) {
  data.shape = "polygon"
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <${data.shape} points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" />
  <text x="150" y="140" font-size="50" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
</svg>`
}






newLogo()