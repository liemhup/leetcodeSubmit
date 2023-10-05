const letterCombinations = (number) => {
  const map = new Map();
  map.set(2, 'abc');
  map.set(3, 'def');
  map.set(4, 'ghi');
  map.set(5, 'jkl');
  map.set(6, 'mno');
  map.set(7, 'pqrs');
  map.set(8, 'tuv');
  map.set(9, 'wxyz');
};

letterCombinations(10);
