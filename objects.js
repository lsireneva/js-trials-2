'use strict';

// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  const words = phrase.split(' ');
  const count_dict = {}
  console.log(words);

  for (let word in words){
      
      if (words[word] in count_dict){
         count_dict[words[word]] +=1; 
      }  
      else{
        count_dict[words[word]] = 1;
      }
  }
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code

  let new_price = parseFloat(price);

  const melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }
  console.log(melon_prices[new_price]);

  if (!(new_price in melon_prices))
  {
    console.log("NO PRICE FOUND");
    return;
  }

  console.log("PRICE FOUND");
  return melon_prices[new_price].sort();
}

getMelonsAtPrice(3.50);