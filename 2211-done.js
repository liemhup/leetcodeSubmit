// 2211. Count Collisions on a Road

// There are n cars on an infinitely long road. The cars are numbered from 0 to n - 1
// from left to right and each car is present at a unique point.

// You are given a 0-indexed string directions of length n. directions[i] can be either 'L', 'R',
// or 'S' denoting whether the ith car is moving towards the left, towards the right, or staying at its current point respectively.
// Each moving car has the same speed.

// The number of collisions can be calculated as follows:

// When two cars moving in opposite directions collide with each other, the number of collisions increases by 2.
// When a moving car collides with a stationary car, the number of collisions increases by 1.
// After a collision, the cars involved can no longer move and will stay at the point where they collided.
// Other than that, cars cannot change their state or direction of motion.

// Return the total number of collisions that will happen on the road.

/**
 * @param {string} directions
 * @return {number}
 */
// TLE
var countCollisions = function (directions) {
  let afterCols = directions.split("");
  let cols = 0;
  const isAllStay = (arr) => {
    return arr.every((a) => a === "S");
  };
  let i = 0;
  while (afterCols[i] == "L") {
    afterCols.shift();
  }
  let j = afterCols.length - 1;
  while (afterCols[j] == "R") {
    afterCols.pop();
    j--;
  }
  console.log(afterCols);
  while (!isAllStay(afterCols)) {
    for (let i = 0; i < afterCols.length; i++) {
      if (afterCols[i] == "L") {
        if (i > 0 && afterCols[i - 1] == "S") {
          afterCols[i] = "S";
          cols += 1;
        }
      } else if (afterCols[i] == "R") {
        if (i < afterCols.length - 1 && afterCols[i + 1] == "L") {
          cols += 2;
          afterCols[i] = "S";
          afterCols[i + 1] = "S";
        } else if (afterCols[i + 1] == "S") {
          afterCols[i] = "S";
          cols += 1;
        }
      }
    }
  }
  return cols;
};

let countCollisions1 = (directions) => {
  let afterCols = directions.split("");
  let i = 0;
  while (afterCols[i] == "L") {
    afterCols.shift();
  }
  i = afterCols.length - 1;
  while (afterCols[i] == "R") {
    afterCols.pop();
    i--;
  }
  let cols = 0;
  for (let i = 0; i < afterCols.length; i++) {
    if (afterCols[i] == "R" || afterCols[i] == "L") cols++;
  }
  return cols;
};

/**
 * @param {string} directions
 * @return {number}
 */

// the best
var countCollisions2 = function (directions) {
  // iterate over array

  // track number of cars going left as you go

  // when you encounter a car going right -> update count
  // when you encounter a car standing still -> update count

  let solution = 0;
  let goingRight = 0;
  let standingStill = 0;

  for (let index = 0; index < directions.length; index++) {
    if (directions[index] === "R") {
      goingRight++;
    } else if (directions[index] === "L") {
      if (goingRight > 0) {
        solution += goingRight + 1;
        goingRight = 0;
        standingStill++;
      } else if (standingStill > 0) {
        solution++;
        standingStill++;
      }
    } else {
      if (goingRight > 0) {
        solution += goingRight;
        goingRight = 0;
      }

      standingStill++;
    }
  }

  return solution;
};

let direction = "LLLRRLRLRLRLRLRLRLRLRRLL";
console.log(countCollisions(direction));
console.log(countCollisions1(direction));
