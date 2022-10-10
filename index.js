// Home Score board point increase functions below //
let homeScorebtn1 = document.getElementById("home1")
let homeScoreEl = document.getElementById("home-score")  //does not need to be defined again //
let homeScore = 0 //neither does this//

function incrementHome1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

let homeScorebtn2 = document.getElementById("home2")


function incrementHome2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

let homeScorebtn3 = document.getElementById("home3")

function incrementHome3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

//Away score increasing functions below //

let awayScorebtn1 = document.getElementById("away1")
let awayScoreEl = document.getElementById("away-score")  //does not need to be dfined again //
let awayScore = 0 //neither does this//

function incrementAway1() {
    awayScore += 1
    awayScoreEl.textContent = awayScore
}

let awayScorebtn2 = document.getElementById("away2")

function incrementAway2() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
}

let awayScorebtn3 = document.getElementById("away3")
    
function incrementAway3() {  
    awayScore += 3
    awayScoreEl.textContent = awayScore
}

let newGamebtn = document.getElementById("new-gamebtn") //allows the newgame-btn to be called from HTML

function resetScore() { //function allows score to be reset to zero
    homeScore = 0  //values defined early in the script
    awayScore = 0
    
homeScoreEl.textContent = 0  // displays the text "0" in the appropriate element
awayScoreEl.textContent = 0
}