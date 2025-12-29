input.onButtonPressed(Button.A, function () {
    record.setSampleRate(11959, record.AudioSampleRateScope.Recording)
    basic.showIcon(IconNames.Happy)
    record.startRecording(record.BlockingState.Blocking)
    basic.clearScreen()
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Punchline), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.B, function () {
    record.setSampleRate(11428, record.AudioSampleRateScope.Playback)
    basic.showIcon(IconNames.Surprised)
    record.playAudio(record.BlockingState.Blocking)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C5 B C5 D A C F E ", 197), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Skull)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.SmallHeart)
})
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
basic.showIcon(IconNames.Asleep)
