import EmberRouter from '@ember/routing/router';
import config from 'ember-team-management/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('teams'); // Homepage
  this.route('team-details', { path: '/team/:team_id' }); // Dynamic route for team details
  this.route('add-edit-team', { path: '/team/:team_id/edit' });
  this.route('add-edit-member', {
    path: '/team/:team_id/member/:member_id/edit',
  });
  this.route('index', { path: '/' });
});
