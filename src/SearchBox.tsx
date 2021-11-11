import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchBoxProvided } from 'react-instantsearch-core';
import { TextField } from 'ingred-ui';

const SearchBox: React.FC<SearchBoxProvided> = ({
  refine,
  currentRefinement,
}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    refine(event.target.value);
  };

  return (
    <div>
      <TextField 
        placeholder='検索する' 
        value={currentRefinement} 
        onChange={handleChange}
      />
    </div>
  );
};

export default connectSearchBox(SearchBox);