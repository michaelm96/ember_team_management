import Service from '@ember/service';
import axios from 'axios';
import config from '../../config/environment';

export default class ApiService extends Service {
  baseUrl = config.API_BASE_URL;
  // Axios instance for common configuration
  api = axios.create({
    baseURL: this.baseUrl + '/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // GET request
  async get(url) {
    return (await this.api.get(url)).data;
  }

  // POST request
  async post(url, data) {
    return (await this.api.post(url, data)).data;
  }

  // PUT request
  async put(url, data) {
    return (await this.api.put(url, data)).data;
  }

  // DELETE request
  async delete(url) {
    return (await this.api.delete(url)).data;
  }
}
