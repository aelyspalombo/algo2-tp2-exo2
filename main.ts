input.onButtonPressed(Button.A, function () {
    if (a != 0) {
        led.unplot(a, b)
        a = a - 1
        led.plot(a, b)
    }
})
input.onButtonPressed(Button.B, function () {
    if (a != 4) {
        led.unplot(a, b)
        a += 1
        led.plot(a, b)
    }
})
let b = 0
let a = 0
a = 2
b = 4
let iterations = 0
let x = randint(0, 4)
let y = 0
let score = 0
led.plot(a, b)
led.plot(x, y)
basic.forever(function () {
    basic.pause(500)
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
    basic.pause(500)
    if (y >= 4) {
        if (a == x) {
            score += 1
        } else if (a != x) {
            led.unplot(x, y)
            break;
basic.showString("SCORES")
        }
        x = randint(0, 4)
        y = 0
        led.plot(x, y)
    }
})
