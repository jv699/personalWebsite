// This is a module, and it isn't allowed in firefox due to cross site scripting (???)

export const CUR_DATE = new Date();
export const BIRTH_DATE = new Date(99,10,6);

//object for creating element positions, for movement
export class Position {
    constructor(top, bottom, left, right) {
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
}

export const findAge = ((currentdate, birthDate) => {
    var diffTime = Math.abs(currentdate - birthDate);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 365);
});

export const changeText = (thingToChange, textToChange) => {
    document.getElementById(thingToChange).innerHTML = textToChange;
}

export const fadeIn = (async element => {
    var opacity = Number(window.getComputedStyle(element).getPropertyValue('opacity'));

    for(let i = .1; i < 1; i += .1){
        element.style.opacity = i;
        //this is basically sleep() and allows for proper timing on the fade in
        await new Promise(r => setTimeout(r, 75));
    }
});
 
export const slideUp = (async element => {
    var initalPosition = element.getBoundingClientRect();

        for (let i = 0; i <= 100; i++){
            element.style.top = `${(initalPosition.top + 20) - i/2}px`; 
            //this allows me to slow the fade in as it gets closer to the finish
            if (i >= 75)
                await new Promise(r => setTimeout(r, 10));
            else
                await new Promise(r => setTimeout(r, 1));
        }
});