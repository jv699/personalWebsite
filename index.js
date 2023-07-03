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


////////////////////////////
// VARIABLES AND CONSTANTS
////////////////////////////
const CUR_DATE = new Date();
const BIRTH_DATE = new Date(99,10,6);
const HOME_PAGE = 'Home';
const ABOUT_ME_PAGE = 'About Me';
const CONTACT_PAGE = 'Contact';


////////////////////////////
// OBJECTS
////////////////////////////
// TODO refactor this mess, probably dont need it
class Position {
    constructor(top, bottom, left, right) {
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
}


////////////////////////////
// FUNCTIONS
////////////////////////////
const findAge = ((currentdate, birthDate) => {
    var diffTime = Math.abs(currentdate - birthDate);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 365);
});

const changeText = (thingToChange, textToChange) => {
    document.getElementById(thingToChange).innerHTML = textToChange;
}

const fadeIn = (async element => {
    if (element != null) {
        var opacity = Number(window.getComputedStyle(element).getPropertyValue('opacity'));

        for(let i = .1; i < 1; i += .1){
            element.style.opacity = i;
            //this is basically sleep() and allows for proper timing on the fade in
            await new Promise(r => setTimeout(r, 75));
        }
    }
});
 
const slideUp = (async (element, bUseBackgroundColor, bUseBorder) => {
    if (element != null) {
        // element.style.position = 'absolute';
        var initalPosition = element.getBoundingClientRect();

        for (let i = 0; i <= 100; i++){
            element.style.top = `${(initalPosition.top)- i/2}px`; 
            if (bUseBackgroundColor)
                element.style.backgroundColor = `rgba(255, 255, 255, ${(i/300)})`;
            if (bUseBorder)
                element.style.borderColor = `rgba(0, 0, 0, ${(i/200)})`;

            if (i >= 85) //this allows me to slow the fade in as it gets closer to the finish making it appear smoother
                await new Promise(r => setTimeout(r, 10));
            else
                await new Promise(r => setTimeout(r, 1));
        }
    }
});

const setSelectedLink = (pageTitle => {
    switch (pageTitle){
        case HOME_PAGE:
            document.getElementById('homeLink').style.color = 'rgb(67, 67, 255)';
            break;
        case ABOUT_ME_PAGE: 
            document.getElementById('aboutMeLink').style.color = 'rgb(67, 67, 255)';
            break;
        case CONTACT_PAGE:
            document.getElementById('contactLink').style.color = 'rgb(67, 67, 255)';
            break;
        default:
            break;
    }
});

////////////////////////////
// MAIN
////////////////////////////
const ageSpan = document.getElementById('ageSpan');
const aboutMe = document.getElementById('aboutMe');
const bodyParagraphs = document.getElementsByClassName('bodyParagraphs');
const pageTitle = document.title;
const pageHeading = document.getElementById('pageHeading');
const footerDate = document.getElementById('footerDate');

//code block for updating my age
if (ageSpan != null)
    ageSpan.innerHTML = `${findAge(CUR_DATE, BIRTH_DATE)} year old `;

//getting elements to manipulate

setSelectedLink(pageTitle);

//performing page load animations, !!!should happen after other logic!!!
fadeIn(document.body);
//performs an animation for each element in the class '.bodyParagraphs'
for (let i = 0; i < bodyParagraphs.length; i++) {
    fadeIn(bodyParagraphs.item(i));
    slideUp(bodyParagraphs.item(i), false, false);
}

slideUp(pageHeading, false, false);

footerDate.innerHTML = `${CUR_DATE}`;