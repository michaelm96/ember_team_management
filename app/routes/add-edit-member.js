/* eslint-disable prettier/prettier */
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AddEditMemberRoute extends Route {
  @service api;
  @service loading;

  async model(params) {
    this.loading.startLoading();
    try {
      if (Number(params.member_id)) {
        // Edit Member: Fetch the member details
        const member = await this.api.get(`/teams/${params.team_id}/members/${params.member_id}`);
        return { member, teamId: params.team_id };
      } else {
        // Add Member: Return a new member object
        return {
          member: { name: '', role: '' },
          teamId: params.team_id,
        };
      }
    } catch (error) {
      console.log(error, "@error get member data");
    } finally {
      this.loading.stopLoading();
    }
  }
}
