import { module, test } from 'qunit';
import { setupTest } from 'ember-team-management/tests/helpers';

module('Unit | Service | loading', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:loading');
    assert.ok(service);
  });
});
