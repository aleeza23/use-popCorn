import React from "react";

const Main = ({children}) => {
  return <>
        <div className='row text-white justify-content-center  g-3 mx-4 px-5 py-2'>
            {children}
        </div>
  </>;
};

export default Main;
