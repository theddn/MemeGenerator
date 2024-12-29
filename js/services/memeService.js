'use strict'

let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 40,
            font: 'Arial',
            color: 'red',
            pos: { x: 20, y: 60 },
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

function increaseFont() {
    const increaseFont = gMeme.lines[gMeme.selectedLineIdx]
    increaseFont.size += 5
}

function decreaseFont() {
    const decreaseFont = gMeme.lines[gMeme.selectedLineIdx]
    decreaseFont.size -= 5
}

function addMultiLines() {
    gMeme.lines.push({
        txt: 'I sometimes eat Falafel',
        size: 40,
        font: 'Arial',
        color: 'red',
        pos: { x: 20, y: 410 },
    })
    gMeme.selectedLineIdx++
}

function toggleLines() {
    gMeme.lines.length - 1 === gMeme.selectedLineIdx
        ? (gMeme.selectedLineIdx = 0)
        : gMeme.selectedLineIdx++
}
