import React from 'react';
import { HitsProvided, Hit } from 'react-instantsearch-core';
import { connectHits } from 'react-instantsearch-dom';

const Hits: React.FC<HitsProvided<Hit<any>>> = ({
  hits,
}) => {
  return (
    <>
      {
        hits.map((hit: any) => (
          <li key={hit.id}>
            {hit.title}
          </li>
        ))
      }
    </>
  );
};

export default connectHits(Hits);