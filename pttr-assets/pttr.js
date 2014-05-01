// http://css-tricks.com/snippets/javascript/htmlentities-for-javascript/
function htmlEntities(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
}

function createCodeNode(codeStr) {
  var node, code;
  
  node = document.createElement('pre');
  code = document.createElement('code');

  node.setAttribute('class', 'pttr-section-code');

  code.innerHTML = codeStr;
  code.setAttribute('class', 'language-html'); // TODO: Detect language

  node.appendChild(code);

  return node;
}

var previews = document.querySelectorAll('.show-code .pttr-section-preview');

for (var i = 0; i < previews.length; i++) {
  // Remove all leading space
  var codeStr = htmlEntities(previews[i].innerHTML.replace(/^ +/gm, ''));
  var node = createCodeNode(codeStr); 
  
  previews[i].parentNode.appendChild(node);
}

// Do da highlighting
Prism.highlightAll();