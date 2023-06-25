// scripts come after where they're used    
const CUR_DATE = new Date();
const BIRTH_DATE = new Date(99,10,6);

const findAge = ((currentdate, birthDate) => {
    var diffTime = Math.abs(currentdate - birthDate);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 365);
});

const changeText = (thingToChange, textToChange) => {
    document.getElementById(thingToChange).innerHTML = textToChange;
}

const showElement = (element) => {
    setInterval(fadeIn(element), 200);
};

const fadeIn = (async element => {
    var opacity = Number(window.getComputedStyle(element).getPropertyValue('opacity'));
    console.log(opacity);

    for(let i = .1; i < 1; i += .1){
        element.style.opacity = i;
        //this is basically sleep() and allows for proper timing on the fade in
        await new Promise(r => setTimeout(r, 75));
    }
});
 
const ageSpan = document.getElementById('ageSpan');
ageSpan.innerHTML = `${findAge(CUR_DATE, BIRTH_DATE)} year old `;

const aboutMe = document.getElementById('aboutMe');
// showElement(aboutMe);
fadeIn(aboutMe);