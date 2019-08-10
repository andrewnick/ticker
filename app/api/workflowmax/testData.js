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
        <ID>412</ID>
        <Name>Concept</Name>
        <Description />
      </Task>
      <Task>
        <ID>413</ID>
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
        <ID>J000002</ID>
        <Name>Brochure Template</Name>
      </Job>
      <Task>
        <ID>413</ID>
        <Name>Copywriter</Name>
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

const jobList = `<Response>
  <Status>OK</Status>
  <Jobs>
    <Job>
      <ID>J000001</ID>
      <Name>Brochure Template</Name>
      <Client>
        <ID>255</ID>
        <Name>XYZ Australia, NZ Business Unit</Name>
      </Client>
    </Job>
    <Job>
      <ID>J000002</ID>
      <Name>Email Design</Name>
      <Client>
        <ID>697</ID>
        <Name>A. Dutchess</Name>
      </Client>
    </Job>
  </Jobs>
</Response>`;

const clientList = `<Response>
  <Status>OK</Status>
  <Clients>
    <!-- Refer get/[id] method for full list of client fields  -->
    <Client>
      <ID>255</ID>
      <Name>XYZ Australia, NZ Business Unit</Name>
      <Email>someone@example.com</Email>
      <DateOfBirth>1970-11-26</DateOfBirth>
      <Address />
      <City />
      <Region />
      <PostCode />
      <Country />
      <PostalAddress>
         Level 32, PWC Building
         188 Quay Street
         Auckland Central
      </PostalAddress>
      <PostalCity>Auckland</PostalCity>
      <PostalRegion />
      <PostalPostCode>1001</PostalPostCode>
      <PostalCountry />
      <Phone>(02) 1723 5265</Phone>
      <Fax />
      <Website />
      <ReferralSource />
      <ExportCode />
      <IsProspect>No</IsProspect>
      <AccountManager>
        <ID>2</ID>
        <Name>Jo Blogs</Name>
      </AccountManager>
      <Type>
        <Name>20th of Month</Name>
        <CostMarkup>30.00</CostMarkup>
        <PaymentTerm>DayOfMonth</PaymentTerm>  <!-- DayOfMonth or WithinDays  -->
        <PaymentDay>20</PaymentDay>
      </Type>
      <Contacts>
        <Contact>
          <ID>220</ID>
          <IsPrimary>yes</IsPrimary>
          <Name>Samantha Benecke</Name>
          <Salutation>Sam</Salutation>
          <Addressee>Mrs S Benecke</Addressee>
          <Mobile />
          <Email />
          <Phone />
          <Position />
        </Contact>
      </Contacts>
    </Client>
    <Client>
      <ID>697</ID>
      <Name>A. Dutchess</Name>
      <Address />
      <City />
      <Region />
      <PostCode />
      <Country />
      <PostalAddress>P O Box 123</PostalAddress>
      <PostalCity>Wellington</PostalCity>
      <PostalRegion />
      <PostalPostCode>6011</PostalPostCode>
      <PostalCountry />
      <Phone />
      <Fax />
      <Website />
      <Contacts />
      <BillingClient>
         <ID>12345</ID>
         <Name>Billing Client</Name>
      </BillingClient>
    </Client>
  </Clients>
</Response>`;

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
  timeUpdateDuration,
  jobList,
  clientList
};
