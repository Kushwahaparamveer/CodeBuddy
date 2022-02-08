// level {3}
// 1. Write a recursive function that transforms all the strings to uppercase.
const convert = (input) => {
  Object.keys(input).forEach(
    (key) =>
      (input[key] =
        typeof input[key] === "string"
          ? input[key].toUpperCase()
          : convert(input[key]))
  );
  return input;
};
inputObject = convert(inputObject);

// 2. Write a function that takes a string with key value pairs sum the value of all unique properties and return an object from it.

var obj = [
  { name: "A", value: 2 },
  { name: "A", value: 5 },
  { name: "B", value: 3 },
  { name: "B", value: 6 },
  { name: "C", value: 4 },
];

var sum = {};

obj.forEach(function (d) {
  if (sum.hasOwnProperty(d.name)) {
    sum[d.name] = sum[d.name] + d.value;
  } else {
    sum[d.name] = d.value;
  }
});

var obj2 = [];

for (var prop in sum) {
  obj2.push({ name: prop, value: sum[prop] });
}

console.log(obj2);
