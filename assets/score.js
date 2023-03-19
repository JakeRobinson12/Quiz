var listdelete = document.querySelector("#delete");
var pagereturn = document.querySelector("#return");
var highScore = document.querySelector("#highScore");


listdelete.addEventListener("click", function () {
    localStorage.listdelete();
    location.reload();
});

var scoreBoard = localStorage.getItem("scoreBoard");
scoreBoard = JSON.parse(scoreBoard);

if (scoreBoard !== null) {
    for (var i = 0; i < scoreBoard.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = finalScore[i]. playerName + " " + finalScore[i].score;
        highScore.appendChild(createLi);
    }
}
