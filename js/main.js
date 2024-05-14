function generateRandomStringFromArray(length, charArray) {
    const remainingChars = [...charArray];
    let result = "";
    for (let i = 0; i < length; i++) {
      if (remainingChars.length === 0) break;
      const randomIndex = Math.floor(Math.random() * remainingChars.length);
      result += remainingChars[randomIndex];
      remainingChars.splice(randomIndex, 1);
    }
  
    return result;
  }

  function displayRandomStringOnButtonClick(length, charArray, buttonId, resultId) {
    const button = document.getElementById(buttonId);
    const resultElement = document.getElementById(resultId);
  
    button.onclick = function () {
      const randomString = generateRandomStringFromArray(length, charArray);
      resultElement.innerHTML = randomString;
    };
  }

  const characters = [
    "“Be yourself; everyone else is already taken.”―Oscar Wilde",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe",
    "“So many books, so little time.”― Frank Zappa",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein",
    "“A room without books is like a body without a soul.”― Marcus Tullius Cicero",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch",
    "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”― William W. Purkey",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss",
    "“You only live once, but if you do it right, once is enough.”― Mae West"
  ];
  
  displayRandomStringOnButtonClick(1, characters, "button", "result");
  