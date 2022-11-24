import React, { useState, useEffect } from "react";
import { Button, Select } from "antd";
import { Link } from "react-router-dom";
import { AdsenseMain } from "./adsense/main";

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
export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (value) => {
    localStorage.setItem("my-mbti", value);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
    localStorage.setItem("my-mbti", "ESTJ");
  }, []);
  return (
    <div className="flex justify-center flex-col">
      <Link to="/compatibility">
        <div className="text-right pt-2 pr-3 font-default">MBTI 궁합보기</div>
      </Link>
      <h1 className="text-3xl text-center pt-16">
        MBTI 검사 성격 이상형 테스트
      </h1>
      <p className="text-center mb-2">
        내가 좋아하는 상대방의 MBTI는 무엇일까?
      </p>
      <p className="text-center mb-2">본인의 MBTI 유형을 선택하여 주세요.</p>
      <div className="text-center mb-2">
        <Select
          size="large"
          defaultValue="ESTJ"
          onChange={handleChange}
          style={{ width: 336 }}
        >
          {children}
        </Select>
      </div>
      <AdsenseMain />
      <div className="text-center mt-2">
        {isLoading ? (
          <Button
            style={{ width: 336 }}
            className="btn-start"
            type="primary"
            size="large"
          >
            <Link to="/page1">START</Link>
          </Button>
        ) : (
          ""
        )}
      </div>
      <article>
        <div className="post">
          <h2>MBTI 검사란</h2>
          <p>
            자신의 성격유형을 파악하여 대인관계 및 의사소통 능력 향상에 도움을
            주는 심리검사입니다. MBTI 검사는 개인의 선호경향성을 바탕으로 16가지
            성격유형 중 하나로 분류하며, 각 유형별 특징을 이해함으로써 타인과의
            상호작용시 발생하는 갈등이나 스트레스를 효과적으로 관리할 수 있도록
            도와줍니다.
          </p>
        </div>
        <div className="post">
          <h2>MBTI 대하여</h2>
          <p>
            나와 상대방의 성격유형을 파악하여 서로 잘 맞는 부분과 맞지 않는
            부분을 이해할 수 있는 재미있는 테스트입니다. MBTI검사와 궁합은 총
            16가지 유형으로 구성되어 있으며, 각 유형별 특징 및 연애스타일,
            직업적 특성 등을 확인하실 수 있습니다.
          </p>
        </div>
        <div className="post">
          <h2>MBTI 궁합 분류</h2>
          <p>
            성격유형검사라고 불리는 MBTI 검사 결과 16가지 유형중 본인과 맞는
            유형도 있고 맞지 않는 유형도 있을 것이다. 나는 개인적으로 사람과의
            관계 형성 및 친밀도 유지에 있어서 혈액형보다는 MBTI 를 더 신뢰하는
            편이다. 나와 다른 성향이지만 나보다 뛰어난 능력을 가진 사람이라면
            그런 점도 인정하며 배울점 또한 많다고 생각하기 때문이다. 하지만 같은
            성향이라도 서로 존중하지 않고 이기심만 가득하다면 결코 오래갈 수
            없는 사이가 될 것이다. 그럼 여기서 잠깐 재미로 알아보는 MBTI 별 궁합
            테스트를 시작해보자.
          </p>
        </div>
      </article>
    </div>
  );
};
