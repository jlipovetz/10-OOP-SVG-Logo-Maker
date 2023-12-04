



function generateCircle(data) {
  {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${data.shape} cx="150" cy="100" r="80" fill="${data.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
  </svg>
  `;
  }
}

function generateTriangle(data) {
  {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" />
    <text x="150" y="125" font-size="40" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
  </svg>
  `;
  }
}

function generateSquare(data) {
  {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" rx="0" ry="0" width="200" height="200" fill="${data.shapeColor}" />
    <text x="150" y="125" font-size="40" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
  </svg>
  `;
  }

}

module.exports = {generateCircle, generateTriangle, generateSquare}