import React from "react";
import moment from "moment";

function employeeRow({
    employee
}) {
    return < >
    <
    tr >
        <
        td > < img src = {
            employee.picture.thumbnail
        }
    alt = {
            employee.id.value
        } > < /img></td >
        <
        td > {
            employee.name.first
        } {
            employee.name.last
        } < /td> <
        td > {
            employee.email
        } < /td> <
        td > {
            moment(employee.dob.date).format("MM-DD-YYYY")
        } < /td> <
        /tr> <
        />
}

export default employeeRow;