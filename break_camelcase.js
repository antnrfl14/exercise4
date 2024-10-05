const breakCamelCase = (str) => {return str.replace(/([a-z])([A-Z])/g, '$1 $2');};

const input7 = "camelCasing";
const input8 = "identifier";

console.log("\nInput: " + input7);
console.log("Output: " + breakCamelCase(input7));
console.log("Input: " + input8);
console.log("Output: " + breakCamelCase(input8));