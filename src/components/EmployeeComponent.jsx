import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';

class EmployeeComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      employees:[],
      grades: []
    };
  }

  componentDidMount(){
    EmployeeServices.getEmployeesInfo().then((response) => {
      this.setState({
        employees: response.data
      });
    });
  }
    

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Sallary</td>
              <td>Grade</td>
              <td>Total Bonus</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.employees.map(
                employees =>
                <tr key = {employees.employee_id}>
                  <td>{employees.employee_id}</td>
                  <td>{employees.employee_name}</td>
                  <td>{employees.employee_sallary}</td>
                  <td>{employees.grade_id}: {employees.grade_name}</td>
                  <td>{employees.employee_sallary+(employees.employee_sallary*(employees.grade_bonus/100))}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeComponent;