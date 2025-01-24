import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class AddEditMemberController extends Controller {
  @service api;
  @service router;
  @service loading;

  // Update member name
  updateMemberName = (event) => {
    this.model.member.name = event.target.value;
  };

  // Update member role
  updateMemberRole = (event) => {
    this.model.member.role = event.target.value;
  };

  // Save member data
  saveMember = async (event) => {
    event.preventDefault();
    try {
      this.loading.startLoading();
      const { member, teamId } = this.model;

      if (!member.name || !member.role) {
        alert('Member Name and Role are required.');
        return;
      }
      console.log(this.model, '@this model');

      if (member.id) {
        // Update existing member
        await this.api.put(`/teams/${teamId}/members/${member.id}`, member);
      } else {
        // Add new member
        await this.api.post(`/teams/${teamId}/members`, member);
      }

      // Redirect to the team details page
      this.router.transitionTo('team-details', teamId);
    } catch (error) {
      console.log(error, '@save member');
    } finally {
      this.loading.stopLoading();
    }
  };
}
