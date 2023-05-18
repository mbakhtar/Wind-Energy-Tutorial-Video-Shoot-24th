input.onButtonPressed(Button.A, function () {
    fwdMotors.servo1.fwdSetSpeed(100)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.servo1.fwdSetEnabled(false)
})
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
basic.forever(function () {
	
})
