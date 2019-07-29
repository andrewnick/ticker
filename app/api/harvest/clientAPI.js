import https from 'https';
import type { APIIntegrateable } from '../APIIntegrateable';

const TASK_PATH = '/v2/tasks';
const TIMER_PATH = '/v2/time_entries';
const TASK_ASSIGNMENTS = '/v2/task_assignments';

// curl -i \
//   -H 'Harvest-Account-ID: 1150079'\
//   -H 'Authorization: Bearer 191925.pt.bJpAte0QvT8uMXM6YtZ-zIr9P0mDyOltdg2KzVGhE2g3bOA89LwJCcPzkcW_50UAqQlAopH6XfR3rmmAmZs8ag'\
//   -H 'User-Agent: Harvest API Example' \
//   "https://api.harvestapp.com/api/v2/users/me.json"

export default class HarvestClientAPI implements APIIntegrateable {
  constructor(apiKey, accountID) {
    this.apiKey =
      '191925.pt.bJpAte0QvT8uMXM6YtZ-zIr9P0mDyOltdg2KzVGhE2g3bOA89LwJCcPzkcW_50UAqQlAopH6XfR3rmmAmZs8ag';
    this.accountID = '1150079';
    this.userID = '2882062';

    this.options = {
      protocol: 'https:',
      hostname: 'api.harvestapp.com',
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
      path,
      headers: {
        ...this.options.headers,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    console.log(options);

    const postReq = https
      .request(options, res => {
        const { statusCode } = res;

        if (statusCode == 201) {
          console.error(`Created Entry: ${statusCode}`);
          return;
        }

        if (statusCode !== 200) {
          console.error(`Request failed with status: ${statusCode}`);
          return;
        }

        res.setEncoding('utf8');
        res.on('data', function(chunk) {
          console.log(`Response: ${chunk}`);
        });
      })
      .on('error', e => {
        console.error(`Got error: ${e.message}`);
      });

    postReq.write(postData);
    postReq.end();
  }

  get(path) {
    console.log('send');

    const options = {
      ...this.options,
      path
    };

    https
      .get(options, res => {
        const { statusCode } = res;

        if (statusCode !== 200) {
          console.error(`Request failed with status: ${statusCode}`);
          return;
        }

        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', chunk => {
          rawData += chunk;
        });
        res.on('end', () => {
          try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
            console.log(parsedData.task_assignments[0]);
            // console.log(parsedData[0]);
          } catch (e) {
            console.error(e.message);
          }
        });
      })
      .on('error', e => {
        console.error(`Got error: ${e.message}`);
      });
  }
}
