import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Tracker = () => (
  <Main
    meta={
      <Meta
        title={`Google Sheet | ${AppConfig.title}`}
        description="Embedded Google Sheet"
      />
    }
  >
    <div className="pb-8 pt-16">
      <h1 className="text-2xl font-bold">Contribution Tracker</h1>
      <iframe
        src="https://docs.google.com/spreadsheets/d/1XAe3CXRW7lp8eZqZCEVsRAZqZ2pXAezdZoyXIstsn2o/htmlembed?headers=true"
        width="100%"
        height="600"
      ></iframe>
    </div>
  </Main>
);

export default Tracker;
