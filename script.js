let count = 0;
let rn = 0;
let nr = 0;
function clicked() {
    count ++;
    rn = (Math.random()*100);
    if (rn == 50.0) {
        alert("YOU DID IT LMAO WE DIDN'T THINK IT POSSIBLE");
    };
    nr = String(100 - rn);
    rn.toString();
    document.getElementById('trolled').hidden = false;
    document.getElementById('theButton').style.position = 'absolute';
    document.getElementById('theButton').style.left = `${rn}%`;
    document.getElementById('theButton').style.right = `${nr}%`;
    document.getElementById('counter').innerHTML = `You have attempted to center the div ${count} times!`;
};