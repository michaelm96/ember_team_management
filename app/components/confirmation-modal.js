import Component from '@glimmer/component';
import { action } from '@ember/object';
import stopPropagation from '../utils/stop-propagation'; // Update path as needed

export default class ConfirmationModalComponent extends Component {
  @action
  confirm() {
    this.args.onConfirm?.(); // Ensure safe access to the action
    this.close();
  }

  @action
  close() {
    this.args.onClose?.(); // Ensure safe access to the action
  }

  @action
  stopPropagation(event) {
    stopPropagation(event); // Utility to stop event propagation
  }
}
