import checkboxTemplate from '../src/index/checkbox-template.js';

const test = QUnit.test;

QUnit.module('checkbox templates');

test('make a template for checkbox', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const todos = {
        task: 'Learn forEach',
        completed: false
    };

    const expected = /*html*/`
        <li>
            <input type="checkbox">Learn forEach
        </li>
    `;

    //Act 
    // Call the function you're testing and set the result to a const
    const html = checkboxTemplate(todos);

    //Assert
    assert.equal(html, expected);

});

test('make a template for a checked checkbox', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const todos = {
        task: 'Learn Templates',
        completed: true
    };

    const expected = /*html*/`
        <li>
            <input type="checkbox"checked>Learn Templates
        </li>
    `;

    //Act 
    // Call the function you're testing and set the result to a const
    const html = checkboxTemplate(todos);

    //Assert
    assert.equal(html, expected);
});