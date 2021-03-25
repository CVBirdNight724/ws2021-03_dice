input.onGesture(Gesture.Shake, function () {
    ran = randint(1, 6)
})
let ran = 0
ran = 0
basic.forever(function () {
    if (ran == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
    } else if (ran == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            `)
        basic.pause(2000)
    } else if (ran == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
        basic.pause(2000)
    } else if (ran == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        basic.pause(2000)
    } else if (ran == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        basic.pause(2000)
    } else if (ran == 6) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            `)
        basic.pause(2000)
    } else {
    	
    }
})
