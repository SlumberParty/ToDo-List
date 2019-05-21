import checkboxTemplateTrue from '../src/index/checkbox-template-true.js';
const test = QUnit.test;

QUnit.module('checkbox template true');

test('make a template for a false checkbox', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const todos = {
        task: 'Learn Templates',
        completed: true
    };

    const expected = /*html*/`
    <input type="checkbox" checked>Learn Templates
    `;
    //Act 
    // Call the function you're testing and set the result to a const
    const html = checkboxTemplateTrue(todos);
    //Assert
    assert.equal(html, expected);
});

