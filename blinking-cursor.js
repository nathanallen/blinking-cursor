function blinkingCursor(){
  var elem = document.querySelector('#blinking-cursor-js')
  setInterval(function(){
    elem.style.visibility = 'hidden'
    setTimeout(function(){
      elem.style.visibility = ''
    }, 600)
  }, 1200)
}

window.onload = blinkingCursor