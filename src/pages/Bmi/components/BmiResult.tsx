import { useEffect, useState } from "react";

interface PropsType {
  result: number;
}

function BmiResult({ result }: PropsType) {
  const [check, setCheck] = useState("");

  function bmiCheck(result: number) {
    if (result >= 30.0) {
      setCheck("비만");
    } else if (result >= 25.0) {
      setCheck("과제충");
    } else if (result >= 18.5) {
      setCheck("정상");
    } else if (result >= 1) {
      setCheck("저체중");
    } else {
      setCheck("idle.. ");
    }
  }

  useEffect(() => {
    bmiCheck(result);
  }, [result]);
  return (
    <article>
      <p>
        비만여부: <b style={{ color:  "tomato" }}>{check}</b>
      </p>
      <p>
        BMI : <b style={{ color: "tomato" }}>{result || 0}</b>{" "}
      </p>
    </article>
      );
}

export default BmiResult;
