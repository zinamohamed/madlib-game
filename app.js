// import functions and grab DOM elements
const boxes = document.getElementById('input-boxes')
const submitButton = document.getElementById('submit-button');
const nounOneInput = document.getElementById('noun-1-input');
const nounOne = document.getElementById('noun-1');
const adjectiveInput = document.getElementById('adjective-input');
const adjectiveOne = document.getElementById('adjective-1');
const vehicleInput = document.getElementById('vehicle-input');
const vehicleOne = document.getElementById('vehicle');
const vehicleTwo = document.getElementById('vehicle-2');
const expressionInput = document.getElementById('expression-input');
const expressionOne = document.getElementById('expression');
const nounTwoInput = document.getElementById('noun-2-input');
const nounTwo = document.getElementById('noun-2');
const nounThreeInput = document.getElementById('noun-3-input');
const nounThree = document.getElementById('noun-3');
const nounFourInput = document.getElementById('noun-4-input');
const nounFour = document.getElementById('noun-4');
const nounFiveInput = document.getElementById('noun-5-input');
const nounFive = document.getElementById('noun-5');
const song = document.getElementById('song');
// initialize state

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    var firstNoun = nounOneInput.value;
    var secondNoun = nounTwoInput.value;
    var thirdNoun = nounThreeInput.value;
    var fourthNoun = nounFourInput.value;
    var fifthNoun = nounFiveInput.value;
    var vehicle = vehicleInput.value;
    var adjective = adjectiveInput.value;
    var expression = expressionInput.value;

    nounOne.textContent = firstNoun;
    nounTwo.textContent = secondNoun;
    nounThree.textContent = thirdNoun;
    nounFour.textContent = fourthNoun;
    nounFive.textContent = fifthNoun;
    vehicleOne.textContent = vehicle;
    vehicleTwo.textContent = vehicle;
    adjectiveOne.textContent = adjective;
    expressionOne.textContent = expression;

    boxes.style.visibility = 'hidden';
    song.style.visibility = 'visible';
    



}); 