const rowCount = 10000 // Set the size of the table
export default new Array(rowCount)
  .fill(true)
  .map((_, index) => ({ id: index + 1 }));
