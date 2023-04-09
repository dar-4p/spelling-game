const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const  inputField = document.querySelector("input");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

let correctWord, timer;
//timer doesn't work
const initTimer = maxTime => {
  timer = setInterval(() => {
    if(maxTime > 0){
      maxTime--;
      return timeText.innerText = maxTime;
    }
    clearInterval(timer);
    alert(`Times up ${correctWord.toUpperCase()} was the correct word.`);
    initGame(); // to restart game
  }, 1000);
};

const initGame = () => {
  // initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  console.log(randomObj); // gettting random obj from words

  let wordArray = randomObj.word.split("");
  console.log(wordArray); // spliting letter of random word

  for(let i = wordArray.length - 1;i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1)); // getting random number
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  console.log(wordArray, randomObj.word);
  wordText.innerHTML = wordArray.join(""); //passing shuffled word as a word text
  hintText.innerHTML = randomObj.hint;  //passing random object hint as hint text
  correctWord = randomObj.word.toLowerCase();//passing random word to correct word
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
}

initGame();

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  console.log(userWord);
  if(userWord !== correctWord) return alert(`Oops ${userWord} is not the correct word.`);
  if(!userWord) return alert(`Oops Please enter a word check.`);
  alert(`Congratulations ${userWord.toUpperCase()} is the correct word.`);
  initGame();
} 

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);


//start at 12:30