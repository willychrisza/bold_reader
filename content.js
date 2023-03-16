function boldFirstHalfOfWords(text) {
    return text.replace(/\b\w+\b/g, function (word) {
      if (word.length <= 1) {
        return word;
      }
      const halfLength = Math.floor(word.length / 2);
      return `<strong>${word.slice(0, halfLength)}</strong>${word.slice(halfLength)}`;
    });
  }
  
  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const newNode = document.createElement('span');
      newNode.innerHTML = boldFirstHalfOfWords(node.textContent);
      node.replaceWith(newNode);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      Array.from(node.childNodes).forEach(processNode);
    }
  }
  
  processNode(document.body);
  