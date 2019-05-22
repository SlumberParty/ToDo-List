import todos from '../data/data-list.js';
import checkboxTemplate from '../index/checkbox-template.js';
import htmltoDOM from '../html-to-dom.js';


const listEl = document.getElementById('list');

todos.forEach(todos => {
    const htmlTrue = checkboxTemplateTrue(todos);
    const htmlFalse = checkboxTemplateFalse(todos);
    const dom = htmltoDOM(htmlTrue, htmlFalse);
    listEl.appendChild(dom);
});