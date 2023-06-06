function findLongestWord(str) {
    
    let words = str.split(" ");
  
    let longestWord = "";
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  
  document.writeln(findLongestWord('Web Development In Telran'));
 