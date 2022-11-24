import React, { useEffect, useState } from "react";
import { Button, Radio, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

const questions = [
  { question: "주목을 받던 말던 신경 안쓴다.", type: "I" },
  { question: "새로운 곳에서 금방 잘 적응 합니다.", type: "E" },
  { question: "호기심 때문에 행동을 옮기지 않습니다.", type: "S" },
  { question: "사람은 태어난 이유에 대해 궁금해 합니다.", type: "N" },
  { question: "사람으로 인하여 화나는 일이 크게 없습니다.", type: "T" },
  {
    question: "상대방이 싫어할수도 있어서 말못하는 경우가 있습니다.",
    type: "F",
  },
  { question: "여행갈 때 계획을 꼼꼼히 세웁니다.", type: "J" },
  { question: "시간이 부족할 때 까지 일을 미룹니다.", type: "P" },
];

export const Page3 = () => {
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
    localStorage.setItem("score3", JSON.stringify(items));
    navigate("/page4");
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
              {index + 17}. {item.question}
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
