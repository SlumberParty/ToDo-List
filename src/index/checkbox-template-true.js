function checkboxTemplateTrue(todos) {
    return /*html*/`
    <input type="checkbox" checked>${todos.task}
    `;
}

export default checkboxTemplateTrue;