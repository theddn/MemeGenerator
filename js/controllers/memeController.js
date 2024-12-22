'use strict'

var gElCanvas
var gCtx


function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    renderMeme()
}


function renderMeme() {
    const currMeme = getMeme()
    const { selectedImgId } = currMeme
    const elImg = new Image()

    elImg.src = `meme-imgs/${selectedImgId}.jpg`
    gCtx.drawImage( elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}
