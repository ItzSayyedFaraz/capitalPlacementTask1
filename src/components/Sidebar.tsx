import React,{useState} from 'react';
import { Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  FileDoneOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';
import ProgressHeader from './ProgressHeader';
import ApplicationForm from './ApplicationForm';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);

   // Function to update the current step
   const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };
  return (
    <div style={{display:"flex"}}>
    <Sider width={150}  theme="dark">
      <Menu mode="vertical" theme="dark" style={{height:800}} defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UploadOutlined />}>
          Step 1
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Step 2
        </Menu.Item>
        <Menu.Item key="3" icon={<FileDoneOutlined />}>
          Step 3
        </Menu.Item>
      </Menu>
      
    </Sider>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"}}>
    <div style={{width:"80%",margin:"10%"}}><ProgressHeader currentStep={currentStep} /></div>
    <div style={{marginLeft:"30%"}}><ApplicationForm/></div>
    </div>
    </div>
  );
};

export default Sidebar;
