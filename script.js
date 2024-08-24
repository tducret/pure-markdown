function initHead() {
    document.head.innerHTML += `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5">
<link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgo=">
<style>
:root {
    --width: 720px;
    --font-main: Verdana, sans-serif;
    --font-secondary: Verdana, sans-serif;
    --font-scale: 1em;
    --background-color: #fff;
    --heading-color: #222;
    --text-color: #444;
    --link-color: #3273dc;
    --visited-color: #8b6fcb;
    --code-background-color: #282c34;
    --code-color: #abb2bf;
    --blockquote-color: #222;
}

@media (prefers-color-scheme: dark) {
    :root {
        --background-color: #01242e;
        --heading-color: #eee;
        --text-color: #ddd;
        --link-color: #8cc2dd;
        --visited-color: #8b6fcb;
        --code-background-color: #000;
        --code-color: #ddd;
        --blockquote-color: #ccc;
    }
}

body {
    display: none; /* Hide body until markdown is converted */
    font-family: var(--font-secondary);
    font-size: var(--font-scale);
    margin: auto;
    padding: 20px;
    max-width: var(--width);
    text-align: left;
    background-color: var(--background-color);
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 1.5;
    color: var(--text-color);
}

body.visible {
    display: block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: var(--font-main);
    color: var(--heading-color);
}

a {
    color: var(--link-color);
    cursor: pointer;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

nav a {
    margin-right: 8px;
}

table {
    width: 100%;
}

img {
    max-width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

code,
pre {
    font-family: monospace;
    padding: 2px;
    background-color: var(--code-background-color);
    color: var(--code-color);
    overflow-x: auto;
}

code {
    border-radius: 3px;
}

pre {
    border-radius: 8px;
    padding: 15px;
}

blockquote {
    border-left: 1px solid #999;
    color: var(--code-color);
    padding-left: 20px;
    font-style: italic;
}
</style>`;
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
