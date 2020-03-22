function isOverflown(element) {
  return element.getBoundingClientRect().bottom > screen.height;
}

function createElem(tag, content) {
  const elem = document.createElement(tag);

  if (content) {
    const text = document.createTextNode(content);
    elem.appendChild(text);
  }
  return elem;
}

function appendElem(parent, child) {
  parent.appendChild(child);
}

function getTimestamp() {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  const timestamp = new Intl.DateTimeFormat('pt-BR', options).format(new Date());

  return `[${timestamp}]:`;
}

export { isOverflown, createElem, appendElem, getTimestamp };
