// There are n gas stations along a circular route,
// where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs
// cost[i] of gas to travel from the ith station to its
// next(i + 1)th station.You begin the journey with an empty
// tank at one of the gas stations.

// Given two integer arrays gas and cost, return the
//  starting gas station's index if you can travel around
//  the circuit once in the clockwise direction, otherwise return -1.
//  If there exists a solution, it is guaranteed to be unique
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// Beat 5% =))
var canCompleteCircuit = function (gas, cost) {
  //start index
  const length = gas.length;
  let start = [];
  for (i = 0; i < gas.length; i++) {
    if (gas[i] >= cost[i]) {
      start.push(i);
    }
  }
  for (i = 0; i < start.length; i++) {
    let nextGas = (start[i] + 1) % length;
    let remainGas = gas[start[i]];
    let passedGasStation = 0;
    while (passedGasStation < length) {
      remainGas = remainGas - cost[(nextGas - 1 + length) % length];
      if (remainGas < 0) break;
      remainGas += gas[nextGas];
      nextGas = (nextGas + 1) % length;
      passedGasStation++;
    }
    if (passedGasStation === length) return start[i];
  }
  return -1;
};

//////////////////////////////////////////
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuitII = (gas, cost) => {};

gas = [5, 1, 2, 3, 4];
cost = [4, 4, 1, 5, 1];

const canWe = canCompleteCircuit(gas, cost);

console.log(canWe);
