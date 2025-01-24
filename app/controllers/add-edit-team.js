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

      let teamId = this?.model?.id;
      if (this.model.id) {
        await this.api.put(`/teams/${this.model.id}`, data);
      } else {
        const res = await this.api.post('/teams', data);
        teamId = res.id;
      }

      this.router.transitionTo('team-details', teamId);
    } catch (error) {
      console.log(error, '@save team');
    }
  };
}
