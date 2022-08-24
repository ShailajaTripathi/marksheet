import "./App.css";
import "antd/dist/antd.min.css";
import Attendence from "./components/scoreinputform/attendendce/Attendence";
import CoscholasticArea from "./components/scoreinputform/attendendce/CoscholasticArea";
import ScholasticArea from "./components/scoreinputform/attendendce/ScholasticArea";
import Form from "./components/scoreinputform/attendendce/Forms";
//import ScoreForm from './pages/scoreform/ScoreForm';
import Sheet from "./pages/scoresheet/Sheet";
import NewFrom from "./components/scoreinputform/attendendce/NewFrom";



function App() {
  return (
    <div className="App">
      {/* <Sheet/> */}
      {/* <ScoreForm/> */}
      {/* <Form />    */}
      {/* <hr/>
=======
  <Sheet/>
  {/* <ScoreForm/> */}
  <Form/>
  {/* <hr/>
>>>>>>> 1aa7963f64475ce4757c313e99cce70fd605a0af
  <ScholasticArea/>
  <hr/>
  <CoscholasticArea/>
  <hr/>
  <Attendence/> */}
  <NewFrom/>
    </div>
  );
}

export default App;
