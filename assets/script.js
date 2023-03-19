
var score = 0;
var quizList = 0;
var countdown = document.querySelector("#countdown");
var timer = document.querySelector("#startQuiz");
var quizbox = document.querySelector("#quizbox");
var wrapper = document.querySelector("#wrapper");
const scoreEl = document.querySelector('#score');
const endPage = document.getElementById('end-screen')




let totalScore = 0;

var time = 60;
var holdInterval = 0;
var removal = -10;
var reward = 5;
var listMaker = document.createElement("ul");

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            time--;
            countdown.textContent =time + " Seconds Left ";

            if (time <= 0) {
                clearInterval(holdInterval);
                endScreen();
                countdown.textContent = "Game over!";
            }
        }, 1000);
    }
    render(quizList);
});

function render(quizList) {
    quizbox.innerHTML = "";
    listMaker.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[quizList].title;
        var userChoices = questions[quizList].choices;
        quizbox.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        quizbox.appendChild(listMaker);
        listMaker.appendChild(listItem);
        listItem.addEventListener("click", compare);
    });
}
function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
        var checker = document.createElement("div");
        checker.setAttribute("id", "checker");
        if (element.textContent == questions[quizList].answer) {
          time = time + reward;
            score++;
            checker.textContent = "✔️";
        } else {
            time = time + removal;
            checker.textContent = "❌";
        }
    }

    quizList++;

    if (quizList >= questions.length) {
        endScreen();

        checker.textContent =
            "Congratulations" +
            " " +
            "You scored  " +
            score +
            "/" +
            questions.length +
            "!";
            
            
    } else {
        render(quizList);
    }
    quizbox.appendChild(checker);
}

var questions = [
    {
        title: "Which of these is not a primitive value?:",
        choices: [
            "Strings",
            "Booleans",
            "Numbers",
            "Rope"
        ],
        answer: "Rope",
    },
    {
        title: "Complete this function - Console.",
        choices: [
            "Frog",
            "Log",
            "Stump",
            "Fog"
        ],
        answer: "Log",
    },
    {
        title: "Which of these is not semantic html?",
        choices: [
            "Article",
            "DIV",
            "Aside",
            "Nav",
        ],
        answer: "DIV",
    },
    {
        title:
            "In css what changes the color of the text?",
        choices: [
            "Color",
            "Background-Color",
            "LetterColor",
            "WordColor"
        ],
        answer: "Color",
    },
    {
        title:
            "Which is the closest to the content in box model?",
        choices: [
            "Margin",
            "Padding",
            "Border",
        ],
        answer: "Padding",
    },
    {
      title:
          "While justifying content in a Flexbox which will pack items towards the end of the page",
      choices: [
          "Space Around",
          "Space Between",
          "Flex-Start",
          "Flex-End",
      ],
      answer: "Flex-End",
  },
];

function endScreen() {
    quizbox.innerHTML = "";
    countdown.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "You Did It!";

    quizbox.appendChild(createH1);

    if (time >= 0) {
        var timeRemaining = time;
        var createP = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining + " points. Now let us know your name so you can join the ranks of the immortals";
        quizbox.appendChild(createP);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Player Name: ";

    quizbox.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "playerName");
    createInput.textContent = "";

    quizbox.appendChild(createInput);

    var createrecord = document.createElement("button");
    createrecord.setAttribute("type", "record");
    createrecord.setAttribute("id", "record");
    createrecord.textContent = "Record";

    quizbox.appendChild(createrecord);

    createrecord.addEventListener("click", function () {
        var playerName = createInput.value;

        if (playerName === "") {
            alert("No Name Recorded, Try Again");
        } else {
            var finalScore = {
                playerName: playerName,
                score: timeRemaining,
            };
            console.log(finalScore);
            var scoreBoard = localStorage.getItem("scoreBoard");
            if (scoreBoard === "") {
                scoreBoard = [];
            } else {
                scoreBoard = JSON.parse(scoreBoard);
            }
            scoreBoard.push(finalScore);
            var newScore = JSON.stringify(scoreBoard);
            localStorage.setItem("scoreBoard", newScore);
            window.location.replace("indexscore.html");
        }
    });
}
