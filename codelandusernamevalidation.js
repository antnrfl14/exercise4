const CodelandUsernameValidation = (str) => {
    return (str.length >= 4 && str.length <= 25)
     && (/^[a-zA-Z]/.test(str)) && /^[a-zA-Z0-9_]+$/.test(str)
     && str[str.length-1] !== "_"
    }
    
const input1 = "aa_";
const input2 = "u__hello_world123"
console.log(`Input: ` + input1);
console.log(`Output: ` + CodelandUsernameValidation(input1));
console.log(`Input: ` + input2);
console.log(`Output: ` + CodelandUsernameValidation(input2));


