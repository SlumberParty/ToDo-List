import todos from '../data/data-list.js';
import checkboxTemplateFalse from './checkbox-template-false.js';
import checkboxTemplateTrue from './checkbox-template-true.js';
import htmltoDOM from '../html-to-dom.js';


const listEl = document.getElementById('list');

todos.forEach(todos => {
    const htmlTrue = checkboxTemplateTrue(todos);
    const htmlFalse = checkboxTemplateFalse(todos);
    const dom = htmltoDOM(htmlTrue, htmlFalse);
    listEl.appendChild(dom);
});