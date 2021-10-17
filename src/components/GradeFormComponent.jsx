import React, { Component } from 'react';
import GradeServices from '../services/GradeServices';

class GradeFormComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      grade_name: "",
      grade_bonus: 0
    };

    this.gradeNameChangeHandler = this.gradeNameChangeHandler.bind(this);
    this.gradeBonusChangeHandler = this.gradeBonusChangeHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  gradeNameChangeHandler(e){
    this.setState({grade_name: e.target.value});
  }

  gradeBonusChangeHandler(e){
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
        this.setState({grade_bonus: e.target.value});
    }
  }

  submitForm(e){
    let grade = {
      grade_name: this.state.grade_name,
      grade_bonus: this.state.grade_bonus
    }
    GradeServices.addGrade(grade).then(resp => {
      window.location.reload();
    });
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Grade Name" maxLength="50" value={this.state.grade_name} onChange={this.gradeNameChangeHandler}/>
        <input type="text" placeholder="Grade Bonus" value={this.state.grade_bonus} onChange={this.gradeBonusChangeHandler}/>
        <input type="submit" value="Submit" onClick={this.submitForm}/>
      </div>
    );
  }
}

export default GradeFormComponent;