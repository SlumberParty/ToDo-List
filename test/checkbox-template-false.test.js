import checkboxTemplateFalse from '../src/index/checkbox-template-false.js';
const test = QUnit.test;

QUnit.module('checkbox template false');

test('make a template for a false checkbox', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const todos = {
        task: 'Learn forEach',
        completed: false
    };

    const expected = /*html*/`
    <input type="checkbox">Learn forEach
    `;
    //Act 
    // Call the function you're testing and set the result to a const
    const html = checkboxTemplateFalse(todos);
    //Assert
    assert.equal(html, expected);
});

