const zigzag = (str, numRows) => {
  if (numRows === 1) return str;
  const rows = Array.from({ length: numRows }, (e, i) => '');
  for (i = 0; i < str.length; i++) {
    const mod = i % (2 * numRows - 2);
    if (mod < numRows) {
      rows[mod] += str[i];
    } else rows[2 * numRows - 2 - mod] += str[i];
  }
  return rows.join('');
};

console.log(zigzag('liemhup', 4));
