const radius = [2, 4, 6, 8];

function calculateArea(radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
}
console.log(calculateArea(radius));

function calculateCircumference(radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
}
console.log(calculateCircumference(radius));

function calculateDiameter(radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
}
console.log(calculateDiameter(radius));

//------------------------------------------------

const radius1 = [2, 4, 6, 8];

const area = function(radius) {
  return Math.PI * radius * radius;
}

const circumference = function(radius) {
  return  2 * Math.PI * radius;
}

const diameter = function(radius) {
  return 2 * radius;
}

const calculate = function (radius, logic) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
    return output;
  }
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));