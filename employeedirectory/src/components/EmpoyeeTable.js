import React from "react";
import tableHeading from "./TableHeading";
import employeeRow from "./Employees";


function employeeTable({
    employees,
    handleSortByName,
    handleSortByEmail,
    handleSortByDOB
}) {
    return < >
    <
    div className = "container text-center mt-4" >
        <
        div className = "row" >
        <
        div className = "col-md-12" >
        <
        table className = "table" >
        <
        thead >
        <
        tr >
        <
        tableHeading handleSortByName = {
            handleSortByName
        }
    handleSortByEmail = {
        handleSortByEmail
    }
    handleSortByDOB = {
        handleSortByDOB
    }
    /> <
    /tr> <
    /thead> <
    tbody > {
            employees.map((employee, key) => {
                <
                employeeRow key = {
                    key
                }
                employee = {
                    employee
                }
                />
            })
        } <
        /tbody> <
        /table> <
        /div>  <
        /div> <
        /div> <
        />
}

export default employeeTable;