import React from "react";
import "./App.css";
import { Row, Col } from "antd";

import NewTodo from "./components/NewTodo";

function App() {
  return (
    <Row gutter={[24, 24]}>
      <Col span={8}>
        <NewTodo />;
      </Col>
      <Col span={8}>
        <NewTodo />
      </Col>
    </Row>
  );
}

export default App;
