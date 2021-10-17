import React, { Component } from 'react';
import GradeServices from '../services/GradeServices';

class GradeComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      grades:[]
    };
  }

  componentDidMount(){
    GradeServices.getGrades().then((response) => {
      this.setState({
        grades: response.data
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
              <td>Bonus Multiplier</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.grades.map(
                grades =>
                <tr key = {grades.id}>
                  <td>{grades.id}</td>
                  <td>{grades.grade_name}</td>
                  <td>{grades.grade_bonus}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default GradeComponent;