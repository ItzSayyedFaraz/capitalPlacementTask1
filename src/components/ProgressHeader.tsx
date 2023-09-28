import React from 'react';
import { Progress } from 'antd';

interface ProgressHeaderProps {
  currentStep: number; // Pass the current step as a prop
}

const ProgressHeader: React.FC<ProgressHeaderProps> = ({ currentStep }) => {
  const totalSteps = 3; // Total number of steps in your application

  return (
    <div >
      <h2>Application Progress</h2>
      <Progress style={{width:"200%"}} percent={(currentStep / totalSteps) * 100} />
    </div>
  );
}

export default ProgressHeader;
