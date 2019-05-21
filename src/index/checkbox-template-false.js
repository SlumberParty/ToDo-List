function checkboxTemplateFalse(todos) {
    return /*html*/`
    <input type="checkbox">${todos.task}
    `;
}

export default checkboxTemplateFalse;