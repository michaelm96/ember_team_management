import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-team-management/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dynamic-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DynamicForm />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <DynamicForm>
        template block text
      </DynamicForm>
    `);

    assert.dom().hasText('template block text');
  });
});
