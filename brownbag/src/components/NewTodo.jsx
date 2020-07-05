import React, { useState } from "react";
import "../App.css";
import { Card, Form, Input, Button, List } from "antd";
import { CloseOutlined } from '@ant-design/icons';


function NewTodo() {
  const [toDoList, setToDoList] = useState([]);
  const onSubmit = (values) => {
    const newList = [...toDoList, values.Todo];
    setToDoList(newList);
  };

  const onDelete = (id) => {
    const newList = toDoList.filter(item => item !== id)
    setToDoList(newList)
  }

  const [form] = Form.useForm();
  return (
    <Card size="default" title="To Do List">
      <Form form={form} name="Todo" onFinish={onSubmit}>
        <Form.Item
          label="Item"
          name="Todo"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <List
        dataSource={toDoList}
        renderItem={(item) => <List.Item><Card extra={<a onClick={() => {onDelete(item)}}><CloseOutlined /></a>} style={{ width: 600 }} title={`To do Item`}>{item}</Card></List.Item>}
      ></List>
    </Card>
  );
}

export default NewTodo;
