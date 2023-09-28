import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import ProgressHeader from './components/ProgressHeader';


function App() {
  // const [currentStep, setCurrentStep] = useState<number>(1);

  //  // Function to update the current step
  //  const handleStepChange = (step: number) => {
  //   setCurrentStep(step);
  // };

  return (
    <div className="App" >
      <div style={{display:"flex",flexDirection:"column"}}>
      {/* <ProgressHeader currentStep={currentStep} /> */}
       <Sidebar/>
       </div>
       
    </div>
  );
}

export default App;
