import React from "react";

function TableHeading({
  handleSortByName,
  handleSortByEmail,
  handleSortByDOB,
}) {
  return (
    <>
      <th> Image </th>
      <th>
        <a href='#' onClick={handleSortByName}>
          Name
        </a>
      </th>
      <th>
        <a href='#' onClick={handleSortByEmail}>
          Email
        </a>
      </th>
      <th>
        <a href='#' onClick={handleSortByDOB}>
          DOB
        </a>
      </th>
    </>
  );
}

export default TableHeading;
