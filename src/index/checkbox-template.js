function checkboxTemplate(todos) {
    let checked = '';

    if(todos.completed) {
        checked = 'checked';
    }

    const html = /*html*/`
        <li>
            <input type="checkbox"${checked}>${todos.task}
        </li>
    `;

    return html;

}

export default checkboxTemplate;