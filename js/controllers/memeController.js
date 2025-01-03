'use strict'

function renderMeme() {
    const currMeme = getMeme()
    const { selectedImgId } = currMeme
    const elImg = new Image()

    elImg.src = `meme-imgs/${selectedImgId}.jpg`

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText()
    }
}

function drawText() {
    const linesText = getLineTxt()
    linesText.forEach((lineText, idx) => {
        const { txt, size, color, pos } = lineText
        const { x, y } = pos

        gCtx.font = `${size}px Arial`
        gCtx.textAlign = 'left'
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = color
        gCtx.lineWidth = 4

        gCtx.strokeText(txt, x, y)
        gCtx.fillText(txt, x, y)

        const textWidth = gCtx.measureText(txt).width

        gCtx.strokeRect(x - 10, y - size, textWidth + 20, size + 10)
    })
}

function onTxtInput(text) {
    setTxtInput(text)
    renderMeme()
}

function downloadImg(elLink) {
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onColorPicker(color) {
    setColorPicked(color)
    renderMeme()
}

function onIncreaseFont() {
    increaseFont()
    renderMeme()
}

function onDecreaseFont() {
    decreaseFont()
    renderMeme()
}

function onAddMultiLines() {
    addMultiLines()
    renderMeme()
}

function onToggleLines() {
    toggleLines()
    renderMeme()
}

// TODO: When drawing text on the canvas,
// 1) keep the location
// 2) size on the line object
// 3) use it to determine clicks on a line

function onTxtClick(ev){

}