// Cho một dãy số nhị phân, tìm số cách có thể chọn 3 ký tự ngẫu nhiên sao cho hai ký tự cạnh nhau không trùng nhau

var numberOfWays = function (s) {
  let res = 0;
  const oneCount = Array(0);
  const zeroCount = Array(0);
  if (s[0] === '0') {
    zeroCount[0] = 1;
    oneCount[0] = 0;
  } else {
    zeroCount[0] = 0;
    oneCount[0] = 1;
  }
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '0') {
      zeroCount[i] = zeroCount[i - 1] + 1;
      oneCount[i] = oneCount[i - 1];
    } else {
      zeroCount[i] = zeroCount[i - 1];
      oneCount[i] = oneCount[i - 1] + 1;
    }
  }
  const ones = oneCount.at(-1) || 0;
  const zeros = zeroCount.at(-1) || 0;
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '0') res += oneCount[i] * (ones - oneCount[i]);
    else res += zeroCount[i] * (zeros - zeroCount[i]);
  }
  return res;
};

console.log(numberOfWays('010101'));
