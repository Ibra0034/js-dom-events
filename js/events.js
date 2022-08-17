console.log('this is seperate js events')

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}