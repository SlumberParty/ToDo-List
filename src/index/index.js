import todos from '../data/data-list.js';
import checkboxTemplate from '../index/checkbox-template.js';
import htmltoDOM from '../html-to-dom.js';


const listEl = document.getElementById('list');

todos.forEach(todo => {
    const html = checkboxTemplate(todo);
    const dom = htmltoDOM(html);
    listEl.appendChild(dom);
});