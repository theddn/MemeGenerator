'use strict'

var gElCanvas
var gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    renderMeme()
}

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

function renderGallery() {
    const imgs = getImgs()
    let strHtml = imgs.map((img) => {
        return `<img  class="gallery-item" src="${img.url}" onclick="onImgSelect(${img.id})">`
    })
    document.querySelector('.gallery').innerHTML = strHtml.join('')
}
function onImgSelect(ImgId) {
    setImgMeme(ImgId)
    renderMeme()
}
function drawText() {
    const linesText = getLineTxt()
    linesText.forEach((lineText, idx) => {
        const { txt, size, color, pos } = lineText
        const { x, y } = pos

        gCtx.font = '40px Ariel'

        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = 'red'
        gCtx.lineWidth = '10'

        gCtx.textAlign = 'center'

        gCtx.strokeText(txt, x, y)
        gCtx.fillText(txt, x, y)
    })
}
