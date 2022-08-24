import './App.css';
import 'antd/dist/antd.min.css';
import Attendence from './components/scoreinputform/attendendce/Attendence';
import CoscholasticArea from './components/scoreinputform/attendendce/CoscholasticArea';
import ScholasticArea from './components/scoreinputform/attendendce/ScholasticArea';
import Form from './components/scoreinputform/attendendce/Forms';
//import ScoreForm from './pages/scoreform/ScoreForm';
import Sheet from './pages/scoresheet/Sheet';



function App() {
  return (
    <div className="App">
  <Sheet/>
  {/* <ScoreForm/> */}
  <Form/>
  {/* <hr/>
  <ScholasticArea/>
  <hr/>
  <CoscholasticArea/>
  <hr/>
  <Attendence/> */}
    </div>
  );
}

export default App;
