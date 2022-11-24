import React, { useState, useEffect } from "react";
import { Button, Radio, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

const questions = [
  { question: "책과 게임이 사람들의 모임보다 좋다.", type: "I" },
  { question: "사람들이 많은 곳을 좋아합니다.", type: "E" },
  { question: "우주여행은 말도 안되는 생각입니다.", type: "S" },
  {
    question: "책, 영화 등의 결말을 새롭게 해석하는 것을 좋아합니다.",
    type: "N",
  },
  {
    question: "같이 일을 하는 경우 협동 보다는 올바른 방향이 더 중요합니다.",
    type: "T",
  },
  {
    question: "사실보다는 사람들의 생각이 더 중요합니다.",
    type: "F",
  },
  { question: "즉흥적인 것보다 체계적인 것을 더 선호합니다.", type: "J" },
  { question: "한 번에 몰아서 하는 스타일 입니다.", type: "P" },
];

export const Page4 = () => {
  const navigate = useNavigate();
  const [items, setItem] = useState({
    I: { score: 0 },
    E: { score: 0 },
    S: { score: 0 },
    N: { score: 0 },
    T: { score: 0 },
    F: { score: 0 },
    J: { score: 0 },
    P: { score: 0 },
  });

  const doChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...items,
      [name]: { score: value },
    });
  };

  const doClick = () => {
    localStorage.setItem("score4", JSON.stringify(items));
    navigate("/complete");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col">
      <div className="text-center text-2xl pt-8">
        <h1>이상형의 특징을 골라주세요</h1>
      </div>
      <div className="pt-8">
        {questions.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-left pl-4">
              {index + 25}. {item.question}
            </div>
            <div className="pl-6 pt-3 pb-5">
              <Radio.Group
                className="font-default"
                onChange={doChange}
                name={item.type}
                value={items[item.type].score}
              >
                <Space direction="vertical">
                  <Radio value={5}>매우 그렇다</Radio>
                  <Radio value={4}>그렇다</Radio>
                  <Radio value={3}>보통이다</Radio>
                  <Radio value={2}>아니다</Radio>
                  <Radio value={1}>매우 아니다</Radio>
                </Space>
              </Radio.Group>
            </div>
          </React.Fragment>
        ))}
      </div>
      <AdsensePage />
      <div className="text-center mt-4 pb-8">
        <Button
          style={{ width: 336 }}
          type="primary"
          className="btn-next"
          size="large"
          onClick={() => doClick()}
        >
          다음
        </Button>
      </div>
    </div>
  );
};
