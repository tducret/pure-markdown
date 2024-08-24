function initHead() {
    document.head.innerHTML += `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5">
<link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgo=">
<link rel="stylesheet" href="style.css">
<style>body {display: none;}</style> <!-- Hide body until markdown is converted -->
`;
}


function addMarkedJs() {
    var markedjs = document.createElement('script');
    markedjs.setAttribute('src', 'https://cdn.jsdelivr.net/npm/marked/marked.min.js');
    document.head.appendChild(markedjs);
    markedjs.addEventListener('load', convertMarkdownToHtml);
}

function maybeAddTitle() {
    if (!document.title) {
        const title = document.querySelector("h1");
        if (title) {
            document.title = title.textContent;
        }
    }
}

function convertMarkdownToHtml() {
    document.body.innerHTML = marked.parse(document.body.textContent);
    document.body.classList.add('visible');
    maybeAddTitle();
}

initHead();

document.addEventListener('DOMContentLoaded', addMarkedJs);
