'use strict'

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    renderMeme()
    // document.querySelector('.meme-editor').classList.add('hidden')
}

function renderGallery() {
    const imgs = getImgs()
    let strHtml = imgs.map((img) => {
        return `<img  class="gallery-item" src="${img.url}" onclick="onImgSelect(${img.id})">`
    })
    document.querySelector('.gallery-container').innerHTML = strHtml.join('')
}

function onImgSelect(ImgId) {
    setImgMeme(ImgId)
    renderMeme()
}
