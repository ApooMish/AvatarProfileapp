import { Button, Form, Input } from "antd";

const ProfileForm = ({
  handleCancel,
  handleOk,
  name,
  email,
  phone,
  website
}) => {
  const onFinish = (values) => {
    handleOk(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8
      }}
      wrapperCol={{
        span: 16
      }}
      initialValues={{
        name,
        email,
        website,
        phone
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            message: "Invalid E-mail!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Phone" name="phone">
        <Input />
      </Form.Item>
      <Form.Item label="Website" name="website">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Ok
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileForm;
