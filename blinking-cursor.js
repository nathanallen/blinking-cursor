function recursiveBlinkingCursor(elem){
  $elem = elem || $('#blinking-cursor')
  setTimeout(function(){
    $elem.attr("style", "visibility:hidden");
    setTimeout(function(){
      $elem.attr("style", "visibility:true");
      recursiveBlinkingCursor($elem)
    }, 600)
  }, 600)
}

$('document').ready(function() {
  recursiveBlinkingCursor()
});