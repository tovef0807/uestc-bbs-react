import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.less";
import { login } from "../../service/user";

class Login extends Component {
  state = {
    loading: false,
  };
  render() {
    const onFinish = async (values) => {
      this.setState({
        loading: true,
      });
      const data = await login(values).finally(() => {
        this.setState({
          loading: false,
        });
      });
      console.log(data);
    };
    const { loading } = this.state;
    return (
      <div>
        <header className="login-header">
          <div className="desc">
            Ant Design 是西湖区最具影响力的 Web 设计规范
          </div>
        </header>
        <Form
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          size="large"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="#/forgetPassword">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Log in
            </Button>
            Or <a href="#/register">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;
