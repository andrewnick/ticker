import xmlescape from 'xml-escape';

const user = `<Response>
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

const taskList = `<Response>
    <Status>OK</Status>
    <TaskList>
      <Task>
        <ID>1</ID>
        <Name>Concept</Name>
        <Description />
      </Task>
      <Task>
        <ID>2</ID>
        <Name>Design</Name>
        <Description />
      </Task>
    </TaskList>
  </Response>`;

const task = `<Response>
    <Status>OK</Status>
    <TaskList>
      <Task>
        <ID>1</ID>
        <Name>Concept</Name>
        <Description />
      </Task>
      <Task>
        <ID>2</ID>
        <Name>Design</Name>
        <Description />
      </Task>
    </TaskList>
  </Response>`;

const timeJob = `<Response>
  <Status>OK</Status>
  <Times>
    <Time>
      <ID>123456</ID>
      <Job>
        <ID>J000001</ID>
        <Name>Brochure Template</Name>
      </Job>
      <Task>
        <ID>412</ID>
        <Name>Design & Layout</Name>
      </Task>
      <Staff>
        <ID>1</ID>
        <Name>Chris Spence </Name>
      </Staff>
      <Date>2008-10-29T00:00:00</Date>
      <Minutes>240</Minutes>
      <Note />
      <Billable>true</Billable>
      <Start>13:00</Start>
      <End>17:00</End>
    </Time>
    <Time>
      <ID>123457</ID>
      <Job>
        <ID>J000001</ID>
        <Name>Brochure Template</Name>
      </Job>
      <Task>
        <ID>411</ID>
        <Name>Copywriting</Name>
      </Task>
      <Staff>
        <ID>2</ID>
        <Name>John Smith</Name>
      </Staff>
      <Date>2008-11-04T00:00:00</Date>
      <Minutes>180</Minutes>
      <Note />
      <Billable>true</Billable>
    </Time>
  </Times>
</Response>`;

const timeList = `<Response>
  <Status>OK</Status>
  <Times>
    <Time>
      <ID>123457</ID>
      <Job>
        <ID>J000001</ID>
        <Name>Brochure Template</Name>
      </Job>
      <Task>
        <ID>412</ID>
        <Name>Design & Layout</Name>
      </Task>
      <Staff>
        <ID>1</ID>
        <Name>Chris Spence </Name>
      </Staff>
      <Date>2008-10-29T00:00:00</Date>
      <Minutes>240</Minutes>
      <Note />
      <Billable>true</Billable>
      <Start>13:00</Start>
      <End>17:00</End>
    </Time>
    <Time>
      <ID>123456</ID>
      <Job>
        <ID>J000001</ID>
        <Name>Brochure Template</Name>
      </Job>
      <Task>
        <ID>412</ID>
        <Name>Design & Layout</Name>
      </Task>
      <Staff>
        <ID>1</ID>
        <Name>Chris Spence </Name>
      </Staff>
      <Date>2008-10-29T00:00:00</Date>
      <Minutes>240</Minutes>
      <Note />
      <Billable>true</Billable>
      <Start>13:00</Start>
      <End>17:00</End>
    </Time>
  </Times>
</Response>`;

const timeListSingleEntry = `<Response>
  <Status>OK</Status>
  <Times>
    <Time>
      <ID>123456</ID>
      <Job>
        <ID>J000001</ID>
        <Name>Brochure Template</Name>
      </Job>
      <Task>
        <ID>412</ID>
        <Name>Design & Layout</Name>
      </Task>
      <Staff>
        <ID>1</ID>
        <Name>Chris Spence </Name>
      </Staff>
      <Date>2008-10-29T00:00:00</Date>
      <Minutes>240</Minutes>
      <Note />
      <Billable>true</Billable>
      <Start>13:00</Start>
      <End>17:00</End>
    </Time>
  </Times>
</Response>`;

const timeItem = `<Response>
  <Status>OK</Status>
  <Time>
    <ID>123456</ID>
    <Job>
      <ID>J000001</ID>
      <Name>Brochure Template</Name>
    </Job>
    <Task>
      <ID>412</ID>
      <Name>Design & Layout</Name>
    </Task>
    <Staff>
      <ID>1</ID>
      <Name>Chris Spence </Name>
    </Staff>
    <Date>2008-10-29T00:00:00</Date>
    <Minutes>240</Minutes>
    <Note />
    <Billable>true</Billable>
    <Start>13:00</Start>
    <End>17:00</End>
  </Time>
</Response>`;

const timeAddDuration = `<Timesheet>
  <Job>J000309</Job>
  <Task>345</Task>
  <Staff>3</Staff>
  <Date>20081030</Date>
  <Minutes>60</Minutes>
  <Note>Detailed note about the time sheet entry</Note>
</Timesheet>`;

const timeAddNegativeDuration = `<Timesheet>
  <Job>J000310</Job>
  <Task>678</Task>
  <Staff>4</Staff>
  <Date>20141030</Date>
  <Minutes>-60</Minutes>
  <Note>Negative time entry</Note>
</Timesheet>`;

const timeAddStartEnd = `<Timesheet>
  <Job>J000309</Job>
  <Task>345</Task>
  <Staff>3</Staff>
  <Date>20081030</Date>
  <Start>13:00</Start>
  <End>13:30</End>
  <Note>Detailed note about the time sheet entry</Note>
</Timesheet>`;

const timeUpdateDuration = `<Timesheet>
  <ID>123456</ID>
  <Job>J000309</Job>
  <Task>345</Task>
  <Staff>3</Staff>
  <Date>20081030</Date>
  <Minutes>60</Minutes>
  <Note>Detailed note about the time sheet entry</Note>
</Timesheet>`;

export default {
  user,
  taskList,
  task,
  timeJob,
  timeList,
  timeListSingleEntry,
  timeItem,
  timeAddDuration,
  timeAddNegativeDuration,
  timeAddStartEnd,
  timeUpdateDuration
};
