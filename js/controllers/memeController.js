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

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}


function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
  }
  
  function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
  }
  
// function onLineClick(ev) {
//     ev.preventDefault()
//     const linesText = getLineTxt()

//     linesText.forEach((lineText,idx)=>{

//     })

// }

// function getEvPos(ev) {

//     let pos = {
//       x: ev.offsetX,
//       y: ev.offsetY,
//     }

//     if (TOUCH_EVS.includes(ev.type)) {
//       // Prevent triggering the mouse ev
//       ev.preventDefault()
//       // Gets the first touch point
//       ev = ev.changedTouches[0]
//       // Calc the right pos according to the touch screen
//       pos = {
//         x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
//         y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
//       }
//     }
//     return pos
//   }
