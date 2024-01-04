import React from "react";

const Header = ({children}) => {
  return (
    <>
      <div className='header mx-4 px-3 pb-2 text-white mt-3'>
        <h1>🍿 usePopcorn</h1>
        {children}
      </div>
    </>
  );
};

export default Header;
