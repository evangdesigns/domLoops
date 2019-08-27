// Loop through the ranbow and print out the colors to the page

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const emo = ['black', 'grey', 'black'];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

const printRainbow = (colorArr) => {
    for (let i = 0; i < colorArr.length; i++) {
        const color = `<p>${colorArr[i]}</p>`
        printToDom(color, 'rainbow')
    }    
}

printRainbow(colors);
printRainbow(emo);


/// Print Instructors out.

const instructors = [
    {first: "Zoe", last: "Ames"},
    {first: "Callan", last: "Morrison"},
    {first: "Greg", last: "Korte"},
    {first: "Michael", last: "Clarke"},
  ];


const printNames = (namesArray) => {
    for (let i = 0; i < namesArray.length; i++) {
        const person = namesArray[i];
        const element = `<p>${person.first} ${person.last}</p>`
        printToDom(element, 'teach');
    }    
}

printNames(instructors);