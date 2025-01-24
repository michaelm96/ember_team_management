import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TeamDetailsController extends Controller {
  @service('router') router;
  @service api;
  @service loading;

  @tracked showModal = false; // Track modal visibility
  @tracked teamToDelete = null; // Track the team to delete
  @tracked memberToDelete = null; // Track the member to delete
  @tracked modalMessage = ''; // Track the description modal confirmation
  @tracked titleMessage = ''; // Track the title modal confirmation
  @tracked deleteFunc = null; // Track the delete function to use

  deleteMember = async () => {
    try {
      this.loading.startLoading();
      await this.api.delete(`/members/${this.memberToDelete}`);
      window.location.reload();
    } catch (error) {
      console.log(error, '@error delete member');
    } finally {
      this.loading.stopLoading();
    }
  };

  // Transition for adding a new member
  goToAddMember = () => {
    this.router.transitionTo('add-edit-member', this.model.id, 0); // Pass only team_id
  };

  // Transition for editing an existing member
  goToEditMember = (memberId) => {
    this.router.transitionTo('add-edit-member', this.model.id, memberId); // Pass both team_id and member_id
  };

  goToEditTeam = () => {
    this.router.transitionTo('add-edit-team', this.model.id); // Pass both team_id and member_id
  };

  deleteTeam = async () => {
    try {
      this.loading.startLoading();
      await this.api.delete(`/teams/${this.model.id}/members`);
      await this.api.delete(`/teams/${this.model.id}`);
      this.router.transitionTo('teams'); // Pass both team_id and member_id
    } catch (error) {
      console.log(error, '@error delete member');
    } finally {
      this.loading.stopLoading();
    }
  };

  @action
  openModal(team) {
    this.memberToDelete = team.from === 'DELETE_MEMBER' ? team.memberId : null;
    this.deleteFunc =
      team.from === 'DELETE_MEMBER' ? this.deleteMember : this.deleteTeam;
    this.titleMessage =
      team.from === 'DELETE_MEMBER' ? 'Delete Member!' : 'Delete Team!';
    this.modalMessage =
      team.from === 'DELETE_MEMBER'
        ? 'Are you sure you want to delete this member?'
        : 'Are you sure you want to delete this team?';
    this.showModal = true;
    this.teamToDelete = team; // Set the team to delete
  }

  @action
  closeModal() {
    this.showModal = false;
    this.teamToDelete = null; // Reset the team to delete
  }
}
