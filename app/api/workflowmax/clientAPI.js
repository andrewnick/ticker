import { parseString } from 'xml2js';
import util from 'util';
import ERRORS from '../APIErrors';
import type { APIIntegrateable } from '../APIIntegrateable';

export default class WorkflowMaxClientAPI implements APIIntegrateable {
  constructor(apiKey, accountKey) {
    this.apiKey = apiKey;
    this.accountKey = accountKey;
  }

  async getUser(name, email) {
    // https://api.workflowmax.com/staff.api/get/123?apiKey=[your API key]&accountKey=[WorkflowMax account key]
    const { apiKey } = this;
    const response = `<Response>
        <Status>OK</Status>
        <Staff>
          <ID>1</ID>
          <Name>Jo Bloggs</Name>
          <Email>jo@bloggs.net</Email>
          <Phone />
          <Mobile />
          <Address />
          <PayrollCode />
        </Staff>
      </Response>`;

    try {
      const results = await new Promise(resolve => {
        parseString(response, (err, data) => {
          console.log(data);
          const result = {
            id: data.Response.Staff[0].ID[0],
            name: data.Response.Staff[0].Name[0],
            email: data.Response.Staff[0].Email[0]
          };

          // const data = util.inspect(result, false, null);
          console.log(result);

          resolve(result);
        });
      });

      return results;
    } catch (err) {
      return err;
    }
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
