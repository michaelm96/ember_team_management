import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TeamDetailsRoute extends Route {
  @service('router') router;
  @service api;
  @tracked showModal = false; // Track modal visibility
  @tracked teamToDelete = null; // Track the team to delete

  async model(params) {
    try {
      const teamDetail = await this.api.get(`/teams/${params.team_id}`);
      const teamDetailMember = await this.api.get(
        `/teams/${params.team_id}/members`,
      );

      return {
        ...teamDetail,
        members: teamDetailMember,
      };
    } catch (error) {
      console.log(error);
      return {
        members: [],
      };
    }
  }
}
