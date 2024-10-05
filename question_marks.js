const QuestionsMarks = (str) => {
    let questionMarkCounter = 0;    
    for(let i =0; i < str.length; i++){
         if(str[i] === "?"){
            questionMarkCounter++;
         }
     }
     return questionMarkCounter >= 3;
 }
 
 const input5 = "aa6?9";
 const input6 = "acc?7??sss?3rr1??????5";
 
 console.log("\nInput: " + input5);
 console.log("Output: " + QuestionsMarks(input5)); 
 console.log("Input: " + input6);
 console.log("Output: " + QuestionsMarks(input6));