'use strict'

let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Write yor text',
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

function getLineIdx() {
    return gMeme.selectedLineIdx
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
    increaseFont.size += 2
}

function decreaseFont() {
    const decreaseFont = gMeme.lines[gMeme.selectedLineIdx]
    decreaseFont.size -= 2
}

function addMultiLines() {
    gMeme.lines.push({
        txt:'Write yor text',
        size: 40,
        font: 'Arial',
        color: 'red',
        pos: { x: 30, y: 120 },
    })
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function toggleLines() {
    gMeme.lines.length - 1 === gMeme.selectedLineIdx
        ? (gMeme.selectedLineIdx = 0)
        : gMeme.selectedLineIdx++
}
