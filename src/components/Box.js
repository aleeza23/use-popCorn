import React from "react";
import {useState} from "react";

const Box = ({children}) => {
  const [open, setopen] = useState(true);

  return (
    <>
      <div className='col-lg-4 mx-4 rounded shadow-lg box bg-white'>
        <button
          onClick={() => setopen((prev) => !prev)}
          className='float-end toggle-btn'
        >
          {open ? "-" : "+"}
        </button>
        
        {open && children}
      </div>
    </>
  );
};

export default Box;
