input.onButtonPressed(Button.A, function () {
    row += 1
    prev_row += 1
    row = row % 5
    prev_row = prev_row % 5
})
input.onButtonPressed(Button.B, function () {
    notes_on[row] = notes_on[row] + 1
    if (notes_on[row] >= 5) {
        notes_on[row] = 0
    }
})
let notes_on: number[] = []
let prev_row = 0
let row = 0
midi.useRawSerial()
row = 0
prev_row = row - 1
notes_on = [0, 0, 0, 0, 0]
basic.forever(function () {
    if (row == 0) {
        basic.clearScreen()
        for (let index = 0; index <= notes_on[row] * 4; index++) {
            led.plotBrightness(index, prev_row, 15)
            led.plot(index, row)
        }
        midi.playTone(262, music.beat(BeatFraction.Whole))
    } else if (row == 1) {
        basic.clearScreen()
        for (let index = 0; index <= notes_on[row] * 4; index++) {
            led.plotBrightness(index, prev_row, 15)
            led.plot(index, row)
        }
    } else if (row == 2) {
        basic.clearScreen()
        for (let index = 0; index <= notes_on[row] * 4; index++) {
            led.plotBrightness(index, prev_row, 15)
            led.plot(index, row)
        }
    } else if (row == 3) {
        basic.clearScreen()
        for (let index = 0; index <= notes_on[row] * 4; index++) {
            led.plotBrightness(index, prev_row, 15)
            led.plot(index, row)
        }
    } else {
        basic.clearScreen()
        for (let index = 0; index <= notes_on[row] * 4; index++) {
            led.plotBrightness(index, prev_row, 15)
            led.plot(index, row)
        }
    }
})
