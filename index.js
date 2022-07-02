let homeScore = 0, guestScore = 0

let homeText = document.getElementById("score-home")
let guestText = document.getElementById("score-guest")

function add1H(){
    homeScore += 1
    homeText.textContent = homeScore
}

function add2H(){
    homeScore += 2
    homeText.textContent = homeScore
}

function add3H(){
    homeScore += 3
    homeText.textContent = homeScore
}

function add1G(){
    guestScore += 1
    guestText.textContent = guestScore
}

function add2G(){
    guestScore += 2
    guestText.textContent = guestScore
}

function add3G(){
    guestScore += 3
    guestText.textContent = guestScore
}

