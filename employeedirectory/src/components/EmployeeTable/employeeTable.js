import React from "react";
import TableHeading from "./tableHeading";
import EmployeeRow from "./employees";

function EmployeeTable({
  employees,
  handleSortByName,
  handleSortByEmail,
  handleSortByDOB,
}) {
  return (
    <>
      <div className='container text-center mt-4'>
        <div className='row'>
          <div className='col-md-12'>
            <table className='table'>
              <thead>
                <tr>
                  <TableHeading
                    handleSortByName={handleSortByName}
                    handleSortByEmail={handleSortByEmail}
                    handleSortByDOB={handleSortByDOB}
                  />
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, key) => (
                  <EmployeeRow key={key} employee={employee} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeTable;
