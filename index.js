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
 
const changeColor = (elementId, color) => {
    document.getElementById(elementId).style.color = color;
}

const button = document.getElementById('hornyButton');
const headings = document.getElementById('headings');

const ageSpan = document.getElementById('ageSpan');
ageSpan.innerHTML = `${findAge(CUR_DATE, BIRTH_DATE)} year old `;

button.onclick = () => changeColor(headings.id, 'red');
