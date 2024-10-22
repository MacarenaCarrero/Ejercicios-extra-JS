
//primero

function prefix(word, prefix){
return word.startsWith(prefix)
}

const result = prefix("subterraneo", "sub")
console.log(result)

//segundo

function suffix (word, suffix){
    return word.endsWith(suffix)
}

const result2= suffix("dificilmente", "mente")
console.log(result2)

const result3= suffix("hombre", "ito")
console.log(result3)

//tercero

function positionLetter (word, number){
    const pLetter= word.charAt(number);
    return pLetter
}
    const result4 = positionLetter ("hola", 1)
    console.log (result4)

    //cuarto

    function unitedScript (word1, word2){
console.log(word1+"-"+word2);   
 }

 unitedScript("hola", "adios")

 //quinto

 function combinations (number1, number2, letter){
     const Combinations1 = number1 + number2+letter
     const Combinations2 = number2 + number1+letter
     const Combinations3 = letter + number2+number1
     const Combinations4 = letter + number1+number2
     const Combinations5 = number1 + letter+number2
     const Combinations6 = number2 + letter+number1
     const result6 = Combinations1 + Combinations2 + Combinations3 +Combinations4+Combinations5 +Combinations6 ;

     return result6
}

const result6 = combinations ("2","3","a")
  console.log(result6)

  //sexto

  function countLetters (word){
    let numberOfVowels= 0
    let numberOfConsonants =0 
    
    if (word.charAt(0==='a' || word.charAt(0)==='e' || word.charAt(0)==='i' ||word.charAt(0)==='o' || word.charAt(0)=== 'u')){
   numberOfVowels=numberOfVowels +1 ;
    }else{
        numberOfConsonants=numberOfConsonants +1;
    }

    console.log(word + " tiene "+numberOfVowels +" vocales y "+ numberOfConsonants+ " consonantes");
  }

  countLetters('adios')