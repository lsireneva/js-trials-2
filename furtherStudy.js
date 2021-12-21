'use strict';

function wordsInCommon(words1, words2) {
  // Replace this with your code
  const words1_set = new Set(words1);
  const words2_set = new Set(words2);

  let result = new Set();

  for (const word of words1_set) {
    if (words2_set.has(word)){
      result.add (word)
    }
  }
  console.log(Array.from(result));
  return Array.from(result);
}
//wordsInCommon(["apple", "berry", "cherry"],["berry", "cherry", "steve"]);

function kidsGame(names) {
  // Replace this with your code
  let output = [names.shift(0)];
  console.log(output);
  let first_letter_to_words = {};

  for (let name of names){
      console.log (name);
      let firstChar = name.charAt(0);
      console.log(firstChar);
      if (!(firstChar in first_letter_to_words))
      {
        first_letter_to_words[firstChar] = [name];
      } else{
        first_letter_to_words[firstChar].push(name);
      }
  }
  console.log (first_letter_to_words);

  while (true){
    let start_word = output[output.length-1];
    let last_letter = start_word[start_word.length-1];


    console.log("START WORD: " +start_word);
    console.log("LAST LETTER: " +last_letter);

    console.log("TEST LETTER: "+ first_letter_to_words[last_letter]);
    if (first_letter_to_words[last_letter]==0 || first_letter_to_words[last_letter] ==undefined){
      break;
    }
    const word = first_letter_to_words[last_letter].shift(0);

    output.push(word);
    
  }

  console.log(output);
  return output;

}
kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]);