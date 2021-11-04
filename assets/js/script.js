function randomNumFuc(){
    var randomNum = Math.floor(Math.random() * 10)
    console.log("random num---", randomNum);
    return randomNum * 100
}

var totalCount = 0
let ballImage = document.getElementById("ball_img");
var marginTop = 0

setInterval(function() {
    ballImage.style.marginTop = `${marginTop}px`
    marginTop = marginTop + 50
    
    if(marginTop > 400) {
        marginTop = 0
        ballImage.style.marginTop = `${marginTop}px`
        var x = randomNumFuc()
        ballImage.style.marginLeft = `${x}px`
        scoreCollection()

        if (totalCount == 10) {
            alert("GAME OVER!")
            location.reload()
        } else {
            totalCount = totalCount + 1
            document.getElementById("ballscount").innerText = `Balls ${totalCount}/10`
        }

    }
    
}, 500);

let basketImage = document.getElementById("basket_img");
var marginLeft = 0

function moveRight() {
    marginLeft = marginLeft + 40
    basketImage.style.marginLeft = `${marginLeft}px`
}
function moveLeft() {
    if(marginLeft!=0){
        marginLeft = marginLeft - 40
        basketImage.style.marginLeft = `${marginLeft}px`
    }
}

function scoreCollection() {
    let bsktY = basketImage.style.marginLeft.split("px")
    let ballY = ballImage.style.marginLeft.split("px")
    console.log("--bsktY---",bsktY);
    console.log("--ballY---", ballY);

    if (bsktY[0] == ballY[0]) {
        alert("You earned 1 score!")
    }
}
