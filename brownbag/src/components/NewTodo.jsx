import React, { useState } from "react";
import "../App.css";
import { Card, Form, Input, Button, List } from "antd";

function NewTodo() {
  const [toDoList, setToDoList] = useState([]);

  const onSubmit = (values) => {
    const newList = [...toDoList, values.newToDo];
    setToDoList(newList);
  };

  const [form] = Form.useForm();
  return (
    <Card size="default" title="New To Do Item">
      <Form form={form} name="newToDo" onFinish={onSubmit}>
        <Form.Item
          label="Item"
          name="newToDo"
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
        renderItem={(item) => <List.Item>{item}</List.Item>}
      ></List>
    </Card>
  );
}

export default NewTodo;
