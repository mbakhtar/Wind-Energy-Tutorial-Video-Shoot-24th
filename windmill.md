# Wind Energy Tutorial 
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
```
## 
``||Step 1||`` 
On your screen you can see an ``||basic: on start||`` block and a ``||basic:forever||``
block. Insert or nest a ``||basic: show leds||`` under the ``||basic:on start||``.
Click on the boxes of the ``||basic:show leds||`` to turn the ``||basic:leds||``
ON or OFF. Let's try to write ``||Hi||`` by turning on the ``||basic:leds||`` of the 
``||basic:show leds||`` blocks. Click on the blub to show your hint.
```blocks
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
```
## 
``||Step 2||``
Click on the ``||input:input||`` drawer. 
Find the ``||input: on button A pressed||`` block. Drag the block and place it 
on the coding screen.
Click on the blub to show your hint.
```blocks
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
input.onButtonPressed(Button.A, function () {
})
```
## 
``||Step 3||``
Click on the ``||input:input||`` drawer. 
Find the ``||input: on button A pressed||`` block. Drag the block and place it 
on the coding screen. This time change ``||input:A||`` to ``||input:B||``
Click on the blub to show your hint.
```blocks
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
```
## 
``||Step 4||``
The two buttons ``||input:A||`` and ``||input:B||`` will control the movement of the
the ``||Wind Mill||``. To turn the ``||Wind Mill||`` on ``||input: Button A||``
will be used. Next go to ``||fwdMotors:Motors||`` drawer and find 
``||fwdMotors:set servo1 to 50%||`` drag this block and nest it under ``||input:on button A pressed||``

Click on the blub to show your hint.
```blocks
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
input.onButtonPressed(Button.A, function () {
    fwdMotors.servo1.fwdSetSpeed(100)
})
input.onButtonPressed(Button.B, function () {
})
```
## 
``||Step 5||``
The ``||input:Button B||`` is used for stopping the ``||Wind Mill||``. From the
``||fwdMotors:Motors||`` drawer drag the ``||fwdMotors:set servo off||`` block
and nest it under ``||input:on button B pressed||`` block. 
Click on the blub to show your hint.
```blocks
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
input.onButtonPressed(Button.A, function () {
    fwdMotors.servo1.fwdSetSpeed(100)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.servo1.fwdSetEnabled(false)
})
```
## @showhint 
This is the final code. On pressing ``||input: Button A||`` should make your ``||Wind Mill||``
turn and when ``||input: Button B||`` is pressed the ``||Wind Mill||`` stops.
```blocks
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
input.onButtonPressed(Button.A, function () {
    fwdMotors.servo1.fwdSetSpeed(100)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.servo1.fwdSetEnabled(false)
})
```