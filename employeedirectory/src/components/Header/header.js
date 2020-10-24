import React from "react";

function Header() {
  return (
    <>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container text-center'>
          <h1 className='display-4'> Employee Directory </h1>
          <p className='lead'>
            Click on the column titles to filter by heading or use the search
            bar to narrow your results
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
