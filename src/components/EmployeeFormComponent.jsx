import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';
import GradeServices from '../services/GradeServices';

class EmployeeFormComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      employee_name: "",
      employee_salary: 0,
      employee_grade: 0,
      grades: []
    };

    this.employeeNameChangeHandler = this.employeeNameChangeHandler.bind(this);
    this.employeeSalaryChangeHandler = this.employeeSalaryChangeHandler.bind(this);
    this.employeeGradeChangeHandler = this.employeeGradeChangeHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount(){
    GradeServices.getGrades().then((response) => {
      this.setState({
        grades: response.data
      });
    });
  }

  employeeNameChangeHandler(e){
    this.setState({employee_name: e.target.value});
  }

  employeeSalaryChangeHandler(e){
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
        this.setState({employee_salary: e.target.value});
    }
  }

  employeeGradeChangeHandler(e){
    this.setState({employee_grade: e.target.value});
  }

  submitForm(e){
    let employee = {
      employee_name: this.state.employee_name,
      employee_sallary: this.state.employee_salary,
      grade_id: parseInt(this.state.employee_grade)
    }
    EmployeeServices.addEmployee(employee).then(resp => {
      window.location.reload();
    });
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Employee Name" maxLength="50" value={this.state.employee_name} onChange={this.employeeNameChangeHandler}/>
        <input type="text" placeholder="Employee Salary" value={this.state.employee_salary} onChange={this.employeeSalaryChangeHandler}/>
        <select name="gradeSelect" value={this.state.employee_grade} onChange={this.employeeGradeChangeHandler}>
          <option value="0">Choose Grade</option>
          {
              this.state.grades.map(
                grades =>
                <option key={grades.id} value = {grades.id}>
                  {grades.grade_name}
                </option>
              )
            }
        </select>
        <input type="submit" value="Submit" onClick={this.submitForm}/>
      </div>
    );
  }
}

export default EmployeeFormComponent;