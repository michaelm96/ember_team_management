import { module, test } from 'qunit';
import { setupTest } from 'ember-team-management/tests/helpers';

module('Unit | Route | add-edit-member', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:add-edit-member');
    assert.ok(route);
  });
});
