import { parseString } from 'xml2js';
import util from 'util';
import parseXML from './parseXML';
import ERRORS from '../APIErrors';
import testData from './testData';
import type { APIIntegrateable } from '../APIIntegrateable';

export default class WorkflowMaxClientAPI implements APIIntegrateable {
  constructor(apiKey, accountKey) {
    this.apiKey = apiKey;
    this.accountKey = accountKey;
  }

  async getUser(name, email) {
    // https://api.workflowmax.com/staff.api/get/123?apiKey=[your API key]&accountKey=[WorkflowMax account key]
    const response = testData.user;

    try {
      const results = await parseXML(response);
      const { ID, Name, Email } = results.Response.Staff;

      return { id: ID, name: Name, email: Email };
    } catch (err) {
      return err;
    }
  }

  // GET https://api.workflowmax.com/time.api/staff/[id]?apiKey=[your API key]&accountKey=[WorkflowMax account key]&from=20090801&to=20090901
  async getEntries() {
    const response = testData.timeList;
    // const response = testData.timeListSingleEntry;
    try {
      const results = await parseXML(response);
      const times = results.Response.Times.Time;
      let items = [];

      if (Array.isArray(times)) {
        items = results.Response.Times.Time.map(time => {
          return this.timeMap(time);
        });
      } else {
        items = [this.timeMap(times)];
      }

      // console.log('results', items);

      return items;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  timeMap(time) {
    return {
      id: time.ID,
      taskID: time.Task.ID,
      date: time.Date,
      startTime: time.Start,
      endTime: time.End,
      duration: time.Minutes
    };
  }

  // sendUser() {
  //   // https://api.workflowmax.com/staff.api/get/123?apiKey=[your API key]&accountKey=[WorkflowMax account key]

  //   const obj = {
  //     Response: {
  //       Status: ['OK'],
  //       Staff: [
  //         {
  //           ID: ['1'],
  //           Name: ['Jo Bloggs'],
  //           Email: ['jo@bloggs.net'],
  //           Phone: [''],
  //           Mobile: [''],
  //           Address: [''],
  //           PayrollCode: ['']
  //         }
  //       ]
  //     }
  //   };
  //   const builder = new Builder();
  //   const xml = builder.buildObject(obj);

  //   console.log(xml);
  // }
}
