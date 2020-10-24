import React from "react";
import Header from "./components/Header/header";
import Search from "./components/Search/search";
import EmployeeTable from "./components/EmployeeTable/employeeTable";
import moment from "moment";
import "./App.css";

class App extends React.Component {
  state = {
    employees: [],
    search: "",
  };

  handleSearch = ({ target }) => {
    this.setState({
      search: target.value,
    });
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?inc=name,email,picture,dob,id&results=75")
      .then((res) => res.json())
      .then(({ results }) => {
        this.setState({
          employees: results,
        });
      });
  }

  handleSortByName = (event) => {
    event.preventDefault();
    const employees = this.state.employees;
    const sortedEmployeesByFirstName = employees.sort((a, b) => {
      const nameA = a.name.first.toLowerCase(),
        nameB = b.name.first.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    this.setState({
      employees: sortedEmployeesByFirstName,
    });
  };

  handleSortByEmail = (event) => {
    event.preventDefault();
    const employees = this.state.employees;
    const sortedEmployeesByEmail = employees.sort((a, b) => {
      const emailA = a.email.toLowerCase(),
        emailB = b.email.toLowerCase();
      if (emailA < emailB) return -1;
      if (emailA > emailB) return 1;
      return 0;
    });
    this.setState({
      employees: sortedEmployeesByEmail,
    });
  };

  handleSortByDOB = (event) => {
    event.preventDefault();
    const employees = this.state.employees;
    const sortedEmployeesByDOB = employees.sort((a, b) => {
      return a.dob.date < b.dob.date ? -1 : a.dob.date > b.dob.date ? 1 : 0;
    });
    this.setState({
      employees: sortedEmployeesByDOB,
    });
  };

  render() {
    const { employees, search } = this.state;
    const filteredEmployees = employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().includes(search.toLowerCase()) ||
        employee.name.last.toLowerCase().includes(search.toLowerCase()) ||
        employee.email.toLowerCase().includes(search.toLowerCase()) ||
        moment(employee.dob.date)
          .format("MM-DD-YYYY")
          .includes(search.toLowerCase())
    );
    return (
      <>
        <Header />
        <Search handleSearch={this.handleSearch} />
        <EmployeeTable
          employees={filteredEmployees}
          handleSortByName={this.handleSortByName}
          handleSortByEmail={this.handleSortByEmail}
          handleSortByDOB={this.handleSortByDOB}
        />
      </>
    );
  }
}

export default App;
