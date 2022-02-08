// level {3}
// Normalize the following object to an array of objects.

const normalizeObject = (input) => {
  const output = [];
  Object.keys(input).forEach((key) =>
    input[key].forEach((record) => output.push({ ...record, reaction: key }))
  );
};
