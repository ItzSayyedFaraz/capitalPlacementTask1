// ApplicationForm.tsx
import React, {  useState } from "react";
import {
  Upload,
  Form,
  Input,
  Checkbox,
  Switch,
  Select,
  Button,
  Modal,
} from "antd";
import { PlusOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";

const { Option } = Select;

const ApplicationForm: React.FC = () => {
    const optionsArray=[{paragraph:"Paragraph"},{yesno:"Yes/No"},{multipleChoice:"Multiple Choice"},{fileUpload:"File Upload"},{videoQuestion:"Video Question"},{number:"Number"},{date:"Date"}]
  const [isQuestionsModalVisible, setIsQuestionsModalVisible] = useState(false);
  const [selectedQuestionType, setSelectedQuestionType] = useState<
    any
  >(null);


  // State to manage additional input fields for "Paragraph" question
  const [paragraphQuestionData, setParagraphQuestionData] = useState({
    type: "",
    question: "",
  });

  // Function to open the questions modal
  const handleAddQuestion = () => {
    setIsQuestionsModalVisible(true);
  };

  // Function to handle the selection of a question type
  const handleQuestionTypeChange = (e:React.ChangeEvent<HTMLSelectElement>) => {

    // Reset additional input fields for "Paragraph" question
    setParagraphQuestionData({ type: "", question: "" });
  };

  const selectingOptions=(e:React.ChangeEvent<HTMLOptionElement>)=>{
    console.log(e.target.value)
  }

  // Function to handle the submission of the question form
  const handleQuestionSubmit = () => {
    // You can handle the submission logic here
    console.log("Selected question type:", selectedQuestionType);

    if (selectedQuestionType === "paragraph") {
      console.log("Type:", paragraphQuestionData.type);
      console.log("Question:", paragraphQuestionData.question);
    }

    // Close the modal
    setIsQuestionsModalVisible(false);
  };
  
  return (
    <div>
    <Form>
      <div style={{display:"flex",margin:"3%",width:"200%"}}>
      <Form.Item label="First Name" name="firstName">
        <Input />
      </Form.Item>
      <Form.Item style={{marginLeft:"2%"}} label="Last Name" name="lastName">
        <Input />
      </Form.Item>
      </div>
      <div style={{display:"flex",margin:"3%",width:"200%"}}>
      <Form.Item label="Email" name="email">
        <Input style={{marginLeft:"17%"}} type="email" />
      </Form.Item>
      <Form.Item style={{marginLeft:"7%"}} label="Phone">
        <Form.Item name="phoneInternal" valuePropName="checked" noStyle>
          <Checkbox>Internal</Checkbox>
        </Form.Item>
        <Form.Item name="phoneSwitch" valuePropName="checked" noStyle>
          <Switch />
        </Form.Item>
      </Form.Item>
      </div>
      <div style={{display:"flex",margin:"3%",width:"200%"}}>
      <Form.Item label="Nationality">
        <Form.Item name="nationalityInternal" valuePropName="checked" noStyle>
          <Checkbox>Internal</Checkbox>
        </Form.Item>
        <Form.Item name="nationalitySwitch" valuePropName="checked" noStyle>
          <Switch />
        </Form.Item>
      </Form.Item>
      </div>
      <div style={{display:"flex",margin:"3%",width:"200%"}}>
     
      <Form.Item label="Current Residence">
        <Form.Item name="residenceInternal" valuePropName="checked" noStyle>
          <Checkbox>Internal</Checkbox>
        </Form.Item>
        <Form.Item name="residenceSwitch" valuePropName="checked" noStyle>
          <Switch />
        </Form.Item>
      </Form.Item>
      <Form.Item style={{marginLeft:"2%"}} label="Id Number">
        <Form.Item name="idNumberInternal" valuePropName="checked" noStyle>
          <Checkbox>Internal</Checkbox>
        </Form.Item>
        <Form.Item name="idNumberSwitch" valuePropName="checked" noStyle>
          <Switch />
        </Form.Item>
      </Form.Item>
      </div>
      <div style={{display:"flex",margin:"3%",width:"200%"}}>
      <Form.Item label="Date of Birth">
        <Form.Item name="dobInternal" valuePropName="checked" noStyle>
          <Checkbox>Internal</Checkbox>
        </Form.Item>
        <Form.Item name="dobSwitch" valuePropName="checked" noStyle>
          <Switch />
        </Form.Item>
      </Form.Item>
      <Form.Item style={{marginLeft:"6.5%"}} label="Gender">
        <Form.Item name="genderInternal" valuePropName="checked" noStyle>
          <Checkbox>Internal</Checkbox>
        </Form.Item>
        <Form.Item name="genderSwitch" valuePropName="checked" noStyle>
          <Switch />
        </Form.Item>
      </Form.Item>
      </div>
      <div style={{display:"flex",margin:"3%",width:"200%"}}>

      {/* Add a question */}
      <Form.Item label="Add a question">
        <Input prefix="+" onClick={handleAddQuestion} />
      </Form.Item>

      <Modal
        title="Questions"
        open={isQuestionsModalVisible}
        onCancel={() => setIsQuestionsModalVisible(false)}
        footer={[
          <Button
            key="cancel"
            onClick={() => setIsQuestionsModalVisible(false)}
          >
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleQuestionSubmit}>
            Save
          </Button>,
        ]}
      >
        <Form>
          <Form.Item label="Type">
            <Select
            
              onChange={handleQuestionTypeChange}
              placeholder="Select a question type"
            >
               { optionsArray.map((item,index)=>(
              <Option  key={String(index)} >{Object.values(item)}</Option>
              
               )
              
              
               )
               }

            </Select>
          </Form.Item>
          {selectedQuestionType === "Paragraph" && (
            <>
              <Form.Item label="Question">
                <Input
                  value={paragraphQuestionData.question}
                  onChange={(e) =>
                    setParagraphQuestionData({
                      ...paragraphQuestionData,
                      question: e.target.value,
                    })
                  }
                  placeholder="Enter your question"
                />
              </Form.Item>
            </>
          )}
          
        </Form>
      </Modal>
     
      </div>
      <div>
      <Button>save</Button>
      </div>
    
    </Form>
    </div>
  );
};

export default ApplicationForm;
