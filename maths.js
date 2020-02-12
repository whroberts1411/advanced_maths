
var answer;
var score = 0;
var backgroundImages = [];


function nextQuestion() {

    // Add 1 to the generated random number, to avoid having
    // zero as one (or both) of the numerical terms.
    const n1 = Math.floor(Math.random() * 4) + 1;
    document.getElementById('n1').innerHTML = n1;

    const n2 = Math.floor(Math.random() * 5) + 1;
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer() {

    const prediction = predictImage();
    console.log(`Answer: ${answer}, prediction: ${prediction}`);

    if (prediction == answer) {
        score++;
        console.log(`Correct! Score: ${score}`);
        if (score <= 6) {
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        } else {
            var tmp = 'Well done! Your maths garden is in full bloom! Want to start again?';
            var r = confirm(tmp);
            if (r != true) {
                return false;
            }
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
        }
    } else {
        if (score != 0) { score--; }
        console.log(`Wrong. Score ${score}`);

        alert('Oops! Check your calculations and try writing the number neater next time!');
        setTimeout(function () {
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
        }, 1000);
    }
    return true;
}