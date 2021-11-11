import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const APPLICATION_ID = import.meta.env.VITE_APPLICATION_ID as string;
const ADMIN_APT_KEY = import.meta.env.VITE_ADMIN_API_KEY as string;

function App() {
  const client = algoliasearch(APPLICATION_ID, ADMIN_APT_KEY);
  return (
    <InstantSearch searchClient={client} indexName="takurinton">
      <SearchBox />
      <Hits />
    </InstantSearch>
  )
}

export default App
