import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AddEditTeamRoute extends Route {
  @service api;

  async model(params) {
    try {
      return Number(params.team_id)
        ? await this.api.get(`/teams/${params.team_id}`)
        : {};
    } catch (error) {
      console.log(error, 'error getting team data');
    }
  }
}
