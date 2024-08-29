const counter = document.getElementById("counter");
const button = document.getElementById("theButton");
let count = 0;
let rn = 0;
let nr = 0;
function clicked() {
    count ++;
    rn = (Math.random()*100);
    if (rn == 50.0) {
        alert("YOU DID IT LMAO WE DIDN'T THINK IT POSSIBLE");
    };
    nr = 100 - rn;
    rn.toString();
    button.style.margin = `0 ${rn} 0 ${nr}`;
    counter.innerHTML = `You have attempted to center the div ${count} times!`;
};