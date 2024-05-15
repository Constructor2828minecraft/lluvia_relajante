input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1e+245; index++) {
        basic.showLeds(`
            . # . . #
            . # . . #
            # . . # .
            # . # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . #
            . # . . #
            # . . # .
            # . # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . #
            . # . . #
            # . . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . #
            . # . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
