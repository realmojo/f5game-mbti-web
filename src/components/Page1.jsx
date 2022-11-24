import React, { useState } from "react";
import { Button, Radio, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

const questions = [
  { question: "내성적이고 조용한 성격이다.", type: "I" },
  { question: "활동적인 편입니다.", type: "E" },
  { question: "현실적인 사람입니다.", type: "S" },
  { question: "잡생각이 많으며 아이디어가 많습니다.", type: "N" },
  { question: "결정을 내릴 때는 가슴보다 논리적으로 선택합니다.", type: "T" },
  { question: "감정에 대해 이야기 하는 것을 좋아한다.", type: "F" },
  { question: "일정을 잘 지킨다.", type: "J" },
  { question: "짜여진 틀보다 즉흥적인 것을 좋아합니다.", type: "P" },
];

export const Page1 = () => {
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
    localStorage.setItem("score1", JSON.stringify(items));
    navigate("/page2");
  };
  return (
    <div className="flex flex-col">
      <div className="text-center text-2xl pt-8">
        <h1>이상형의 특징을 골라주세요</h1>
      </div>
      <div className="pt-8">
        {questions.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-left pl-4">
              {index + 1}. {item.question}
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
