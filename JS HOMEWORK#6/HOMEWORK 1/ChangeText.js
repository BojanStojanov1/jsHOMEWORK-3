let Header = document.getElementById ("myTitle");
Header.innerText = "Realy Cool page!";

let firstParagraph = document.querySelector('.paragraph')

firstParagraph.style.color = "red"

firstParagraph.innerText = "This exercise is easy!"

firstParagraph.style.border = "1px, solid, blue"



let secondParagraph = document.querySelector('p.paragraph.second')
secondParagraph.innerText="We are learning";


let header3 = document.getElementsByTagName("h3")[0];
header3.innerText = "we are learning so fast";
header3.style.color="blue"


let header1 = header3.previousElementSibling;
header1.innerText = "i hope we can get more knowage";
header1.style.border = "2px, solid, green"




