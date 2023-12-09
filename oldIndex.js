const inquirer = require('inquirer');
const fs = require('fs')
const {generateCircle, generateTriangle, generateSquare} = require('./lib/shapes')
const Circle = require('./lib/shapes')
const textColors = ["white", "black"]
const shapeColors = ["blue", "red", "green"]
const shapes = ["triangle", "circle", "square"]



function newLogo(){
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
    shapeContent = new Circle;
    else if (data.shape === "triangle")
    shapeContent = generateTriangle(data)
    else if (data.shape === "square")
    shapeContent = generateSquare(data)

    fs.writeFile('shape.svg', shapeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README!')) 

    

  })
}

newLogo()