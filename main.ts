input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    function_1()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    function_1()
    function_2()
})
function function_1 () {
    led.plot(1, 2)
    led.plot(2, 1)
    led.plot(3, 2)
    led.plot(2, 3)
    led.plot(2, 2)
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    function_2()
})
function function_2 () {
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(4, 0)
    led.plot(4, 1)
    led.plot(4, 2)
    led.plot(4, 3)
    led.plot(4, 4)
    led.plot(3, 4)
    led.plot(2, 4)
    led.plot(1, 4)
    led.plot(0, 4)
    led.plot(0, 3)
    led.plot(0, 2)
    led.plot(0, 1)
}
