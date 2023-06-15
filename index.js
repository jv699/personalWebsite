// scripts come after where they're used    

const changeText = (thingToChange, textToChange) => {
    document.getElementById(thingToChange).innerHTML = textToChange;
}
 
const changeColor = (elementId, color) => {
    document.getElementById(elementId).style.color = color;
}

const button = document.getElementById('hornyButton');
const headings = document.getElementById('headings');
// headings.style.color = 'red';

button.onclick = () => changeColor(headings.id, 'red');
