const Disemvowel = (str) => {
    const vowels = "aeiouAEIOU";
    let result = "";
 
     for(let char of str){
        if(!vowels.includes(char)){
            result += char;
      }
    }
     return result;
 };
 
 const input9 = "This website is for losers LOL!";
 console.log("\nInput: " + input9);
 console.log("Output: " + Disemvowel(input9));
 