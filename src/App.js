import './App.css';
import EmployeeComponent from './components/EmployeeComponent';
import GradeComponent from './components/GradeComponent';
import EmployeeFormComponent from './components/EmployeeFormComponent';
import GradeFormComponent from './components/GradeFormComponent';

function App() {
  return (
    <div>
      <h3>Employees</h3>
      <EmployeeComponent />
      <h3>Grades</h3>
      <GradeComponent />

      <h3>Employee Form</h3>
      <EmployeeFormComponent />
      <h3>Grade Form</h3>
      <GradeFormComponent />
    </div>
  );
}

export default App;
