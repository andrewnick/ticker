import { Builder, parseString } from 'xml2js';
import util from 'util';
import type { APIIntegrateable } from '../APIIntegrateable';

export default class WorkflowMaxClientAPI implements APIIntegrateable {
  constructor(apiKey, accountKey) {
    this.apiKey = apiKey;
    this.accountKey = accountKey;
  }

  getUser() {
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

    parseString(response, function(err, result) {
      // console.log(result);
      const results = util.inspect(result, false, null);
      console.log(results);
    });

    return 'string';
  }

  sendUser() {
    // https://api.workflowmax.com/staff.api/get/123?apiKey=[your API key]&accountKey=[WorkflowMax account key]

    const obj = {
      Response: {
        Status: ['OK'],
        Staff: [
          {
            ID: ['1'],
            Name: ['Jo Bloggs'],
            Email: ['jo@bloggs.net'],
            Phone: [''],
            Mobile: [''],
            Address: [''],
            PayrollCode: ['']
          }
        ]
      }
    };
    const builder = new Builder();
    const xml = builder.buildObject(obj);

    console.log(xml);
  }
}
