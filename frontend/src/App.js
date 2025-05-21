import { IntegrationForm } from './integration-form';
import { HubspotIntegration } from './integrations/hubspot';

const integrationOptions = ['Airtable', 'Notion', 'Hubspot'];

function App() {
  return (
    <div>
      <IntegrationForm />
    </div>
  );
}

export default App;
