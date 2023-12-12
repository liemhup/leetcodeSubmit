// There are n children standing in a line.Each child is assigned a
// rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to
// distribute the candies to the children.

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  //WRONG APPROCH
  // let candies = 0;
  // let candy;
  // let firstRating;
  // const helper = (array) => {
  //   if (array.length === 1) {
  //     candies = firstRating >= array[0] ? 1 + candies : 2 + candies;
  //     return;
  //   }
  //   if (array.length === 2) {
  //     candies += array[0] === array[1] ? 2 : 3;
  //     return candies;
  //   }
  //   const minValue = Math.min(...ratings);
  //   firstRating = minValue;
  //   const minIndex = ratings.lastIndexOf(minValue);
  //   candies += 1;
  //   candy = 1;
  //   for (i = minIndex; i < array.length - 1; i++) {
  //     if (array[i] < array[i + 1]) {
  //       candy += 1;
  //       candies += candy;
  //     } else {
  //       candy = 1;
  //       candies += candy;
  //     }
  //   }
  //   if (minIndex !== 0) {
  //     array.splice(minIndex);
  //     helper(array);
  //   }
  // };
  // helper(ratings);
  // return candies;
  const candies = new Array(ratings.length).fill(1);
  for (i = 0; i < ratings.length - 1; i++) {
    if (ratings[i] < ratings[i + 1] && candies[i] >= candies[i + 1]) {
      candies[i + 1] = candies[i] + 1;
    }
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1;
    }
  }
  for (i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] < ratings[i + 1] && candies[i] >= candies[i + 1]) {
      candies[i + 1] = candies[i] + 1;
    }
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1;
    }
  }

  // console.log(candies);
  return candies.reduce((a, b) => a + b);
};

const rating = [1, 0, 2, 1, 0];

const candyOutput = candy(rating);
console.log(candyOutput);
