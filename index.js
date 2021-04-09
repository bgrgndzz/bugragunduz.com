const insertAfter = (referenceNode, newNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

window.onload = () => {
  if (showdown && article) { 
    const converter = new showdown.Converter();
    const html = converter.makeHtml(article);

    document.querySelector('.article-content').innerHTML = html;
    const date = document.querySelector('.date');
    date.parentNode.removeChild(date);
    insertAfter(document.querySelector('.article-content h1'), date);
  }
};
