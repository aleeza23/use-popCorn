import React, { useRef} from "react";
import {useKey} from "./custom hooks/useKey";

const SearchQuery = ({setquery, query}) => {
  const inputFocus = useRef(null);

  useKey("Enter", function callback(e) {
    if (document.activeElement === inputFocus.current) return;   
      inputFocus.current.focus();
      setquery("");
   
  });

  return (
    <>
      <input
        value={query}
        ref={inputFocus}
        type='text'
        id='input'
        onChange={(e) => setquery(e.target.value)}
        placeholder='Search Movie...'
      />
    </>
  );
};

export default SearchQuery;
