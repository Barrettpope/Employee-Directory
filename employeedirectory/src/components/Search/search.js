import React from "react";

function Search({ handleSearch }) {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <input
              type='text'
              name='search'
              placeholder='Search'
              onChange={handleSearch}></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
