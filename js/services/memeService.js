'use strict'

var gImgs = [{ id: 1, url: 'meme-imgs/1.jpg' }]
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red',
        },
    ],
}

function getMeme() {
    return gMeme
}

function getSelectedImgId() {
    return gMeme.selectedImgId
}

