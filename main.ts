input.onButtonPressed(Button.A, function () {
    basic.showNumber(antal)
})
input.onButtonPressed(Button.B, function () {
    antal = 0
})
let antal = 0
antal = 0
basic.forever(function () {
    if (input.lightLevel() < 40) {
        antal += 1
        while (input.lightLevel() < 40) {
        	
        }
    }
})
