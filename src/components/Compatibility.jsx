import React, { useEffect } from "react";
import { Button, Select, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { AdsenseMainCom } from "./adsense/com-main";

const { Option } = Select;
const children = [];
const mbtiArr = [
  "ESTJ",
  "ESTP",
  "ESFJ",
  "ESFP",
  "ENTJ",
  "ENTP",
  "ENFJ",
  "ENFP",
  "ISTJ",
  "ISTP",
  "ISFJ",
  "ISFP",
  "INTJ",
  "INTP",
  "INFJ",
  "INFP",
];
for (let i = 0; i < 16; i++) {
  children.push(<Option key={mbtiArr[i]}>{mbtiArr[i]}</Option>);
}
export const Compatibility = () => {
  const myHandleChange = (value) => {
    localStorage.setItem("my-mbti", value);
  };
  const yourHandleChange = (value) => {
    localStorage.setItem("your-mbti", value);
  };
  useEffect(() => {
    localStorage.setItem("my-mbti", "ESTJ");
    localStorage.setItem("you-mbti", "ESTJ");
  }, []);
  return (
    <div className="flex justify-center flex-col">
      <Link to="/">
        <div className="text-right pt-2 pr-3 font-default">
          MBTI 이상형 테스트
        </div>
      </Link>
      <h1 className="text-3xl text-center pt-16">MBTI 궁합 확인</h1>
      <div className="text-center mb-4">우리의 MBTI 궁합은 잘 맞을까?</div>

      <Row className="row-container">
        <Col span={11} className="text-center">
          <div className="text-center mb-2">본인</div>
          <Select
            size="large"
            defaultValue="ESTJ"
            onChange={myHandleChange}
            style={{ width: 112 }}
          >
            {children}
          </Select>
        </Col>
        <Col span={2} className="text-center">
          <div className="pt-8 text-2xl">💙</div>
        </Col>
        <Col span={11} className="text-center">
          <div className="text-center mb-2">상대방</div>
          <Select
            size="large"
            defaultValue="ESTJ"
            onChange={yourHandleChange}
            style={{ width: 112 }}
          >
            {children}
          </Select>
        </Col>
      </Row>
      <AdsenseMainCom />
      <div className="text-center mt-4">
        <Button
          style={{ width: 336 }}
          type="primary"
          size="large"
          className="btn-start"
        >
          <Link to="/result">START</Link>
        </Button>
      </div>
    </div>
  );
};
