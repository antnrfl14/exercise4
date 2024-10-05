const FindIntersection = (strArr) => { 
    const firstArr = strArr[0].split(',').map(Number);
    const secondArr = strArr[1].split(',').map(Number);

    const newFirstArr = new Set(firstArr);
    const newSecondArr = new Set(secondArr);

    const duplicate = [...newFirstArr].filter(n => newSecondArr.has(n));
    return duplicate.length > 0 ? duplicate.join(',') : "false";
}

const input3 = ["1,3,4,7,13","1,2,4,13,15"];
const input4 = ["1,3,9,10,17,18","1,4,9,10"];

console.log("\nInput: " + input3);
console.log("Output: " +  FindIntersection(input3.sort()));
console.log("Input: " + input4);
console.log("Output: " +  FindIntersection(input4.sort()));