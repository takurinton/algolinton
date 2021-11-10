import React, { useEffect, useState } from 'react'
import './App.css'

import algoliasearch from 'algoliasearch';

const APPLICATION_ID = import.meta.env.VITE_APPLICATION_ID as string;
const ADMIN_APT_KEY = import.meta.env.VITE_ADMIN_API_KEY as string;

function App() {
  const client = algoliasearch(APPLICATION_ID, ADMIN_APT_KEY);
  const index = client.initIndex('takurinton');

  const [state, setState] = useState({ search: '' });
  const [res, setRes] = useState<any[] | undefined>([]);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const v = event.target.value;
    setState({ search: v });

    index
      .search(v)
      .then(({ hits }) => {
        setRes(hits);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div style={{ margin: '100px 0', textAlign: 'center' }}>
      <input type="text" name="search" onChange={handleChangeValue} style={{ fontSize: '1.4rem' }} placeholder='キーワードを入力'/>
      <div>
        {
          res?.map((r, index) => (
            <div key={index.toString()}>
              <h1>{r.title}</h1>
              <p>{r.pub_date}</p>
              <hr />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
