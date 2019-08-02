import fetch from 'electron-fetch';
import type { APIIntegrateable } from '../APIIntegrateable';

const TASK_PATH = '/v2/tasks';
const TIMER_PATH = '/v2/time_entries';
const TASK_ASSIGNMENTS = '/v2/task_assignments';
const BASE_URL = 'https://api.harvestapp.com';

// curl -i \
//   -H 'Harvest-Account-ID: 1150079'\
//   -H 'Authorization: Bearer 191925.pt.bJpAte0QvT8uMXM6YtZ-zIr9P0mDyOltdg2KzVGhE2g3bOA89LwJCcPzkcW_50UAqQlAopH6XfR3rmmAmZs8ag'\
//   -H 'User-Agent: Harvest API Example' \
//   "https://api.harvestapp.com/api/v2/users/me.json"

export default class HarvestClientAPI implements APIIntegrateable {
  constructor() {
    this.apiKey =
      '191925.pt.bJpAte0QvT8uMXM6YtZ-zIr9P0mDyOltdg2KzVGhE2g3bOA89LwJCcPzkcW_50UAqQlAopH6XfR3rmmAmZs8ag';
    this.accountID = '1150079';
    this.userID = '2882062';

    this.options = {
      headers: {
        'User-Agent': 'Node.js Harvest API Sample',
        Authorization: `Bearer ${this.apiKey}`, // process.env.HARVEST_ACCESS_TOKEN,
        'Harvest-Account-ID': this.accountID // process.env.HARVEST_ACCOUNT_ID
      }
    };
  }

  getTask() {
    this.get(TASK_PATH);
  }

  getTimer() {
    this.get(TIMER_PATH);
  }

  getTaskAssignments() {
    this.get(TASK_ASSIGNMENTS);
  }

  createEntry() {
    const data = `{"user_id":${
      this.userID
    },"project_id":21763711,"task_id":12581697,"spent_date":"2019-07-27","hours":1.0}`;
    this.post(TIMER_PATH, data);
  }

  post(path, postData) {
    const options = {
      ...this.options,
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        ...this.options.headers,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    fetch(`${BASE_URL}${path}`, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(rejection => console.log(rejection));
  }

  async get(path) {
    console.log('send');

    fetch(`${BASE_URL}${path}`, this.options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(rejection => console.log(rejection));
  }
}
