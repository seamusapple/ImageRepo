function styleHeaderSiblings(tag, theclass) {
  if (!document.getElementsByTagName) return false;
  var headers = document.getElementsByTagName(tag);
  var elem;
  for (var i = 0; i < headers.length; i++) {
    elem = getNextElementNode(headers[i].nextSibling);
    // elem.style.fontWeight = "bold";
    // elem.style.fontSize = "1.2em";
    // elem.className = "intro";
    addClass(elem, theclass);
  }
}

function getNextElementNode(node) {
  if (node.nodeType == 1) {
    return node;
  }
  if (node.nextSibling) {
    return getNextElementNode(node.nextSibling);
  }
  return null;
}
function addClass(element, value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName += " ";
    newClassName += value;
    element.className = newClassName;
  }
}

addLoadEvent(function () {
  styleHeaderSiblings("h1", "intro");
});
