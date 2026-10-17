let questions = [

    {
        question: "SMIT STAND........?",
        Option: [
            "Saylani mass it training",
            "Saylani It training",
            "Smit",
            "Saylani"
        ],
        answer: "Saylani mass it training"
    },

    {
        question: "HTML",
        Option: [
            "PL",
            "ML",
            "SL",
            "ALL"
        ],
        answer: "ML"
    },

    {
        question: "JS",
        Option: [
            "PL",
            "ML",
            "SL",
            "ALL"
        ],
        answer: "SL"
    },

    {
        question: "JS",
        Option: [
            "PL",
            "ML",
            "SL",
            "ALL"
        ],
        answer: "SL"
    },

    {
        question: "JS",
        Option: [
            "PL",
            "ML",
            "SL",
            "ALL"
        ],
        answer: "SL"
    }

];


// ================= VARIABLES =================

let question = document.getElementById("question");

let qno = document.getElementById("qno");

let timer = document.getElementById("timer");

let options = document.querySelectorAll("input");

let label = document.querySelectorAll("label");

let button = document.querySelector("button");

let index = 0;

let score = 0;


// ================= TIMER =================

// 2 Minutes = 120 Seconds

let time = 120;

let startInterval;


// ================= START TIMER =================

function startTimer() {

    startInterval = setInterval(function () {

        let min = Math.floor(time / 60);

        let second = time % 60;


        // Show timer

        timer.innerText =
            `Time: ${String(min).padStart(2, "0")}:${String(second).padStart(2, "0")}`;


        // Time finished

        if (time === 0) {

            clearInterval(startInterval);

            autoSubmit();

            return;
        }


        time--;

    }, 1000);

}


// ================= AUTO SUBMIT =================

function autoSubmit() {

    let finalScore =
        (score / questions.length) * 100;


    alert("Time Over! Quiz Submitted.");


    document.getElementById("container").innerHTML = `

        <div class="result-box">

            <h1>⏰ Time Over!</h1>

            <h2>Quiz Submitted</h2>

            <h2>
                Score: ${score} / ${questions.length}
            </h2>

            <h2>
                ${finalScore}% out of 100
            </h2>

            <button onclick="window.location.reload()">
                Again Test
            </button>

        </div>

    `;

}


// ================= MANUAL SUBMIT =================

function submitQuiz() {

    clearInterval(startInterval);


    let finalScore =
        (score / questions.length) * 100;


    document.getElementById("container").innerHTML = `

        <div class="result-box">

            <h1>🎉 Quiz Submit</h1>

            <h2>
                Score: ${score} / ${questions.length}
            </h2>

            <h2>
                ${finalScore}% out of 100
            </h2>

            <button onclick="window.location.reload()">
                Again Test
            </button>

        </div>

    `;

}


// ================= BUTTON =================

button.addEventListener("click", function () {

    nextQuestion();

});


// ================= SHOW QUESTION =================

function showQuestion() {

    question.innerText =
        questions[index].question;


    qno.innerText =
        "Question " +
        (index + 1) +
        " of " +
        questions.length;


    // Options value

    options[0].value =
        questions[index].Option[0];

    options[1].value =
        questions[index].Option[1];

    options[2].value =
        questions[index].Option[2];

    options[3].value =
        questions[index].Option[3];


    // Labels

    label[0].innerText =
        questions[index].Option[0];

    label[1].innerText =
        questions[index].Option[1];

    label[2].innerText =
        questions[index].Option[2];

    label[3].innerText =
        questions[index].Option[3];


    // Uncheck all options

    options[0].checked = false;

    options[1].checked = false;

    options[2].checked = false;

    options[3].checked = false;


    // Button text

    if (index === questions.length - 1) {

        button.innerText = "Submit";

    }

    else {

        button.innerText = "Next →";

    }

}


// ================= CHECK ANSWER =================

function CheckAnswer() {

    let selectedOption;


    if (options[0].checked === true) {

        selectedOption = options[0].value;

    }

    else if (options[1].checked === true) {

        selectedOption = options[1].value;

    }

    else if (options[2].checked === true) {

        selectedOption = options[2].value;

    }

    else if (options[3].checked === true) {

        selectedOption = options[3].value;

    }


    // No option selected

    if (selectedOption === undefined) {

        alert("Bhai select one option");

        return false;

    }


    // Check answer

    if (
        selectedOption ===
        questions[index].answer
    ) {

        score++;

    }


    return true;

}


// ================= NEXT QUESTION =================

function nextQuestion() {

    let status = CheckAnswer();


    if (status === true) {

        index++;


        // All questions completed

        if (index === questions.length) {

            submitQuiz();

        }

        else {

            showQuestion();

        }

    }

}


// ================= START QUIZ =================

showQuestion();

startTimer();
