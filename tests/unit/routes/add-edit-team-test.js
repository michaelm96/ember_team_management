import { module, test } from 'qunit';
import { setupTest } from 'ember-team-management/tests/helpers';

module('Unit | Route | add-edit-team', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:add-edit-team');
    assert.ok(route);
  });
});
