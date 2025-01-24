import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class TeamsController extends Controller {
  @service('router') router;

  goToDetails = (teamId) => {
    this.router.transitionTo('team-details', teamId);
  };

  goToAddTeam = () => {
    this.router.transitionTo('add-edit-team', 0);
  };
}
