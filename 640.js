// Solve a given equation and return the value of 'x' in the form of a string "x=#value".
// The equation contains only '+', '-' operation, the variable 'x' and its coefficient.
// You should return "No solution" if there is no solution for the equation, or
//  "Infinite solutions" if there are infinite solutions for the equation.

// If there is exactly one solution for the equation, we ensure that the value of 'x' is an integer.

/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  let arr = equation.split("=");
  let left = arr[0].split("-" || "+");
  let right = arr[0].split("-" || "+");
  let xL = 0,
    xR = 0,
    fL = 0,
    fR = 0;
  for (let i = 0; i < left.length; i++) {
    if (left[i] == "-" || left[i] == "+") continue;
    if (left[i] == "x") {
      if (i > 0 && left[i - 1] == "-") xL--;
      else xL++;
    } else {
      if (left[i + 1] == "x") {
        xL += left[i];
        continue;
      }
      if (i > 0 && left[i - 1] == "-") fL -= left[i];
      else fL += left[i];
    }
  }
  for (let i = 0; i < right.length; i++) {
    if (right[i] == "-" || right[i] == "+") continue;
    if (right[i] == "x") {
      if (i > 0 && right[i - 1] == "-") xR--;
      else xR++;
    } else {
      if (right[i + 1] == "x") {
        xR += right[i];
        continue;
      }
      if (i > 0 && right[i - 1] == "-") fR -= right[i];
      else fR += right[i];
    }
  }
  if (xL == xR) {
    if (fR == fL) return "Infinite solutions";
    else "No solution";
  }
  let x = xL - xR;
  let f = fR - fL;
  if (f == 0) return "x=0";
  let ans = f / x;
  return "x=" + ans.toString();
};
const equation = "2x=x";
console.log(solveEquation(equation));
