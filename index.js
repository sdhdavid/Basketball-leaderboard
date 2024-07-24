let homeScr = document.getElementById("home-el")
let homeScore = 0

let guestScr = document.getElementById("guest-el")
let guestScore = 0

// home
function add1home() {
    homeScore += 1
    homeScr.textContent = homeScore
}

function add2home() {
    homeScore += 2
    homeScr.textContent = homeScore
}

function add3home() {
    homeScore += 3
    homeScr.textContent = homeScore
}

// guest
function add1guest() {
    guestScore += 1
    guestScr.textContent = guestScore
}

function add2guest() {
    guestScore += 2
    guestScr.textContent = guestScore
}

function add3guest() {
    guestScore += 3
    guestScr.textContent = guestScore
}


function reset() {
    guestScore = 0
    homeScore = 0
    guestScr.textContent = guestScore
    homeScr.textContent = homeScore
}