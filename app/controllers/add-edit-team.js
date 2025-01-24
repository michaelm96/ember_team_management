import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class AddEditTeamController extends Controller {
  @service('router') router;
  @service api;

  updateTeamName = (event) => {
    this.model.name = event.target.value;
  };

  updateTeamDescription = (event) => {
    this.model.description = event.target.value;
  };

  saveTeam = async (event) => {
    event.preventDefault();
    try {
      const data = {
        name: this.model.name,
        description: this.model.description,
      };

      if (this.model.id) {
        await this.api.put(`/teams/${this.model.id}`, data);
      } else {
        await this.api.post('/teams', data);
      }

      this.router.transitionTo('teams');
    } catch (error) {
      console.log(error, '@save team');
    }
  };
}
