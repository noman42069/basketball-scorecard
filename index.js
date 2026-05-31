let homepoints = 0

let guestpoints = 0

let Home_Score = document.getElementById("home-score")

let Guest_Score = document.getElementById("guest-score")


function hp1() {
    homepoints += 1
    Home_Score.textContent = homepoints
}

function hp2() {
    homepoints += 2
    Home_Score.textContent = homepoints
}

function hp3() {
    homepoints += 3
    Home_Score.textContent = homepoints
}

function gp1() {
    guestpoints += 1
    Guest_Score.textContent = guestpoints
}

function gp2() {
    guestpoints += 2
    Guest_Score.textContent = guestpoints
}

function gp3() {
    guestpoints += 3
    Guest_Score.textContent = guestpoints
}