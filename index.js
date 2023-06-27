/*  scripts come after where they're used    
    this is organized into sections, at least until I can get
    modules working without throwing cross site scripting errors ¯\_(ツ)_/¯    
    sections are:
        - variables
        - objects/classes
        - functions
        - 'main' part where code is run
*/
//TODO refactor into multiple files with imports and exports

// VARIABLES
const CUR_DATE = new Date();
const BIRTH_DATE = new Date(99,10,6);

// OBJECTS
// TODO refactor this mess, probably dont need it
class Position {
    constructor(top, bottom, left, right) {
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
}

// FUNCTIONS
const findAge = ((currentdate, birthDate) => {
    var diffTime = Math.abs(currentdate - birthDate);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 365);
});

const changeText = (thingToChange, textToChange) => {
    document.getElementById(thingToChange).innerHTML = textToChange;
}

const fadeIn = (async element => {
    var opacity = Number(window.getComputedStyle(element).getPropertyValue('opacity'));

    for(let i = .1; i < 1; i += .1){
        element.style.opacity = i;
        //this is basically sleep() and allows for proper timing on the fade in
        await new Promise(r => setTimeout(r, 75));
    }
});
 
const slideUp = (async (element, bUseBorder) => {
    var initalPosition = element.getBoundingClientRect();

    for (let i = 0; i <= 100; i++){
        element.style.top = `${(initalPosition.top + 20) - i/2}px`; 
        element.style.backgroundColor = `rgba(255, 255, 255, ${(i/300)})`;
        if (bUseBorder)
            element.style.borderColor = `rgba(0, 0, 0, ${(i/200)})`;

        if (i >= 75) //this allows me to slow the fade in as it gets closer to the finish making it appear smoother
            await new Promise(r => setTimeout(r, 10));
        else
            await new Promise(r => setTimeout(r, 1));
    }
});

// MAIN
const ageSpan = document.getElementById('ageSpan');
ageSpan.innerHTML = `${findAge(CUR_DATE, BIRTH_DATE)} year old `;

const aboutMe = document.getElementById('aboutMe');
const bodyParagraphs = document.getElementById('bodyParagraphs');
fadeIn(document.body);
fadeIn(bodyParagraphs);

slideUp(bodyParagraphs, true);