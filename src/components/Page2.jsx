import React, { useState, useEffect } from "react";
import { Button, Radio, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

const questions = [
  { question: "대화를 먼저 시작하지 않는 편이다.", type: "I" },
  { question: "말하는 것을 좋아하며 대화가 끊임없습니다.", type: "E" },
  { question: "SF영화를 좋아하지 않습니다.", type: "S" },
  { question: "인류가 언젠가 화성에 살 것이라고 믿습니다.", type: "N" },
  { question: "타인의 감정에 공감 하기가 어렵습니다.", type: "T" },
  { question: "싫어하는 것을 거절하기 어려워 합니다.", type: "F" },
  { question: "집이나 방을 깨끗하게 유지합니다.", type: "J" },
  { question: "방안에 물건이 어질러저 있습니다.", type: "P" },
];

export const Page2 = () => {
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
    localStorage.setItem("score2", JSON.stringify(items));
    navigate("/page3");
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
              {index + 9}. {item.question}
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
