import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class BackButtonComponent extends Component {
  @action
  goBack() {
    window.history.back();
  }
}
