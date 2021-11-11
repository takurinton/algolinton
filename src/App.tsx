import { 
  ThemeProvider, 
  createTheme,
  Modal,
  Fade,
  Button,
} from "ingred-ui";
import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { useCallback, useState } from "react";

const APPLICATION_ID = import.meta.env.VITE_APPLICATION_ID as string;
const ADMIN_APT_KEY = import.meta.env.VITE_ADMIN_API_KEY as string;

function App() {
  const theme = createTheme();
  const client = algoliasearch(APPLICATION_ID, ADMIN_APT_KEY);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={handleToggleOpen}>open</Button>
      <Modal isOpen={isOpen} onClose={handleToggleOpen}>
        <Fade in={isOpen}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "50vw",
              height: "50vh",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InstantSearch searchClient={client} indexName="takurinton">
              <SearchBox />
              <Hits />
            </InstantSearch>
          </div>
        </Fade>
      </Modal>
    </ThemeProvider>
  )
}

export default App
