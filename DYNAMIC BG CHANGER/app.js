const inputField = document.querySelector('.colorInput');
const sectionBg = document.querySelector('.hex-sec');
const erroMsg = document.querySelector('.error-msg');

// I defined the input pattern match using regex
let patternInput = /^[a-fA-F0-9#]{7}$/

// I added a keyup event to the Input Field
inputField.addEventListener('keyup', () =>{
  if(patternInput.test(inputField.value) && inputField.value.includes('#')){
    inputField.style.outline = '4px solid green';
    let userPick = inputField.value;
    sectionBg.style.background = userPick;
    erroMsg.textContent = 'You got it'
 }

 else{
  inputField.style.outline = '4px solid red';
  erroMsg.textContent = 'Error'
 }
})




