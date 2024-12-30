'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
  
}

function renderGallery() {
    const imgs = getImgs()
    let strHtml = imgs.map((img) => {
        return `<img  class="gallery-item" src="${img.url}" onclick="onImgSelect(${img.id})">`
    })
    document.querySelector('.gallery-container').innerHTML = strHtml.join('')
}

function onImgSelect(ImgId) {
    document.querySelector('.gallery-container').classList.add('hidden')
    document.querySelector('.meme-editor').classList.remove('hidden')
    setImgMeme(ImgId)
    renderMeme()
}
