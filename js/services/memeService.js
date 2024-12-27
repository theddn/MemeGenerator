'use strict'

let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 40,
            font: 'Serif',
            color: 'red',
            pos: { x: 30, y: 70 },
        },
    ],
}

function getMeme() {
    return gMeme
}

function getLineTxt() {
    return gMeme.lines
}

function setTxtInput(text) {
    const lineTxt = gMeme.lines[gMeme.selectedLineIdx]
    lineTxt.txt = text
}

function setColorPicked(color) {
    const colorPicked = gMeme.lines[gMeme.selectedLineIdx]
    colorPicked.color = color
}

function setIncreaseFont() {
    const increaseFont = gMeme.lines[gMeme.selectedLineIdx]
    increaseFont.size += 5
}

function setDecreaseFont() {
    const decreaseFont = gMeme.lines[gMeme.selectedLineIdx]
    decreaseFont.size -= 5
}

function addMultiLines() {
    gMeme.lines.push({
        txt: 'I sometimes eat Falafel',
        size: 40,
        font: 'Serif',
        color: 'red',
        pos: { x: 30, y: 140 },
    })
    gMeme.selectedLineIdx++
}

function toggleLine() {
    gMeme.lines.length - 1 === gMeme.selectedLineIdx
        ? (gMeme.selectedLineIdx = 0)
        : gMeme.selectedLineIdx++
}
