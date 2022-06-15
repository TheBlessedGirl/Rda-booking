import React from'react'
import { Button, Form, Input} from 'antd';
import './contactus.css';
const Contact =()=>{
    return(
<div>
<Form className="form">
<Form.Item label="your first name">
        <Input placeholder="input your first name" />
      </Form.Item>
      <Form.Item label="your last name">
        <Input placeholder="input your last name" />
      </Form.Item>
      <Form.Item><button>send message</button></Form.Item>
    </Form>
</div>
    )
}
export default Contact;