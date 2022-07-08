radio.setGroup(1)
basic.showLeds(`
    . # # # .
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    `)
serial.writeLine("TODO PREPARADO")
basic.forever(function () {
    for (let index = 0; index <= 8; index++) {
        serial.writeString("CONTADOR EN: ")
        serial.writeNumber(index)
        serial.writeLine("")
        radio.sendNumber(index)
        basic.showNumber(index)
    }
})
