    //Zadacha 1

    for(i=0; i<1000; i++);
    console.log(i)
    


    //Zadacha 2
    let inputNumber = 4;
    let total = 1;
    
    for (i = 0; i < inputNumber; i++){
        total = total * (inputNumber - i);
    }
    
    console.log(inputNumber + '! = ' + total);
    


    //Zadacha 3
    let age = 1
    let fathersMoney = 1000
    let totalGiftedMoney = 0
    
    const mothersMoney = 1000
    const bikesCost = 60000
    
    while (totalGiftedMoney < bikesCost){
        if(age <= 10) {
            totalGiftedMoney = totalGiftedMoney + mothersMoney + fathersMoney;
        }
        else {
            totalGiftedMoney = totalGiftedMoney + mothersMoney + fathersMoney + (age-10) * 1200
        }
        age++
    }
    
    console.log(age-1);
    
    

    //Zadacha 4
    function isPalindrome(word) {
      word = word.toLowerCase(); 
      let left = 0; 
      let right = word.length - 1; 
    
      while (left < right) {
        if (word[left]!== word[right]) {
          return `Слово ${word} не является палиндромом`; 
        }
        left++; 
        right--; 
      }
    
      return `Слово ${word} является палиндромом`; 
    }
    
    console.log(isPalindrome('Шалаgш'))
    
    


    //Zadacha 5

    const targetNumber = Math.floor(Math.random() * 101);

    let guessed = false;
    
    while (!guessed) {
        
        const userInput = prompt("Угадайте число от 0 до 100:");
        
     
        const userGuess = parseInt(userInput, 10);
    
        if (userGuess === targetNumber) {
            alert("Вы выиграли! Вы угадали число.");
            guessed = true;
        } else if (Math.abs(userGuess - targetNumber) <= 5) {
            alert("Горячо!");
        } else if (Math.abs(userGuess - targetNumber) <= 10) {
            alert("Тепло!");
        } else {
            alert("Холодно!");
        }
    }