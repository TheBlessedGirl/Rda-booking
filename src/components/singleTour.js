import React from'react'
// import { PhoneTwoTone } from '@ant-design/icons';
import { Button, Form, Input,Card,Typography} from 'antd';
import {Carousel} from 'antd';
const SingleTour=({data})=>{
    
return(
    <>
<h3>{data.title}</h3>

<div>
    <img src={data.photo}style={{margin:" 2px  "}}/>
<p>{data.prepareby}</p>
<p>{data.description}</p>
<p>{data.dueDate}</p>
<div style={{ width: "100%", height: "auto", padding: "10px 100px;" }}>
<Carousel autoplay> 
<img src={data.Photos} alt="Muhazi" />
<img src={data.Photos} alt="Gishwati" /> 
<img src={data.Photos} alt="nyugwe" /> 
</Carousel></div>
    <div>
        
        <Card title="APPLICATION FORM">
        <Form className="form">
<Form.Item label="your first name">
        <Input placeholder="input your first name" />
      </Form.Item>
      <Form.Item label="your last name">
        <Input placeholder="input your last name" />
        
      </Form.Item>
      <Form.Item><button>SEND APPLICATION!</button></Form.Item>
    </Form>
    </Card>
    </div>
</div>
</>
);

}
export default SingleTour;