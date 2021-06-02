import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import {
  Form,
  Select,
  DatePicker,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
  Space
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};

const normFile = e => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const Demo = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const { RangePicker } = DatePicker;

  return (
    <div>
      <Form>
        <Form.Item
          name="select"
          label="Plant"
          hasFeedback
          rules={[
            {
              //required: true,
              message: 'Please select your country!'
            }
          ]}
        >
          <Select placeholder="Please select a plant">
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Use existing template">
          <Select placeholder="Please select existing template">
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Radio value="a">Create New Template</Radio>
        </Form.Item>
      </Form>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          'input-number': 3,
          'checkbox-group': ['A', 'B'],
          rate: 3.5
        }}
      >
        <Form.Item
          name="select-multiple"
          label="Attribute Groups"
          rules={[
            {
              //required: true,
              message: 'Please select your favourite colors!',
              type: 'array'
            }
          ]}
        >
          <Select mode="multiple" placeholder="Please select attribute groups">
            <Option value="red">AVAILABLE:#-1-TURB</Option>
            <Option value="green">AVAILABLE:#-2-TURB</Option>
            <Option value="blue">AVAILABLE:#-3-TURB</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Select Year">
          <RangePicker picker="year" />
        </Form.Item>

        {/* <Form.Item name="switch" label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item name="slider" label="Slider">
          <Slider
            marks={{
              0: 'A',
              20: 'B',
              40: 'C',
              60: 'D',
              80: 'E',
              100: 'F'
            }}
          />
        </Form.Item>

        <Form.Item name="radio-group" label="Radio.Group">
          <Radio.Group>
            <Radio value="a">item 1</Radio>
            <Radio value="b">item 2</Radio>
            <Radio value="c">item 3</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="radio-button"
          label="Radio.Button"
          rules={[
            {
              required: true,
              message: 'Please pick an item!'
            }
          ]}
        >
          <Radio.Group>
            <Radio.Button value="a">item 1</Radio.Button>
            <Radio.Button value="b">item 2</Radio.Button>
            <Radio.Button value="c">item 3</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="checkbox-group" label="Checkbox.Group">
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox
                  value="A"
                  style={{
                    lineHeight: '32px'
                  }}
                >
                  A
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="B"
                  style={{
                    lineHeight: '32px'
                  }}
                  disabled
                >
                  B
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="C"
                  style={{
                    lineHeight: '32px'
                  }}
                >
                  C
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="D"
                  style={{
                    lineHeight: '32px'
                  }}
                >
                  D
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="E"
                  style={{
                    lineHeight: '32px'
                  }}
                >
                  E
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="F"
                  style={{
                    lineHeight: '32px'
                  }}
                >
                  F
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="rate" label="Rate">
          <Rate />
        </Form.Item>

        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="longgggggggggggggggggggggggggggggggggg"
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="Dragger">
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item> */}

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6
          }}
        >
          <Space>
            <Button type="primary" htmlType="submit">
              Save Template
            </Button>
            <Button type="primary" htmlType="submit">
              Get Data
            </Button>
            <Button type="primary" htmlType="submit">
              Upload Data
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

ReactDOM.render(<Demo />, document.getElementById('container'));