import axios from "axios";

const base_api_url = 'http://localhost:8080/';

class GradeServices{
  getGrades(){
    return axios.get(base_api_url+"getGrades");
  }

  addGrade(grade){
    return axios.post(base_api_url+"addGrade",grade);
  }
}

export default new GradeServices();