import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TeamsRoute extends Route {
  @service api;

  async model() {
    try {
      return await this.api.get('/teams');
    } catch (error) {
      console.log(error, 'err getting teams list');
    }
  }
}
