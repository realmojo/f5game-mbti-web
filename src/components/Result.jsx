import React, { useState, useEffect } from "react";
import { Share } from "./Share";
import { Button } from "antd";
import { AdsenseResultCom } from "./adsense/com-result";
import { AdsenseResultCom2 } from "./adsense/com-result2";

const comText = {
  BEST: "천생연분",
  GOOD: "좋은 인연",
  NORMAL: "보통의 인연",
  SOSO: "좋지않은 만남",
  BAD: "최악의 인연",
};
const comScore = {
  INFP: {
    receive: "인정",
    text: "INFP는 연애할 때 서로간의 인정을 바탕으로 관계를 형성 합니다. 관계에서 굉장히 헌신적이며 연인을 만족시키는 것에 즐거움을 느끼며 상대에게 힘든일이 있을 때 격려하고 유머스럽게 어려움을 같이 헤쳐나가고자 합니다.",
    compatibility: {
      INFP: comText.GOOD,
      ENFP: comText.GOOD,
      INFJ: comText.GOOD,
      ENFJ: comText.BEST,
      INTJ: comText.GOOD,
      ENTJ: comText.BEST,
      INTP: comText.GOOD,
      ENTP: comText.GOOD,
      ISFP: comText.BAD,
      ESFP: comText.BAD,
      ISTP: comText.BAD,
      ESTP: comText.BAD,
      ISFJ: comText.BAD,
      ESFJ: comText.BAD,
      ISTJ: comText.BAD,
      ESTJ: comText.BAD,
    },
  },
  ENFP: {
    receive: "격려",
    text: "ENFP의 유형은 연인과 함께하면 매력이 증가되고 활발한 에너지로 인하여 동정심이 많다고 합니다. 관계에서는 낙천적이며 연인을 잘 신뢰하기 때문에 헌신하는 타입입니다. 생각보다 다정한면이 많으며 상대의 강점을 잘 헤아릴줄 아는 따듯한 사람입니다.",
    compatibility: {
      INFP: comText.GOOD,
      ENFP: comText.GOOD,
      INFJ: comText.BEST,
      ENFJ: comText.GOOD,
      INTJ: comText.BEST,
      ENTJ: comText.GOOD,
      INTP: comText.GOOD,
      ENTP: comText.GOOD,
      ISFP: comText.BAD,
      ESFP: comText.BAD,
      ISTP: comText.BAD,
      ESTP: comText.BAD,
      ISFJ: comText.BAD,
      ESFJ: comText.BAD,
      ISTJ: comText.BAD,
      ESTJ: comText.BAD,
    },
  },
  INFJ: {
    receive: "소울메이트",
    text: "INFJ의 강점은 민감함 입니다. 이들은 연인이 싫어하는 것과 짜증내는 이유 그리고 연인이 하는 말에 숨어 있는 의미를 이해하려고 노력을 많이 합니다. 이러한 민감함 특성으로 인하여 상대방의 감정을 잘 이해하고 대화로 서로의 신뢰를 쌓아나갑니다.",
    compatibility: {
      INFP: comText.GOOD,
      ENFP: comText.BEST,
      INFJ: comText.GOOD,
      ENFJ: comText.GOOD,
      INTJ: comText.GOOD,
      ENTJ: comText.GOOD,
      INTP: comText.GOOD,
      ENTP: comText.BEST,
      ISFP: comText.BAD,
      ESFP: comText.BAD,
      ISTP: comText.BAD,
      ESTP: comText.BAD,
      ISFJ: comText.BAD,
      ESFJ: comText.BAD,
      ISTJ: comText.BAD,
      ESTJ: comText.BAD,
    },
  },
  ENFJ: {
    receive: "지지",
    text: "사교적이며 이타직인 사람이 많이 있는 이 유형은 연인을 대할 때 의사소통이 뛰어나고 안정적인 관계를 추구하는 편이 높습니다. 연인의 장점을 잘 찾아내며 곁에 있으면 즐겁고 애정이 넘치는 이들의 강점은 타인에 대한 깊은 관찰과 관심 입니다.",
    compatibility: {
      INFP: comText.BEST,
      ENFP: comText.GOOD,
      INFJ: comText.GOOD,
      ENFJ: comText.GOOD,
      INTJ: comText.GOOD,
      ENTJ: comText.GOOD,
      INTP: comText.GOOD,
      ENTP: comText.GOOD,
      ISFP: comText.BEST,
      ESFP: comText.BAD,
      ISTP: comText.BAD,
      ESTP: comText.BAD,
      ISFJ: comText.BAD,
      ESFJ: comText.BAD,
      ISTJ: comText.BAD,
      ESTJ: comText.BAD,
    },
  },
  INTJ: {
    receive: "비전",
    text: "INTJ는 총명하고 자신감이 많은 유형입니다. 이 유형의 사람들은 갈등을 두려워 하지 않는 특징이 있습니다. 그렇기 때문에 연인과의 관계에서 회피성 성향을 띄지 않습니다. 또한 약속을 매우 진지하게 생각하는 사람입니다.",
    compatibility: {
      INFP: comText.GOOD,
      ENFP: comText.BEST,
      INFJ: comText.GOOD,
      ENFJ: comText.GOOD,
      INTJ: comText.GOOD,
      ENTJ: comText.GOOD,
      INTP: comText.GOOD,
      ENTP: comText.BEST,
      ISFP: comText.NORMAL,
      ESFP: comText.NORMAL,
      ISTP: comText.NORMAL,
      ESTP: comText.NORMAL,
      ISFJ: comText.SOSO,
      ESFJ: comText.SOSO,
      ISTJ: comText.SOSO,
      ESTJ: comText.SOSO,
    },
  },
  ENTJ: {
    receive: "탁월함",
    text: "현실적인 측면에서 믿을만한 연인으로 강한 의지력을 가진 것이 가장 큰 장점인 ENTJ 유형 입니다.  의지력은 비관적 보다는 긍정적인 관점에서 문제를 접근 할 수 있으며 다정다감하고 감성적이며 재정적으로 관리가 뛰어납니다.",
    compatibility: {
      INFP: comText.BEST,
      ENFP: comText.GOOD,
      INFJ: comText.GOOD,
      ENFJ: comText.GOOD,
      INTJ: comText.GOOD,
      ENTJ: comText.GOOD,
      INTP: comText.BEST,
      ENTP: comText.GOOD,
      ISFP: comText.NORMAL,
      ESFP: comText.NORMAL,
      ISTP: comText.NORMAL,
      ESTP: comText.NORMAL,
      ISFJ: comText.NORMAL,
      ESFJ: comText.NORMAL,
      ISTJ: comText.NORMAL,
      ESTJ: comText.NORMAL,
    },
  },
  INTP: {
    receive: "지적능력",
    text: "INTP의 연애할 때 이성적이고 논리적인 바탕으로 관계를 형성해 나갑니다. 이들은 논리를 좋아하여 비판적 이기도 하지만 유연한 사고를 할 수 있으며 분석적이고 내성적인 성격을 가지고 있습니다. 스스로가 독특한 것을 인지하고 있으며 자랑스러워 합니다. 연애를 할 때 어린아이처럼 솔직하며 갈등을 두려워 하지 않습니다.",
    compatibility: {
      INFP: comText.GOOD,
      ENFP: comText.GOOD,
      INFJ: comText.GOOD,
      ENFJ: comText.GOOD,
      INTJ: comText.GOOD,
      ENTJ: comText.BEST,
      INTP: comText.GOOD,
      ENTP: comText.GOOD,
      ISFP: comText.NORMAL,
      ESFP: comText.NORMAL,
      ISTP: comText.NORMAL,
      ESTP: comText.NORMAL,
      ISFJ: comText.SOSO,
      ESFJ: comText.SOSO,
      ISTJ: comText.SOSO,
      ESTJ: comText.BEST,
    },
  },
  ENTP: {
    receive: "독립",
    text: "ENTP 유형의 사람은 다른 사람을 읽는데 능숙하고 논쟁을 즐기는 유형입니다. 자신의 연인을 위해 자기개발을 하는 것을 즐기며 논쟁을 즐기기 때문에 의사소통 능력이 뛰어나며 큰 그림을 볼줄 아는 선구자 적인 기질을 가지고 있습니다. 소통이 가장 큰 장점 입니다.",
    compatibility: {
      INFP: comText.GOOD,
      ENFP: comText.GOOD,
      INFJ: comText.BEST,
      ENFJ: comText.GOOD,
      INTJ: comText.BEST,
      ENTJ: comText.GOOD,
      INTP: comText.GOOD,
      ENTP: comText.GOOD,
      ISFP: comText.NORMAL,
      ESFP: comText.NORMAL,
      ISTP: comText.NORMAL,
      ESTP: comText.NORMAL,
      ISFJ: comText.SOSO,
      ESFJ: comText.SOSO,
      ISTJ: comText.SOSO,
      ESTJ: comText.SOSO,
    },
  },
  ISFP: {
    receive: "자유",
    text: "ISFP는 사람과의 관계를 통해 영감을 받는 유형입니다. 내면에는 사랑이 듬뿍담겨 있으며 연인간의 관계속에서 두 사람을 생각하기 좋아하며 연인에게 무적 다정다감하고 따듯한 사람입니다. 연인과의 관계 그 자체로 아름답다고 느껴지며 만족합니다.",
    compatibility: {
      INFP: comText.BAD,
      ENFP: comText.BAD,
      INFJ: comText.BAD,
      ENFJ: comText.BEST,
      INTJ: comText.NORMAL,
      ENTJ: comText.NORMAL,
      INTP: comText.NORMAL,
      ENTP: comText.NORMAL,
      ISFP: comText.SOSO,
      ESFP: comText.SOSO,
      ISTP: comText.SOSO,
      ESTP: comText.SOSO,
      ISFJ: comText.NORMAL,
      ESFJ: comText.BEST,
      ISTJ: comText.NORMAL,
      ESTJ: comText.BEST,
    },
  },
  ESFP: {
    receive: "열정",
    text: "ESFP는 평소에도 즐거움을 사랑하는 유형입니다. 연인관계에서 재치있고 영리하며 재밌는 일을 사랑합니다. 본인에게 흥미로운일이 있으면 내일로 미루지 않고 당장 시작하는 유형이며 연인과의 감정 또한 자유롭게 해주기 때문에 편안한 감정을 유지할 수 있습니다.",
    compatibility: {
      INFP: comText.BAD,
      ENFP: comText.BAD,
      INFJ: comText.BAD,
      ENFJ: comText.BAD,
      INTJ: comText.NORMAL,
      ENTJ: comText.NORMAL,
      INTP: comText.NORMAL,
      ENTP: comText.NORMAL,
      ISFP: comText.SOSO,
      ESFP: comText.SOSO,
      ISTP: comText.SOSO,
      ESTP: comText.SOSO,
      ISFJ: comText.BEST,
      ESFJ: comText.NORMAL,
      ISTJ: comText.BEST,
      ESTJ: comText.NORMAL,
    },
  },
  ISTP: {
    receive: "우정",
    text: "ISTP는 호기심이 넘치는 재주꾼입니다. 활발하고 예술가 타입인 사람들이 많으며 연애를 할 때에도 서로간의 존중이 가장 기본입니다. 연인의 독립적인 성향을 이해해주고 존중해주며 이렇기 때문에 본인도 존중받기를 원합니다.",
    compatibility: {
      INFP: comText.BAD,
      ENFP: comText.BAD,
      INFJ: comText.BAD,
      ENFJ: comText.BAD,
      INTJ: comText.NORMAL,
      ENTJ: comText.NORMAL,
      INTP: comText.NORMAL,
      ENTP: comText.NORMAL,
      ISFP: comText.SOSO,
      ESFP: comText.SOSO,
      ISTP: comText.SOSO,
      ESTP: comText.SOSO,
      ISFJ: comText.NORMAL,
      ESFJ: comText.BEST,
      ISTJ: comText.NORMAL,
      ESTJ: comText.BEST,
    },
  },
  ESTP: {
    receive: "선택권",
    text: "ESTP 유형의 사람들은 재치가 있고 매력적이며 갈등을 즐기는 사람들 입니다. 활발한 기운이 넘치는 이들의 최대 강점은 자발적 이라는 것입니다. 이 유형의 사람들은 익스트림 스포츠와 같은 스릴을 즐기기 때문에 재미있는 연애를 할 수 있습니다.",
    compatibility: {
      INFP: comText.BAD,
      ENFP: comText.BAD,
      INFJ: comText.BAD,
      ENFJ: comText.BAD,
      INTJ: comText.NORMAL,
      ENTJ: comText.NORMAL,
      INTP: comText.NORMAL,
      ENTP: comText.NORMAL,
      ISFP: comText.SOSO,
      ESFP: comText.SOSO,
      ISTP: comText.SOSO,
      ESTP: comText.SOSO,
      ISFJ: comText.BEST,
      ESFJ: comText.NORMAL,
      ISTJ: comText.BEST,
      ESTJ: comText.NORMAL,
    },
  },
  ISFJ: {
    receive: "안정감",
    text: "내 주변에 있는 소중한 사람을 곁에 두는데 많이 노력하며 망설임이 없어 연인을 감정적으로 잘 보살핍니다. 일상에서는 소소하게 잘 도와주며 일을 잘 합니다. 연인과의 관계에서 조화로움을 추구하는 편이며 정말로 사랑하는 사람이라면 간 쓸개를 헌신할 정도로 사랑을 합니다.",
    compatibility: {
      INFP: comText.BAD,
      ENFP: comText.BAD,
      INFJ: comText.BAD,
      ENFJ: comText.BAD,
      INTJ: comText.SOSO,
      ENTJ: comText.NORMAL,
      INTP: comText.SOSO,
      ENTP: comText.SOSO,
      ISFP: comText.NORMAL,
      ESFP: comText.BEST,
      ISTP: comText.NORMAL,
      ESTP: comText.BEST,
      ISFJ: comText.GOOD,
      ESFJ: comText.GOOD,
      ISTJ: comText.GOOD,
      ESTJ: comText.GOOD,
    },
  },
  ESFJ: {
    receive: "정성",
    text: "인기가 많은 ESFJ의 유형의 사람은 연인에게 도움이 되는 것을 좋아하며 연인을 지지하기 위하여 진지한 노력을 많이 합니다. 대체로 좋은 기분으로 상대를 대하려 하고 믿음직 스러운 유형 입니다. 신뢰성이 가장 큰 장점입니다.",
    compatibility: {
      INFP: comText.BAD,
      ENFP: comText.BAD,
      INFJ: comText.BAD,
      ENFJ: comText.BAD,
      INTJ: comText.SOSO,
      ENTJ: comText.NORMAL,
      INTP: comText.SOSO,
      ENTP: comText.SOSO,
      ISFP: comText.BEST,
      ESFP: comText.NORMAL,
      ISTP: comText.BEST,
      ESTP: comText.NORMAL,
      ISFJ: comText.GOOD,
      ESFJ: comText.GOOD,
      ISTJ: comText.GOOD,
      ESTJ: comText.GOOD,
    },
  },
  ISTJ: {
    receive: "책임감",
    text: "ISTJ의 연애 강점은 헌신입니다. 연애를 할 때 상대방과 커뮤니케이션이 원활하며 경청도 잘 해줍니다. 서로간의 건설적인 비판을 통하여 신뢰를 향상해 나갑니다. 연인이 ISTJ일 경우 실수 하였을 때 가장 믿을 수 있는 사람입니다.",
    compatibility: {
      INFP: comText.BAD,
      ENFP: comText.BAD,
      INFJ: comText.BAD,
      ENFJ: comText.BAD,
      INTJ: comText.SOSO,
      ENTJ: comText.NORMAL,
      INTP: comText.SOSO,
      ENTP: comText.SOSO,
      ISFP: comText.NORMAL,
      ESFP: comText.BEST,
      ISTP: comText.NORMAL,
      ESTP: comText.BEST,
      ISFJ: comText.GOOD,
      ESFJ: comText.GOOD,
      ISTJ: comText.GOOD,
      ESTJ: comText.GOOD,
    },
  },
  ESTJ: {
    receive: "팀워크",
    text: "ESTJ의 사람들은 결단력이 강한 모습을 볼 수 있습니다. 연인과 함께 어렵고 힘든일을 마주하면 실용적이고 신속한 결단을 내려 상황을 헤쳐나가는 모습을 볼 수 있습니다. 그렇기 때문에 실질적인 도움을 주는 현실주의자인 분들 입니다.",
    compatibility: {
      INFP: comText.BAD,
      ENFP: comText.BAD,
      INFJ: comText.BAD,
      ENFJ: comText.BAD,
      INTJ: comText.SOSO,
      ENTJ: comText.NORMAL,
      INTP: comText.BEST,
      ENTP: comText.SOSO,
      ISFP: comText.BEST,
      ESFP: comText.NORMAL,
      ISTP: comText.BEST,
      ESTP: comText.NORMAL,
      ISFJ: comText.GOOD,
      ESFJ: comText.GOOD,
      ISTJ: comText.GOOD,
      ESTJ: comText.GOOD,
    },
  },
};
export const Result = () => {
  const [my, setMy] = useState(undefined);
  const [your, setYour] = useState(undefined);
  const [myMbti, setMyMbti] = useState("ESTJ");
  const [yourMbti, setYourMbti] = useState("ESTJ");
  useEffect(() => {
    let myMbti = localStorage.getItem("my-mbti")
      ? localStorage.getItem("my-mbti")
      : "ESTJ";

    let yourMbti = localStorage.getItem("your-mbti")
      ? localStorage.getItem("your-mbti")
      : "ESTJ";

    setMy(comScore[myMbti]);
    setYour(comScore[yourMbti]);
    setMyMbti(myMbti);
    setYourMbti(yourMbti);
  }, []);
  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-3xl text-center pt-16">
        {myMbti} 💙 {yourMbti}
      </h1>
      <div className="text-3xl text-center pt-4 mb-4">
        {my && my.compatibility[yourMbti] === comText.BEST ? (
          <span className="text-best">{my.compatibility[yourMbti]}</span>
        ) : (
          ""
        )}
        {my && my.compatibility[yourMbti] === comText.GOOD ? (
          <span className="text-good">{my.compatibility[yourMbti]}</span>
        ) : (
          ""
        )}
        {my && my.compatibility[yourMbti] === comText.NORMAL ? (
          <span className="text-normal">{my.compatibility[yourMbti]}</span>
        ) : (
          ""
        )}
        {my && my.compatibility[yourMbti] === comText.SOSO ? (
          <span className="text-soso">{my.compatibility[yourMbti]}</span>
        ) : (
          ""
        )}
        {my && my.compatibility[yourMbti] === comText.BAD ? (
          <span className="text-bad">{my.compatibility[yourMbti]}</span>
        ) : (
          ""
        )}
      </div>
      <AdsenseResultCom />
      <div className="px-4 pt-4">
        <h2 className="text-xl pb-2">{myMbti} 연인에게 원하는 것</h2>
        <p className="text-left">{my && my.receive}</p>
      </div>
      <div className="px-4 pt-4">
        <h2 className="text-xl pb-2">{myMbti} 궁합 특징</h2>
        <p className="text-left">{my && my.text}</p>
      </div>
      <AdsenseResultCom2 />
      <div className="px-4 pt-4">
        <h2 className="text-xl pb-2">{yourMbti} 연인에게 원하는 것</h2>
        <p className="text-left">{your && your.receive}</p>
      </div>
      <div className="px-4 pt-4">
        <h2 className="text-xl pb-2">{yourMbti} 궁합 특징</h2>
        <p className="text-left">{your && your.text}</p>
      </div>

      <Share />

      <div className="text-center pb-4">
        <Button
          className="mt-2 mb-2 btn-next"
          style={{ width: 336 }}
          type="primary"
          size="large"
        >
          <a href="https://color.f5game.co.kr">색맹 테스트</a>
        </Button>
        <Button
          className="mt-2 mb-2 btn-next"
          style={{ width: 336 }}
          type="primary"
          size="large"
        >
          <a href="https://color-age.f5game.co.kr">정신연령 테스트</a>
        </Button>
        <Button
          className="mt-2 btn-next"
          style={{ width: 336 }}
          type="primary"
          size="large"
        >
          <a href="https://animal.f5game.co.kr">영적동물 테스트</a>
        </Button>
      </div>
    </div>
  );
};
