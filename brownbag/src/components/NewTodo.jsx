import React from "react";
import "../App.css";
import { Card, Form, Input, Button, Row, Col } from "antd";

function NewTodo() {
  return (
    <Card size="default" title="New To Do Item">
      <Form name="basic">
        <Row gutter={[24, 8]}>
          <Col span={16}>
            <Form.Item label="Item" name="newToDo">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default NewTodo;
