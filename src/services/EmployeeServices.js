import axios from 'axios'

const base_api_url = 'http://localhost:8080/';

class EmployeeServices{
  getEmployees(){
    return axios.get(base_api_url+"getEmployees");
  }

  getEmployeesInfo(){
    return axios.get(base_api_url+"getEmployeesInfo");
  }

  addEmployee(employee){
    return axios.post(base_api_url+"/addEmployee", employee)
  }
}

export default new EmployeeServices();